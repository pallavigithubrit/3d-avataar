import React from 'react';
import { useAvatarStore } from '../store/avatarStore';

export const AvatarModel: React.FC = () => {
  const customization = useAvatarStore((state) => state.customization);

  // Placeholder mesh until we implement the full 3D model
  return (
    <mesh>
      <boxGeometry args={[1, 2, 1]} />
      <meshStandardMaterial color={customization.face.skinTone} />
    </mesh>
  );
};