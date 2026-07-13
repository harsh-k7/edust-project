import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import Button from '../common/Button';

// Placeholder component for the 3D model
const CompostBinModel: React.FC = () => {
  return (
    <mesh>
      <boxGeometry args={[1, 1.5, 1]} />
      <meshStandardMaterial color="#2E7D32" />
      <mesh position={[0, 0.75, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 32]} />
        <meshStandardMaterial color="#1B5E20" />
      </mesh>
    </mesh>
  );
};

interface ModelViewerProps {
  onActionTriggered: (action: string) => void;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ onActionTriggered }) => {
  const [rotating, setRotating] = useState(false);

  return (
    <div className="w-full h-[500px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[3, 3, 3]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <CompostBinModel />
          <Environment preset="city" />
          <ContactShadows position={[0, -0.75, 0]} opacity={0.4} scale={10} blur={1.5} far={1} />
        </Suspense>
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={false} 
          autoRotate={rotating}
          autoRotateSpeed={2}
        />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex flex-wrap justify-center gap-3">
          <Button 
            variant="primary" 
            onClick={() => onActionTriggered('detect')}
          >
            Simulate Detection
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => onActionTriggered('compost')}
          >
            Start Composting
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/20"
            onClick={() => onActionTriggered('filter')}
          >
            Activate Filters
          </Button>
          <Button 
            variant="ghost" 
            className="text-white hover:bg-white/20"
            onClick={() => setRotating(!rotating)}
          >
            {rotating ? 'Stop Rotation' : 'Rotate Model'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ModelViewer;