import React, { useState } from 'react';
import ModelViewer from '../components/demo/ModelViewer';
import AnimatedSection from '../components/common/AnimatedSection';

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);
  const [demoStatus, setDemoStatus] = useState<string>('');

  const handleAction = (action: string) => {
    setActiveDemo(action);
    switch (action) {
      case 'detect':
        setDemoStatus('Detecting waste type... Organic matter identified!');
        break;
      case 'compost':
        setDemoStatus('Starting composting cycle. Estimated completion: 8 hours');
        break;
      case 'filter':
        setDemoStatus('Air purification system activated. HEPA and carbon filters engaged.');
        break;
      default:
        setDemoStatus('');
    }

    // Reset status after 3 seconds
    setTimeout(() => {
      setActiveDemo(null);
      setDemoStatus('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <AnimatedSection className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience EDUST in Action
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Interact with our virtual demo to see how EDUST transforms organic waste into valuable compost while keeping your space clean and odor-free.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mb-12">
          <ModelViewer onActionTriggered={handleAction} />
          
          {demoStatus && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-lg text-center">
              <p className="text-green-800 dark:text-green-200">{demoStatus}</p>
            </div>
          )}
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Smart Waste Detection',
              description: 'Advanced sensors identify organic waste types and optimize the composting process accordingly.',
              icon: '🔍'
            },
            {
              title: 'Night Mode Operation',
              description: 'EDUST works silently during the night, ensuring minimal disruption to your daily routine.',
              icon: '🌙'
            },
            {
              title: 'Air Purification',
              description: 'Dual-layer filtration system eliminates odors and maintains fresh air quality.',
              icon: '💨'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </div>
  );
};

export default DemoPage;