"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Points from "./Points";
import emotionStyled from "@emotion/styled";

const Container = emotionStyled.div({
  width: "100vw",
  height: "100vh",
  zIndex: 0,
  marginTop: "250px",
});

export function RippleBackground() {
  return (
    <Container>
      <Canvas legacy={false} camera={{ position: [200, 5, 200], fov: 20 }}>
        <Suspense fallback={null}>
          <Points />
        </Suspense>
      </Canvas>
    </Container>
  );
}
