import React, { useEffect, useRef } from 'react';
import { useControls } from 'leva';
import * as THREE from 'three';

import glowVertexShader from '../../shaders/glow/vertex.glsl';
import glowFragmentShader from '../../shaders/glow/fragment.glsl';

const GlowShader = {
  uniforms: {
    u_color: { value: new THREE.Color('#0215be') },
    u_dot_intensity: { value: 6.0 },
    u_viewDirection: {
      value: new THREE.Vector3(0, 0, 1),
    },
  },
  vertexShader: glowVertexShader,
  fragmentShader: glowFragmentShader,
};

const Glow = () => {
  const glowMaterialRef = useRef<THREE.ShaderMaterial>(null);

  const { u_color, size, u_dot_intensity, posX, posY, posZ } = useControls({
    u_color: '#060815',
    posX: {
      min: -10.0,
      max: 10.0,
      step: 0.01,
      value: 1.37,
    },
    posY: {
      min: -10.0,
      max: 10.0,
      step: 0.01,
      value: -1.0,
    },
    posZ: {
      min: -10.0,
      max: 10.0,
      step: 0.01,
      value: -9.9,
    },
    size: {
      value: 630,
      min: 600,
      max: 1200,
      step: 1,
    },
    u_dot_intensity: {
      value: 1.8,
      min: 0,
      max: 10.0,
      step: 0.1,
    },
  });

  useEffect(() => {
    if (glowMaterialRef.current) {
      glowMaterialRef.current.uniforms.u_color.value = new THREE.Color(u_color);
      glowMaterialRef.current.uniforms.u_dot_intensity.value = u_dot_intensity;
      glowMaterialRef.current.uniforms.u_viewDirection.value =
        new THREE.Vector3(posX, posY, posZ);
    }
  }, [glowMaterialRef, u_color, u_dot_intensity, posX, posY, posZ]);

  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[size, 32 * 4, 32 * 4]} />
      <shaderMaterial
        ref={glowMaterialRef}
        attach="material"
        depthWrite={false}
        args={[GlowShader]}
        // blending={THREE.NoBlending}
        transparent
        side={THREE.FrontSide}
      />
    </mesh>
  );
};

export default Glow;
