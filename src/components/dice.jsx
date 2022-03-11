import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';
import { Backdrop, OrbitControls, Stats, useGLTF } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Grid, Slider, Box, Button } from '@mui/material';
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilValue,
  useSetRecoilState,
  useRecoilState,
} from 'recoil';
import { useDiceTop } from '../globalState/states';

export default function Dice() {
  const [roll, setRoll] = useState(false);
  const [diceTopNum, setDiceTopNum] = useRecoilState(useDiceTop);

  const handleSliderChange = (event, newValue) => {
    if (newValue >= diceTopNum.length) {
      setDiceTopNum([...diceTopNum, ...Array(newValue - diceTopNum.length)]);
    } else {
      setDiceTopNum(diceTopNum.slice(0, newValue - diceTopNum.length));
    }
  };

  // to use recoil state inside <Canvas>
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <>
      <Box
        style={{
          position: 'fixed',
          right: 0,
          width: 400,
          height: 200,
          color: 'white',
          zIndex: 10,
          margin: 10,
        }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          alignItems="center"
          width={'100%'}
          m={0}
        >
          <Grid item p={0}>
            <Button
              variant="contained"
              onClick={() => {
                setRoll(!roll);
              }}
            >
              Roll!
            </Button>
          </Grid>
          <Grid item width={'80%'} p={0}>
            <Slider
              defaultValue={1}
              valueLabelDisplay="auto"
              step={1}
              value={diceTopNum.length}
              onChange={handleSliderChange}
              min={1}
              max={10}
            />
          </Grid>
        </Grid>
        <Grid item>Top: {diceTopNum}</Grid>
      </Box>

      <Canvas
        shadows
        gl={{ stencil: false, depth: false, alpha: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 50, near: 1, far: 100 }}
      >
        <RecoilBridge>
          <color attach="background" args={['#333333']} />
          <ambientLight intensity={2} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <Physics
            gravity={[0, -50, 0]}
            defaultContactMaterial={{ restitution: 0.5 }}
          >
            <group position={[0, 0, -10]}>
              {/* <Mouse /> */}
              <Borders />
              {diceTopNum.map((_, idx) => (
                <DiceBox key={idx} index={idx} roll={roll} setRoll={setRoll} />
              ))}
            </group>
          </Physics>
          <Stats />
          <OrbitControls
            enablePan={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </RecoilBridge>
      </Canvas>
    </>
  );
}

function DiceBox({ index, roll = false, setRoll }) {
  // model from https://www.turbosquid.com/3d-models/3d-6-edged-dice-1301812#
  const { nodes } = useGLTF('../../model/dice.gltf');
  const { viewport } = useThree();
  const [diceTopNum, setDiceTopNum] = useRecoilState(useDiceTop);

  const [ref, api] = useBox(() => ({
    mass: 100,
    position: [4 - Math.random() * 8, 0, 0, 0],
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

  const rotation = useRef([0, 0, 0]);
  const velocity = useRef([0, 0, 0]);
  // useFrame(() => {
  // api.rotation.subscribe((r) => (rotation.current = r));
  //   api.velocity.subscribe((v) => (velocity.current = v));
  // });
  // console.log(rotation.current);
  // useEffect(() => {
  //   const unsubscribe = api.rotation.subscribe((r) => (rotation.current = r));
  //   return unsubscribe;
  // }, []);
  // useEffect(() => {
  //   const unsubscribe = api.velocity.subscribe((v) => (velocity.current = v));
  //   return unsubscribe;
  // }, []);

  // useEffect(() => {
  //   if (velocity && rotation && velocity.current.length > 0) {
  //     if (
  //       Math.sqrt(velocity.current.reduce((pre, cur) => pre + cur * cur)) < 0.1
  //     ) {
  //       console.log('set: ', rotation.current[0]);
  //       setDiceTopNum((old) => (old[index] = rotation.current[0]));
  //     }
  //   }
  // }, [rotation, velocity]);

  return (
    <group ref={ref} dispose={null}>
      <mesh geometry={nodes.Cube001_2.geometry}>
        <meshStandardMaterial ref={mat2} attach="material" />
      </mesh>
      <mesh geometry={nodes.Cube001_1.geometry}>
        <meshStandardMaterial ref={mat} attach="material" />
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
