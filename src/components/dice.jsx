import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { Stats } from '@react-three/drei';
import {
  useRecoilBridgeAcrossReactRoots_UNSTABLE,
  useRecoilValue,
} from 'recoil';
import { useDiceTop } from '../globalState/states';
import DiceBox from './diceModel';
import Borders from './border';
import UI from './ui';

export default function Dice() {
  const diceTopNum = useRecoilValue(useDiceTop);

  // to use recoil state inside <Canvas>
  const RecoilBridge = useRecoilBridgeAcrossReactRoots_UNSTABLE();

  return (
    <>
      <UI />
      <Canvas
        shadows
        gl={{ depth: true, alpha: false, antialias: false }}
        camera={{ position: [0, 0, 20], fov: 50, near: 1, far: 100 }}
      >
        <RecoilBridge>
          <color attach="background" args={['#333333']} />
          <ambientLight intensity={2} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <Physics
            gravity={[0, -50, 0]}
            defaultContactMaterial={{ restitution: 0.5, friction: 0.05 }}
            size={16}
          >
            <group position={[0, 0, -10]}>
              <Borders />
              {diceTopNum.map((_, idx) => (
                <DiceBox key={idx} index={idx} />
              ))}
            </group>
          </Physics>
          <Stats />
        </RecoilBridge>
      </Canvas>
    </>
  );
}
