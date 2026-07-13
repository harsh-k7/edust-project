import React, { useState, useEffect } from 'react';
import ProductSearch from './ProductSearch';
import { motion } from 'framer-motion';
import { Product } from '../types/product';
import { FaLeaf, FaSeedling, FaRecycle } from 'react-icons/fa';

const Homepage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError('Error loading products. Please try again later.');
        console.error('Error fetching products:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Get unique categories
  const categories = [...new Set(products.map(product => product.category))];

  // Handle search and filters
  const handleSearch = (query: string) => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    if (!category) {
      setFilteredProducts(products);
      return;
    }
    const filtered = products.filter(product => product.category === category);
    setFilteredProducts(filtered);
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    const filtered = products.filter(
      product => product.price >= min && product.price <= max
    );
    setFilteredProducts(filtered);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Smart Composting Solutions
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Transform your organic waste into nutrient-rich compost with our innovative composting solutions.
        </p>
        <p className="text-md text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
          Welcome to Edust Smart Composting, your ultimate destination for sustainable waste management. 
          We offer a range of cutting-edge composting bins and solutions designed to help you effortlessly 
          convert kitchen scraps and organic waste into valuable, nutrient-rich compost for your garden. 
          Join us in making a positive impact on the environment by reducing landfill waste and fostering 
          a healthier planet. Watch the video below to see how our smart composting systems work!
        </p>
        <div className="mt-8 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <video
            className="w-full h-auto"
            src="/homepage_video.mp4"
            controls
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>

      {/* How It Works Section */}
      <section className="text-center my-16 py-12 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-inner">
        <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          How Smart Composting Works
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Our composting solutions are designed for simplicity and efficiency, helping you transform organic waste into rich soil with ease.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 px-4">
          {/* Step 1 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3"
          >
            <div className="bg-emerald-500 p-4 rounded-full mb-4">
              <FaLeaf className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">1. Add Organic Waste</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Simply add your kitchen scraps, garden waste, and other organic materials into the smart compost bin.
            </p>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3"
          >
            <div className="bg-yellow-500 p-4 rounded-full mb-4">
              <FaRecycle className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">2. Smart Processing</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Our intelligent system monitors conditions, ensuring optimal decomposition for fast and efficient composting.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 w-full md:w-1/3"
          >
            <div className="bg-green-500 p-4 rounded-full mb-4">
              <FaSeedling className="text-white h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">3. Harvest & Grow</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              Collect nutrient-rich compost ready to nourish your plants, improve soil health, and support sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <ProductSearch
        onSearch={handleSearch}
        onCategoryChange={handleCategoryChange}
        onPriceRangeChange={handlePriceRangeChange}
        categories={categories}
      />

      {/* Products Description */}
      <section className="text-center my-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Our Innovative Composting Bins
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Explore our diverse range of smart composting bins, designed to fit every need and lifestyle.
          From compact indoor solutions to robust outdoor systems, each product is crafted for efficiency,
          durability, and ease of use. Start your composting journey with us and turn your organic waste
          into a valuable resource for a healthier garden and planet.
        </p>
      </section>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-48">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.stock === 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <span className="text-white font-semibold">Out of Stock</span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {product.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                  ₹{product.price.toLocaleString()}
                </span>
                <button
                  disabled={product.stock === 0}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    product.stock === 0
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-emerald-500 text-white hover:bg-emerald-600'
                  }`}
                >
                  {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};

export default Homepage;