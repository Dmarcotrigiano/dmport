
import ReactDOM from "react-dom";
import React from "react";
import { PerspectiveCamera } from "@react-three/drei";
// import { Water } from "three/examples/jsm/objects/Water";
import * as THREE from "three";
import { AmbientLight, MeshBasicMaterial } from "three";
import { PlaneBufferGeometry } from "three";
import {Canvas} from '@react-three/fiber'

export const ThreeWater = ({}) => {
  return (
    <Canvas>
      <PerspectiveCamera args={{fov: 55, near: 1, far: 20000, position: [0, 0, 10] }}/>
      <mesh>
      <PlaneBufferGeometry args={[100,100]}/>
      <MeshBasicMaterial />
      </mesh>

      <AmbientLight intensity={3} />
    </Canvas>
  );
};
export default ThreeWater;
