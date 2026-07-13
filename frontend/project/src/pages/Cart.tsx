import { useState } from 'react';
import { motion } from 'framer-motion';

const Cart = () => {
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowThankYou(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (showThankYou) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-400 mb-4">Thank You!</h2>
          <p className="text-xl text-gray-300 mb-8">
            Your interest in EDUST has been noted. We'll be in touch soon!
          </p>
          <button
            onClick={() => setShowThankYou(false)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg"
          >
            Back to Product
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <div className="aspect-square bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-6xl">🗑️</div>
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">EDUST Smart Composting Bin</h1>
            <div className="space-y-4 mb-8">
              <div className="flex items-center text-green-400">
                <span className="text-2xl mr-2">✓</span>
                <span>Smart waste detection</span>
              </div>
              <div className="flex items-center text-green-400">
                <span className="text-2xl mr-2">✓</span>
                <span>Automated composting</span>
              </div>
              <div className="flex items-center text-green-400">
                <span className="text-2xl mr-2">✓</span>
                <span>Air purification</span>
              </div>
            </div>
            <div className="text-2xl font-bold text-white mb-6">$299.99</div>
            <button
              onClick={() => setShowThankYou(true)}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
            >
              Pre-order Now
            </button>
          </motion.div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Stay Updated</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-gray-300 mb-2">
                  Feedback (Optional)
                </label>
                <textarea
                  id="feedback"
                  name="feedback"
                  value={formData.feedback}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 