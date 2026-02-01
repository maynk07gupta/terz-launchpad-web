import * as React from "react";
import { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Sphere, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Earth sphere component with textures
const EarthSphere = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  
  // Load NASA Earth textures
  const [earthTexture, bumpMap, specularMap, cloudsTexture] = useTexture([
    "https://unpkg.com/three-globe@2.31.3/example/img/earth-blue-marble.jpg",
    "https://unpkg.com/three-globe@2.31.3/example/img/earth-topology.png",
    "https://unpkg.com/three-globe@2.31.3/example/img/earth-water.png",
    "https://unpkg.com/three-globe@2.31.3/example/img/earth-clouds.png",
  ]);
  
  // Slow rotation animation
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    
    if (earthRef.current) {
      earthRef.current.rotation.y = elapsed * 0.03; // Slow rotation
    }
    
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsed * 0.035; // Slightly faster for clouds
    }
  });
  
  return (
    <group>
      {/* Main Earth sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          specular={new THREE.Color(0x333333)}
          shininess={15}
        />
      </mesh>
      
      {/* Cloud layer */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.02, 64, 64]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent
          opacity={0.35}
          depthWrite={false}
        />
      </mesh>
      
      {/* Atmosphere glow */}
      <mesh ref={atmosphereRef} scale={1.15}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={`
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
            }
          `}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
          transparent
        />
      </mesh>
    </group>
  );
};

// Loading fallback
const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[2, 32, 32]} />
    <meshBasicMaterial color="#1a365d" wireframe />
  </mesh>
);

interface Earth3DProps {
  size?: number;
}

export const Earth3D: React.FC<Earth3DProps> = ({ size = 700 }) => {
  return (
    <div 
      style={{ 
        width: size, 
        height: size,
        position: "relative",
      }}
    >
      <Canvas
        camera={{ 
          position: [0, 0, 4.5], 
          fov: 45,
          near: 0.1,
          far: 1000,
        }}
        style={{ 
          background: "transparent",
          borderRadius: "50%",
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        {/* Lighting setup for realistic appearance */}
        <ambientLight intensity={0.15} />
        <directionalLight 
          position={[5, 3, 5]} 
          intensity={1.8} 
          color="#ffffff"
        />
        <directionalLight 
          position={[-5, -2, -5]} 
          intensity={0.3} 
          color="#4a90d9"
        />
        <pointLight 
          position={[10, 5, 10]} 
          intensity={0.5} 
          color="#ffeedd"
        />
        
        <Suspense fallback={<LoadingFallback />}>
          <EarthSphere />
        </Suspense>
      </Canvas>
      
      {/* Outer glow effect */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: `
            0 0 60px hsla(200, 80%, 50%, 0.4),
            0 0 120px hsla(200, 85%, 45%, 0.25),
            0 0 200px hsla(210, 80%, 40%, 0.15)
          `,
        }}
      />
    </div>
  );
};
