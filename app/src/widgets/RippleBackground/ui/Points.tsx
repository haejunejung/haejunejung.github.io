import React, { useCallback, useMemo, useRef } from "react";
import * as THREE from "three";

import { useFrame, useLoader } from "@react-three/fiber";
import circleImg from "../const/circle.png";

const Points: React.FC = () => {
  const imgTex = useLoader(THREE.TextureLoader, circleImg.src);

  const bufferRef = useRef<THREE.BufferAttribute | null>(null);

  let t = 0;
  const f = 0.002;
  const a = 3;

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  const count = 40;
  const sep = 2;

  // [(), (), (), ...]
  // [x1, y1, z1, x2, y2, z2, ...]
  const positions: THREE.TypedArray = useMemo(() => {
    const positions = [0, 0, 0];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * xi;
        const z = sep * zi;
        const y = graph(x, z);

        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  useFrame(() => {
    t += 15;
    const positions = bufferRef.current?.array;

    if (positions) {
      let i = 0;

      for (let xi = 0; xi < count; xi++) {
        for (let zi = 0; zi < count; zi++) {
          const x = sep * (xi - count / 2);
          const z = sep * (zi - count / 2);
          positions[i + 1] = graph(x, z);
          i += 3;
        }
      }

      if (bufferRef.current !== null) {
        bufferRef.current.needsUpdate = true;
      }
    }
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach={"attributes-position"}
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={imgTex}
        color={0xffffff}
        size={1}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
};

export default Points;
