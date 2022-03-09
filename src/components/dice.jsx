import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import { Backdrop, Stats, useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

export default function Dice() {
  const [roll, setRoll] = useState(false);
  return (
    <>
      <div
        style={{
          position: 'fixed',
          right: 0,
          width: 200,
          height: 30,
          color: 'white',
          zIndex: 10,
          margin: 10,
        }}
      >
        <button
          onClick={() => {
            setRoll(!roll);
          }}
        >
          Dice
        </button>
      </div>

      <Canvas
        shadows
        gl={{ stencil: false, depth: false, alpha: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 50, near: 17, far: 40 }}
      >
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={2} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <directionalLight
          castShadow
          intensity={2}
          position={[50, 50, 25]}
          shadow-mapSize={[256, 256]}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Physics
          gravity={[0, -50, 0]}
          defaultContactMaterial={{ restitution: 0.5 }}
        >
          <group position={[0, 0, -10]}>
            <Mouse />
            <Borders />
            <DiceBox roll={roll} setRoll={setRoll} />
          </group>
        </Physics>
        <Stats />
      </Canvas>
    </>
  );
}

function DiceBox({ roll, setRoll }) {
  // model from https://www.turbosquid.com/3d-models/3d-6-edged-dice-1301812#
  const { nodes, materials } = useGLTF('../../model/dice.gltf');
  const { viewport } = useThree();
  const [ref, api] = useBox(() => ({
    mass: 100,
    position: [4 - Math.random() * 8, viewport.height, 0, 0],
    args: [2, 2, 2],
    friction: 0.4,
  }));
  const mat = useRef();
  const mat2 = useRef();

  useEffect(() => {
    if (roll) {
      api.position.set(0, 0, 0);
      setRoll(false);
    }
  }, [roll, setRoll]);

  useEffect(() => {
    mat.current.color = new THREE.Color('white');
    mat2.current.color = new THREE.Color('black');
  }, []);

  return (
    <group ref={ref} dispose={null}>
      <mesh geometry={nodes.Cube001_2.geometry}>
        <meshToonMaterial ref={mat2} attach="material" />
      </mesh>
      <mesh geometry={nodes.Cube001_1.geometry}>
        <meshToonMaterial ref={mat} attach="material" />
      </mesh>
    </group>
  );
}

function Borders() {
  const { viewport } = useThree();
  return (
    <>
      <Plane
        position={[0, -viewport.height / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <Plane
        position={[-viewport.width / 2 - 1, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <Plane
        position={[viewport.width / 2 + 1, 0, 0]}
        rotation={[0, -Math.PI / 2, 0]}
      />
      <Plane position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <Plane position={[0, 0, 12]} rotation={[0, -Math.PI, 0]} />
    </>
  );
}

function Plane({ color, ...props }) {
  usePlane(() => ({ ...props }));
  return null;
}

function Mouse() {
  const { viewport } = useThree();
  const [, api] = useSphere(() => ({ type: 'Kinematic', args: [6] }));
  return useFrame((state) =>
    api.position.set(
      (state.mouse.x * viewport.width) / 2,
      (state.mouse.y * viewport.height) / 2,
      7
    )
  );
}
