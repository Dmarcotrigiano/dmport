
import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { Water } from "three/examples/jsm/objects/Water";
import * as THREE from "three";

export const ThreeWater = ({}) => {
  return (
    <Canvas camera={{ fov: 55, near: 1, far: 20000, position: [30, 30, 100] }}>
      {/* <Water
        textureHeight={10000}
        textureWidth={10000}
        // waterNormals={new THREE.TextureLoader().load(
        //   "textures/waternormals.jpg",
        //   function (texture) {
        //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        //   },
        // )}
        sunColor={0xffffff}
        waterColor={0x001e0f}>
        <planeGeometry props={{ textureWidth: 10000, textureHeight: 10000 }} />
      </Water> */}

      <ambientLight intensity={3} />
    </Canvas>
  );
};
export default ThreeWater;
