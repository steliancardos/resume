import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

interface SectionBackgroundProps {
  theme: string;
}

function SpinningBox({ color }: { color: string }) {
  const ref = useRef<Mesh>(null!);
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta * 0.7;
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function SectionBackground({ theme }: SectionBackgroundProps) {
  const colorMap: Record<string, string> = {
    about: '#1e1e1e',
    skills: '#20232a',
    experience: '#091f3b',
    certifications: '#3a1f0b',
    contact: '#0b3a28',
  };
  const color = colorMap[theme] || '#111';

  return (
    <Canvas
      className="absolute inset-0 -z-10"
      camera={{ position: [0, 0, 5] }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <SpinningBox color={color} />
    </Canvas>
  );
}
