import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../common/AnimatedSection';

const steps = [
  {
    number: "01",
    title: "Waste Detection",
    description: "Drop your organic waste into EDUST. Smart sensors automatically identify and categorize the waste.",
    image: "https://images.pexels.com/photos/5677793/pexels-photo-5677793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Person putting organic waste into a modern composting bin"
  },
  {
    number: "02",
    title: "Nighttime Processing",
    description: "During the night, EDUST quietly processes the waste, breaking it down into rich compost.",
    image: "https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Nighttime composting visualization with technology"
  },
  {
    number: "03",
    title: "Air Purification",
    description: "HEPA and carbon filters work continuously to eliminate odors and purify the surrounding air.",
    image: "https://images.pexels.com/photos/4439408/pexels-photo-4439408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Air purification technology in modern environment"
  },
  {
    number: "04",
    title: "Compost Collection",
    description: "Collect the finished compost from the easy-access drawer. Ready to use in your garden or plants.",
    image: "https://images.pexels.com/photos/1084540/pexels-photo-1084540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Person collecting finished compost from a container"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How EDUST Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Experience the seamless journey from organic waste to nutrient-rich compost
          </p>
        </AnimatedSection>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <AnimatedSection 
              key={index} 
              delay={index * 0.1}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative overflow-hidden rounded-xl">
                  <img 
                    src={step.image} 
                    alt={step.alt}
                    className="w-full h-64 md:h-96 object-cover transform transition-transform hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 bg-green-600 text-white text-5xl md:text-6xl font-bold p-6 rounded-lg shadow-lg"
                >
                  {step.number}
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                  {step.description}
                </p>
                
                {/* Connected dots visualization */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex items-center space-x-2 mt-8">
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    <div className="w-12 border-t-2 border-dashed border-green-600"></div>
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                    <div className="w-12 border-t-2 border-dashed border-green-600"></div>
                    <div className="w-4 h-4 rounded-full bg-green-600"></div>
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;