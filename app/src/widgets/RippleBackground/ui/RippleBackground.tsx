"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Points from "./Points";

const RippleBackground: React.FC = () => {
  return (
    <Canvas legacy={false} camera={{ position: [200, 5, 200], fov: 20 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
    </Canvas>
  );
};

export default RippleBackground;
