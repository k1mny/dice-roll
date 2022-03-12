import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import * as THREE from 'three';
import { useDiceTop } from '../globalState/states';

export default function DiceBox({ index, roll = false, setRoll }) {
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

  useLayoutEffect(() => {
    api.velocity.subscribe((v) => (velocity.current = v));
    api.rotation.subscribe((r) => (rotation.current = r));
  }, [api]);

  useFrame(() => {
    if (velocity && rotation) {
      const velNorm = Math.abs(
        velocity.current.reduce((pre, cur) => pre + cur * cur)
      );
      if (Math.sqrt(velNorm) < 0.1) {
        console.log(
          'x: %.3f, y: %.3f, z: %.3f',
          rotation.current[0],
          rotation.current[1],
          rotation.current[2]
        );
        const rotIdx =
          Math.abs(rotation.current[0]) < 0.1 &&
          Math.abs(rotation.current[1]) < 0.1
            ? 1
            : 2;
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
