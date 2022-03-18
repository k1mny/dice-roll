import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import * as THREE from 'three';
import { useDiceRoll, useDiceTop } from '../globalState/states';
import Rot2Top from '../logic/diceFace';

export default function DiceBox({ index }) {
  // model from https://www.turbosquid.com/3d-models/3d-6-edged-dice-1301812#
  const { nodes, materials } = useGLTF('../../model/dice.gltf');
  const { viewport } = useThree();
  const [diceTopNum, setDiceTopNum] = useRecoilState(useDiceTop);
  const [roll, setRoll] = useRecoilState(useDiceRoll);

  const [ref, api] = useBox(() => ({
    mass: 10,
    position: [4 - Math.random() * 8, (viewport.height / 2) * Math.random(), 0],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI,
    ],
    args: [2, 2, 2],
    friction: 0,
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
      if (clock.oldTime % 20 === 0) {
        if (Math.sqrt(velNorm) < 10) {
          const face = Rot2Top(rotation.current, 30);
          setDiceTopNum((old) =>
            old.map((t, i, self) => (i === index ? face : self[i]))
          );
        } else if (diceTopNum[index] !== 0) {
          setDiceTopNum((old) =>
            old.map((t, i, self) => (i === index ? 0 : self[i]))
          );
        }
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

useGLTF.preload('../../model/dice.gltf');
