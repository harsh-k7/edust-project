import React from 'react';
import { ArrowRight, Leaf, Recycle, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Floating Leaves */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute top-20 right-10 text-green-500 dark:text-green-400"
        >
          <Leaf size={60} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ 
            duration: 2, 
            delay: 0.5, 
            repeat: Infinity, 
            repeatType: 'reverse'
          }}
          className="absolute bottom-40 left-10 text-green-500 dark:text-green-400"
        >
          <Recycle size={50} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ 
            duration: 2, 
            delay: 1, 
            repeat: Infinity, 
            repeatType: 'reverse'
          }}
          className="absolute top-1/2 left-1/3 text-green-500 dark:text-green-400"
        >
          <Wind size={40} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="px-3 py-1 text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/30 rounded-full">
                Revolutionary Composting
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">EDUST</span>,
              <br /> 
              The Smart Composting Bin
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0"
            >
              Transform your organic waste into rich compost with zero effort. EDUST detects, composts, and purifies automatically, making sustainable living effortless.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/shop">
                <Button size="lg">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex items-center justify-center lg:justify-start space-x-6"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-green-${i*100} border-2 border-white dark:border-gray-900`}></div>
                ))}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <span className="font-semibold">500+</span> happy customers
              </div>
            </motion.div>
          </div>
          
          {/* Product Image/Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-800 shadow-xl">
              {/* Placeholder for product video/image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">
                  Product Video Placeholder
                </span>
              </div>
              
              {/* Circular decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-green-500 opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-emerald-600 opacity-20"></div>
            </div>
            
            {/* Features badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute top-5 -left-5 md:-left-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
            >
              <div className="flex items-center">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                  <Recycle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="ml-3">
                  <span className="block text-sm font-medium text-gray-900 dark:text-white">Auto-Composting</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Zero effort required</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute bottom-5 -right-5 md:-right-10 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3"
            >
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                  <Wind className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="ml-3">
                  <span className="block text-sm font-medium text-gray-900 dark:text-white">Air Purification</span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">HEPA & Carbon Filters</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;