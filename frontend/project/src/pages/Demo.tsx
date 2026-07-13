import { useState } from 'react';
import { motion } from 'framer-motion';

const Demo = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const features = [
    {
      id: 'detection',
      title: 'Smart Detection',
      description: 'Watch how EDUST automatically detects and categorizes different types of waste.',
      icon: '🔍'
    },
    {
      id: 'composting',
      title: 'Composting Process',
      description: 'See the internal composting process in action with real-time temperature and moisture control.',
      icon: '🌱'
    },
    {
      id: 'purification',
      title: 'Air Purification',
      description: 'Experience how EDUST filters and purifies the air while processing waste.',
      icon: '🌬️'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Experience EDUST in Action
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the innovative features that make EDUST the future of smart composting.
          </p>
        </motion.div>

        {/* Interactive Demo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Model Placeholder */}
          <div className="bg-gray-800 rounded-xl p-8 aspect-square flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">🗑️</div>
              <p className="text-gray-400">Interactive 3D Model Coming Soon</p>
            </div>
          </div>

          {/* Feature Controls */}
          <div className="space-y-6">
            {features.map((feature) => (
              <motion.button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`w-full p-6 rounded-xl text-left transition-all ${
                  activeFeature === feature.id
                    ? 'bg-green-500/20 border-green-500'
                    : 'bg-gray-800/50 border-gray-700 hover:bg-gray-700/50'
                } border-2`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            The Composting Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: 1,
                title: 'Waste Collection',
                description: 'Place your organic waste in EDUST. The smart sensors will automatically detect and categorize it.'
              },
              {
                step: 2,
                title: 'Processing',
                description: 'EDUST maintains optimal conditions for composting while breaking down the waste efficiently.'
              },
              {
                step: 3,
                title: 'Ready to Use',
                description: 'Collect nutrient-rich compost and enjoy purified air in your space.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              >
                <div className="text-2xl font-bold text-green-400 mb-2">
                  Step {step.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo; 