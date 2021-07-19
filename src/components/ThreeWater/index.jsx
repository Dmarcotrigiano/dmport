// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { AmbientLight, PlaneGeometry } from "three";
// import { LiquidRefractionMaterial } from "./liquidMaterialShader";

// export const ThreeWater = ({}) => {
//   return (
//     <Canvas>
//       <pointLight position={[]} />
//       <mesh>
//         <sphereBufferGeometry />
//         <meshStandardMaterial color="hotpink" />
//       </mesh>
//     </Canvas>
//     // <Canvas>
//     //   <AmbientLight />
//     //   <PlaneGeometry />
//     //   <LiquidRefractionMaterial />
//     // </Canvas>
//   );
// };
// export default ThreeWater;
import ReactDOM from "react-dom";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { InstancedMesh } from "three";

export const ThreeWater = ({}) => {
  return (
    <Canvas>
      <mesh>
        <sphereBufferGeometry />
        <meshPhongMaterial color="blue" />
      </mesh>
      <ambientLight />
    </Canvas>
  );
};
export default ThreeWater;
