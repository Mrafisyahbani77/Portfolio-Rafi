import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Stars } from "@react-three/drei";

const Sun = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
    </mesh>
  );
};

const Moon = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="white" emissive="white" emissiveIntensity={0.5} />
    </mesh>
  );
};

const Clouds = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial color="lightblue" opacity={0.5} transparent />
    </mesh>
  );
};

const Scene = ({ theme }) => {
  return (
    <>
      {theme === "light" ? (
        <>
          <Sun />
          <Clouds />
          <Clouds />
          <Clouds />
        </>
      ) : (
        <>
          <Moon />
          <Stars radius={100} depth={50} count={1000} factor={7} saturation={0} fade />
        </>
      )}
    </>
  );
};

const TreeScene = ({ theme }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Scene theme={theme} />
      <OrbitControls />
      <Preload all />
    </Canvas>
  );
};

export default TreeScene;
