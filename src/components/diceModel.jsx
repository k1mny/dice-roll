import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import * as THREE from 'three';
import { useDiceTop } from '../globalState/states';

export default function DiceBox({ index, roll = false, setRoll }) {
  // model from https://www.turbosquid.com/3d-models/3d-6-edged-dice-1301812#
  const { nodes, materials } = useGLTF('../../model/dice.gltf');
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

  useLayoutEffect(() => {
    const unsub = api.velocity.subscribe((v) => (velocity.current = v));
    const unsub2 = api.rotation.subscribe((r) => (rotation.current = r));
    return () => {
      unsub();
      unsub2();
    };
  }, [api]);

  useFrame(({ clock }) => {
    if (velocity && rotation) {
      const velNorm = Math.abs(
        velocity.current.reduce((pre, cur) => pre + cur * cur)
      );
      if (Math.sqrt(velNorm) < 0.2 && clock.oldTime % 100 === 0) {
        let rotIdx = 0;
        /**
         * +180 ~ -180
         *    x  y  z
         * 1: +-180 - +-180, 0 - 0
         * 2: -90 0 -
         * 3: 0 - 90, +-180 - -90
         * 4: +-180 - 90, 0 - -90
         * 5: 90 0 -
         * 6: 0 - +-180, +-180 - 0
         */
        const rotX = ((rotation.current[0] / Math.PI) * 180) % 180;
        const rotY = ((rotation.current[1] / Math.PI) * 180) % 180;
        const rotZ = ((rotation.current[2] / Math.PI) * 180) % 180;
        const eps = 10;
        if (
          (Math.abs(rotX) < eps && Math.abs(rotZ) < eps) ||
          (Math.abs(Math.abs(rotX) - 180) < eps &&
            Math.abs(Math.abs(rotZ) - 180) < eps)
        ) {
          rotIdx = 1;
        } else if (Math.abs(rotX + 90) < eps && Math.abs(rotY) < eps) {
          rotIdx = 2;
        } else if (
          (Math.abs(rotX) < eps && Math.abs(rotZ - 90) < eps) ||
          (Math.abs(Math.abs(rotX) - 180) < eps && Math.abs(rotZ + 90) < eps)
        ) {
          rotIdx = 3;
        } else if (
          (Math.abs(Math.abs(rotX) - 180) < eps && Math.abs(rotZ - 90) < eps) ||
          (Math.abs(rotX) < eps && Math.abs(rotZ + 90) < eps)
        ) {
          rotIdx = 4;
        } else if (Math.abs(rotX - 90) < eps && Math.abs(rotY) < eps) {
          rotIdx = 5;
        } else if (
          (Math.abs(rotX) < eps && Math.abs(Math.abs(rotZ) - 180) < eps) ||
          (Math.abs(Math.abs(rotX) - 180) < eps && Math.abs(rotZ) < eps)
        ) {
          rotIdx = 6;
        }

        if (rotIdx === 0) {
          console.log('x: %.3f, y: %.3f, z: %.3f', rotX, rotY, rotZ);
        }

        setDiceTopNum((old) =>
          old.map((t, i, self) => (i === index ? rotIdx : self[i]))
        );
      }
    }
  });

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
