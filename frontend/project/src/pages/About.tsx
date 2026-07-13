import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      title: 'Traditional Composting',
      description: 'Manual process, time-consuming, requires space and maintenance',
      icon: '🌱'
    },
    {
      title: 'EDUST Smart Bin',
      description: 'Automated process, space-efficient, minimal maintenance',
      icon: '🤖'
    }
  ];

  const safetyFeatures = [
    {
      title: 'Smart Sensors',
      description: 'Continuous monitoring of temperature and moisture levels',
      icon: '📊'
    },
    {
      title: 'Air Filtration',
      description: 'Advanced HEPA filters remove odors and harmful particles',
      icon: '🌬️'
    },
    {
      title: 'Child Safety',
      description: 'Secure locking mechanism and child-proof design',
      icon: '🔒'
    },
    {
      title: 'Auto Shut-off',
      description: 'Automatic power management for safety and efficiency',
      icon: '⚡'
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">About EDUST</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            EDUST is revolutionizing the way we handle organic waste, making composting
            accessible, efficient, and smart for everyone.
          </p>
        </motion.div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 text-center"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Safety Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Safety & Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safetyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Environmental Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-4">♻️</div>
              <h3 className="text-xl font-bold text-white mb-2">Waste Reduction</h3>
              <p className="text-gray-300">
                Reduces organic waste by up to 90% through efficient composting
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-2">Nutrient Rich</h3>
              <p className="text-gray-300">
                Produces high-quality compost for your plants and garden
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-4">🌍</div>
              <h3 className="text-xl font-bold text-white mb-2">Carbon Footprint</h3>
              <p className="text-gray-300">
                Helps reduce greenhouse gas emissions from organic waste
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 