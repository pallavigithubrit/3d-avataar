import { create } from 'zustand';
import type { AvatarCustomization } from '../types/avatar';

interface AvatarState {
  customization: AvatarCustomization;
  updateFeature: (category: keyof AvatarCustomization, feature: string, value: number | string) => void;
  resetCustomization: () => void;
}

const defaultCustomization: AvatarCustomization = {
  face: {
    shape: 50,
    skinTone: '#F5D0C5',
    eyeColor: '#4B6988',
    eyeShape: 50,
    noseShape: 50,
    lipShape: 50,
    jawline: 50
  },
  hair: {
    style: 1,
    color: '#4A3421',
    length: 50,
    texture: 50
  },
  body: {
    height: 50,
    build: 50,
    shoulders: 50,
    arms: 50,
    legs: 50
  },
  clothing: {
    topStyle: 1,
    topColor: '#2B2B2B',
    bottomStyle: 1,
    bottomColor: '#404040',
    shoes: 1
  },
  accessories: {
    glasses: 0,
    earrings: 0,
    necklace: 0,
    hat: 0
  }
};

export const useAvatarStore = create<AvatarState>((set) => ({
  customization: defaultCustomization,
  updateFeature: (category, feature, value) =>
    set((state) => ({
      customization: {
        ...state.customization,
        [category]: {
          ...state.customization[category],
          [feature]: value
        }
      }
    })),
  resetCustomization: () => set({ customization: defaultCustomization })
}));