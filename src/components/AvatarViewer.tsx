import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { AvatarModel } from './AvatarModel';

export const AvatarViewer: React.FC = () => {
  const controlsRef = useRef(null);

  return (
    <div className="flex-1 relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 1.5, 4]} />
        <OrbitControls
          ref={controlsRef}
          minDistance={2}
          maxDistance={8}
          enablePan={false}
          enableDamping
        />
        
        <Environment preset="studio" />
        
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={1}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        
        <AvatarModel />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2
                      flex gap-2 p-2 bg-white dark:bg-gray-900 rounded-lg
                      shadow-lg">
        {['Front', 'Side', '3/4', 'Back', 'Top'].map((view) => (
          <button
            key={view}
            className="px-3 py-1 text-sm rounded-md bg-gray-100
                       dark:bg-gray-800 hover:bg-gray-200
                       dark:hover:bg-gray-700 transition-colors"
            onClick={() => {
              // Implement view changes
            }}
          >
            {view}
          </button>
        ))}
      </div>
    </div>
  );
};