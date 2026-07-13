import React from 'react';
import { Clock, Sparkles, AlertCircle, Award, BarChart, Zap } from 'lucide-react';
import AnimatedSection from '../common/AnimatedSection';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedSection
      delay={delay}
      className="flex flex-col items-center text-center p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </AnimatedSection>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Automated Operation",
      description: "Set it and forget it. EDUST handles the entire composting process automatically, working at night to minimize disruption.",
      delay: 0
    },
    {
      icon: <Sparkles className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Smart Waste Detection",
      description: "Advanced sensors identify and sort organic waste, ensuring optimal composting conditions at all times.",
      delay: 0.1
    },
    {
      icon: <AlertCircle className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Air Purification",
      description: "Built-in HEPA and carbon filters eliminate odors and purify air, keeping your space fresh and clean.",
      delay: 0.2
    },
    {
      icon: <Award className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Premium Quality Compost",
      description: "Creates nutrient-rich compost perfect for gardens, houseplants, and agricultural applications.",
      delay: 0.3
    },
    {
      icon: <BarChart className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Eco Impact Tracking",
      description: "Monitor your environmental contribution with detailed analytics on waste diverted and carbon footprint reduced.",
      delay: 0.4
    },
    {
      icon: <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />,
      title: "Energy Efficient",
      description: "Optimized power usage ensures minimal energy consumption while maximizing composting efficiency.",
      delay: 0.5
    }
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Revolutionizing Waste Management
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            EDUST combines cutting-edge technology with environmental consciousness to transform how we handle organic waste.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;