import React from 'react';
import { CustomizationPanel } from './components/CustomizationPanel';
import { AvatarViewer } from './components/AvatarViewer';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <ThemeToggle />
      
      <header className="p-4 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600
                       bg-clip-text text-transparent">
          3D Avatar Creator
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Create your perfect digital avatar
        </p>
      </header>

      <main className="container mx-auto p-4 flex gap-4 h-[calc(100vh-12rem)]">
        <CustomizationPanel />
        <AvatarViewer />
      </main>
    </div>
  );
}

export default App;