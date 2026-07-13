import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Shield, Zap, Heart, Globe, Users, Award, CheckCircle, X, Lightbulb } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    {
      icon: Globe,
      title: 'Environmental Impact',
      description: 'Reduce landfill waste by 80% and lower carbon footprint significantly',
      stats: '80% waste reduction'
    },
    {
      icon: Leaf,
      title: 'Sustainable Living',
      description: 'Create nutrient-rich compost for gardens and plants naturally',
      stats: '100% organic output'
    },
    {
      icon: Shield,
      title: 'Odor-Free Operation',
      description: 'Advanced filtration system eliminates all composting odors',
      stats: '99.9% odor elimination'
    },
    {
      icon: Zap,
      title: 'Energy Efficient',
      description: 'Smart power management uses minimal electricity',
      stats: '150W consumption only'
    }
  ];

  const safety = [
    {
      title: 'Child Safety Lock',
      description: 'Secure locking mechanism prevents accidental opening'
    },
    {
      title: 'Temperature Control',
      description: 'Maintains optimal composting temperature automatically'
    },
    {
      title: 'Leak-Proof Design',
      description: 'Sealed construction prevents any liquid leakage'
    },
    {
      title: 'Emergency Shutdown',
      description: 'Automatic safety shutdown in case of malfunction'
    }
  ];

  const beforeAfterData = [
    {
      category: 'Biodegradable Waste',
      before: 'Ends up in landfills, produces methane gas',
      after: 'Becomes nutrient-rich compost for plants',
      impact: 'positive'
    },
    {
      category: 'Food Scraps',
      before: 'Attracts pests, creates odors',
      after: 'Processed into clean, odorless compost',
      impact: 'positive'
    },
    {
      category: 'Garden Waste',
      before: 'Burned or thrown away',
      after: 'Recycled into soil enhancement',
      impact: 'positive'
    },
    {
      category: 'Paper Waste',
      before: 'Clutters landfills',
      after: 'Broken down into organic matter',
      impact: 'positive'
    }
  ];

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-emerald-700 dark:text-emerald-400 mb-12">
          About EDUST & Safe Composting
        </h1>

        {/* Before/After Visuals Section */}
        <section className="mb-16 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Transforming Waste, Transforming Lives</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 text-center max-w-3xl mx-auto">
            See the dramatic impact of proper waste management with EDUST. From messy organic waste to rich, usable compost.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4">Before: Biodegradable Waste</h3>
              <img 
                src="https://images.pexels.com/photos/1036081/pexels-photo-1036081.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Biodegradable Waste Before Composting" 
                className="rounded-lg shadow-md w-full max-w-md h-64 object-cover object-center border-4 border-red-300 dark:border-red-600"
              />
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-center text-sm">Food scraps, fruit peels, coffee grounds, garden waste.</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-4">After: Nutrient-Rich Compost</h3>
              <img 
                src="https://images.pexels.com/photos/3326105/pexels-photo-3326105.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Nutrient-Rich Compost After Processing" 
                className="rounded-lg shadow-md w-full max-w-md h-64 object-cover object-center border-4 border-green-300 dark:border-green-600"
              />
              <p className="mt-4 text-gray-600 dark:text-gray-400 text-center text-sm">Healthy soil amendment for plants, reducing landfill waste.</p>
            </div>
          </div>
        </section>

        {/* Key Safety and Usage Instructions Section */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">Safety & Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="flex items-start p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <CheckCircle size={24} className="text-emerald-600 dark:text-emerald-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">What to Compost</h3>
                <p className="text-gray-700 dark:text-gray-300">Fruits, vegetables, coffee grounds, tea bags, eggshells, plant clippings, and most food scraps.</p>
              </div>
            </div>
            <div className="flex items-start p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <X size={24} className="text-red-600 dark:text-red-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">What NOT to Compost</h3>
                <p className="text-gray-700 dark:text-gray-300">Meat, dairy products, oily foods, pet waste, diseased plants, and non-biodegradable materials.</p>
              </div>
            </div>
            <div className="flex items-start p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <Shield size={24} className="text-blue-600 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Placement & Ventilation</h3>
                <p className="text-gray-700 dark:text-gray-300">Place EDUST in a well-ventilated area, away from direct sunlight and extreme temperatures.</p>
              </div>
            </div>
            <div className="flex items-start p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <Lightbulb size={24} className="text-yellow-600 dark:text-yellow-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Regular Maintenance</h3>
                <p className="text-gray-700 dark:text-gray-300">Empty compost regularly and replace HEPA/carbon filters as indicated by the EDUST app or device alerts.</p>
              </div>
            </div>
            <div className="flex items-start p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <Recycle size={24} className="text-purple-600 dark:text-purple-400 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Troubleshooting</h3>
                <p className="text-gray-700 dark:text-gray-300">Refer to the user manual or our online support for common issues and solutions.</p>
              </div>
            </div>
            <div className="flex items-start p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <span className="text-2xl mr-3 mt-1 flex-shrink-0">⚠️</span>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">Child & Pet Safety</h3>
                <p className="text-gray-700 dark:text-gray-300">Keep the EDUST bin out of reach of small children and pets to prevent accidental ingestion or injury.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;