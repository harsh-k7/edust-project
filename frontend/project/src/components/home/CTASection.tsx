import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';
import AnimatedSection from '../common/AnimatedSection';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-700 dark:from-green-800 dark:to-emerald-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <AnimatedSection className="lg:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Waste Management?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl">
              Join thousands of environmentally conscious individuals and businesses making a difference with EDUST. Transform your organic waste into valuable compost effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/demo">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/20"
                >
                  View Demo
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <span className="block font-medium text-white">30-Day Risk-Free Trial</span>
                <span className="block text-sm text-green-100">Try EDUST with our satisfaction guarantee</span>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="lg:w-1/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-md mx-auto">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                EDUST Premium Package
              </h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$299</span>
                <span className="ml-2 text-gray-600 dark:text-gray-400">USD</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Everything you need to start your composting journey.
              </p>
              
              <ul className="space-y-3 mb-6">
                {[
                  "EDUST Smart Composting Bin",
                  "1-Year Supply of HEPA Filters",
                  "Mobile App Access",
                  "Free Shipping",
                  "3-Year Extended Warranty"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/shop">
                <Button 
                  variant="primary"
                  fullWidth
                  size="lg"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;