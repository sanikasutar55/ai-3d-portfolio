import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

/** Particle cloud - far fewer points on mobile. */
function Particles({ count, animate }: { count: number; animate: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < a.length; i++) a[i] = (Math.random() - 0.5) * (i % 3 === 2 ? 8 : 16);
    return a;
  }, [count]);
  useFrame((_, dt) => { if (animate && ref.current) ref.current.rotation.y += dt * 0.03; });
  return (
    <points ref={ref}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial size={0.035} color="#7dd3fc" transparent opacity={0.8} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/** Slowly floating wireframe geometry (depth layers). */
function Shape({ position, kind, speed, animate }: { position: [number, number, number]; kind: 'ico' | 'torus' | 'oct'; speed: number; animate: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }, dt) => {
    if (!animate || !ref.current) return;
    ref.current.rotation.x += dt * speed; ref.current.rotation.y += dt * speed * 0.7;
    ref.current.position.y = position[1] + Math.sin(clock.elapsedTime * speed * 2) * 0.25;
  });
  return (
    <mesh ref={ref} position={position}>
      {kind === 'ico' ? <icosahedronGeometry args={[0.9, 0]} /> : kind === 'torus' ? <torusGeometry args={[0.7, 0.2, 12, 32]} /> : <octahedronGeometry args={[0.8]} />}
      <meshStandardMaterial color="#a78bfa" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

/** Smooth mouse-based camera parallax. */
function Rig({ animate }: { animate: boolean }) {
  const { camera, pointer } = useThree();
  useFrame((_, dt) => {
    if (!animate) return;
    camera.position.x += (pointer.x * 0.8 - camera.position.x) * Math.min(1, dt * 2);
    camera.position.y += (pointer.y * 0.5 - camera.position.y) * Math.min(1, dt * 2);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D({ mobile, animate }: { mobile: boolean; animate: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={mobile ? 1 : [1, 1.5]} frameloop={animate ? 'always' : 'demand'}
      gl={{ antialias: !mobile, powerPreference: 'low-power' }} aria-hidden="true">
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 4]} intensity={30} color="#7dd3fc" />
      <Particles count={mobile ? 250 : 1200} animate={animate} />
      <Shape position={[-4, 1.5, -1]} kind="ico" speed={0.25} animate={animate} />
      {!mobile && <Shape position={[4.2, -1, -2]} kind="torus" speed={0.2} animate={animate} />}
      {!mobile && <Shape position={[3, 2.2, -3]} kind="oct" speed={0.3} animate={animate} />}
      <Rig animate={animate && !mobile} />
    </Canvas>
  );
}
