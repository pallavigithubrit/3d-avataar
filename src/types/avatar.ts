export interface AvatarCustomization {
  face: {
    shape: number;
    skinTone: string;
    eyeColor: string;
    eyeShape: number;
    noseShape: number;
    lipShape: number;
    jawline: number;
  };
  hair: {
    style: number;
    color: string;
    length: number;
    texture: number;
  };
  body: {
    height: number;
    build: number;
    shoulders: number;
    arms: number;
    legs: number;
  };
  clothing: {
    topStyle: number;
    topColor: string;
    bottomStyle: number;
    bottomColor: string;
    shoes: number;
  };
  accessories: {
    glasses: number;
    earrings: number;
    necklace: number;
    hat: number;
  };
}

export interface CameraPreset {
  position: [number, number, number];
  target: [number, number, number];
  name: string;
}

export interface LightingPreset {
  name: string;
  ambient: number;
  directional: {
    intensity: number;
    position: [number, number, number];
    color: string;
  };
}