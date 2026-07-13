import React from 'react';

const Demo: React.FC = () => {
  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 dark:text-emerald-400 mb-8">
          Interactive EDUST Demo
        </h1>
        
        {/* Embedded 3D model using model-viewer */}
        <section className="mb-16">
          <model-viewer
            src="/model1.glb"
            alt="EDUST Smart Composting Bin 3D Model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            shadow-intensity="1"
            camera-controls
            auto-rotate
            autoplay
            className="w-full max-w-4xl mx-auto h-[500px] rounded-xl overflow-hidden shadow-2xl border-4 border-emerald-400 dark:border-teal-600"
            style={{ margin: '0 auto' }}
          >
            {/* Optionally, add a poster image for loading state */}
            {/* <img slot="poster" src="/path/to/poster.webp" alt="EDUST Poster" /> */}
          </model-viewer>
        </section>

        {/* Step-by-step breakdown of how EDUST works */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">How EDUST Works: A Detailed Breakdown</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">1. Waste Detection</h3>
              <p className="text-gray-700 dark:text-gray-300">EDUST's advanced sensors accurately identify and differentiate between various types of organic and non-organic waste, ensuring proper processing.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">2. Internal Composting Cycle</h3>
              <p className="text-gray-700 dark:text-gray-300">Once detected, organic waste is automatically moved into the internal composting chamber where it undergoes a controlled, efficient composting process, primarily at night.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">3. Air Purification System</h3>
              <p className="text-gray-700 dark:text-gray-300">Integrated HEPA and activated carbon filters work continuously to purify the air, eliminating odors and harmful airborne particles, ensuring a fresh environment.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">4. Nutrient-Rich Output</h3>
              <p className="text-gray-700 dark:text-gray-300">The composting process yields high-quality, nutrient-rich compost, ready for use in your garden or plants, promoting sustainable growth.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">5. Smart Automation</h3>
              <p className="text-gray-700 dark:text-gray-300">From waste detection to composting and air purification, EDUST operates autonomously, minimizing human intervention and maximizing efficiency.</p>
            </div>
            <div className="p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400 mb-2">6. Easy Maintenance</h3>
              <p className="text-gray-700 dark:text-gray-300">EDUST is designed for simplicity. Compost collection and filter replacement are straightforward, ensuring a hassle-free experience.</p>
            </div>
          </div>
        </section>

        {/* Action Buttons to explore bin functionality (placeholder) */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Explore EDUST's Features</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md dark:bg-teal-600 dark:hover:bg-teal-700">
              Simulate Waste Detection
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md dark:bg-teal-600 dark:hover:bg-teal-700">
              Initiate Composting Cycle
            </button>
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md dark:bg-teal-600 dark:hover:bg-teal-700">
              Activate Air Purifiers
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;