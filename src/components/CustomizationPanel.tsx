import React from 'react';
import { useAvatarStore } from '../store/avatarStore';
import { Sliders, User, Shirt, Crown } from 'lucide-react';

export const CustomizationPanel: React.FC = () => {
  const { customization, updateFeature } = useAvatarStore();

  const categories = [
    {
      name: 'Face',
      icon: <User className="w-5 h-5" />,
      features: Object.entries(customization.face)
    },
    {
      name: 'Body',
      icon: <Sliders className="w-5 h-5" />,
      features: Object.entries(customization.body)
    },
    {
      name: 'Clothing',
      icon: <Shirt className="w-5 h-5" />,
      features: Object.entries(customization.clothing)
    },
    {
      name: 'Accessories',
      icon: <Crown className="w-5 h-5" />,
      features: Object.entries(customization.accessories)
    }
  ];

  return (
    <div className="w-80 h-full bg-white dark:bg-gray-900 p-4 overflow-y-auto
                    border-r border-gray-200 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Customization
      </h2>
      
      {categories.map((category) => (
        <details
          key={category.name}
          className="mb-4 group"
          open={category.name === 'Face'}
        >
          <summary className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100
                             dark:hover:bg-gray-800 rounded-lg transition-colors">
            {category.icon}
            <span className="font-medium text-gray-900 dark:text-white">
              {category.name}
            </span>
          </summary>
          
          <div className="mt-2 pl-4 space-y-4">
            {category.features.map(([feature, value]) => (
              <div key={feature} className="space-y-2">
                <label className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                  {feature.replace(/([A-Z])/g, ' $1').trim()}
                </label>
                
                {typeof value === 'number' ? (
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={value}
                    onChange={(e) => 
                      updateFeature(category.name.toLowerCase() as any, feature, 
                                  parseInt(e.target.value))
                    }
                    className="w-full"
                  />
                ) : (
                  <input
                    type="color"
                    value={value}
                    onChange={(e) =>
                      updateFeature(category.name.toLowerCase() as any, feature,
                                  e.target.value)
                    }
                    className="w-full h-8 rounded cursor-pointer"
                  />
                )}
              </div>
            ))}
          </div>
        </details>
      ))}
    </div>
  );
};