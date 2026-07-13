import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, CheckCircle, Star, Sparkles, Shield, Zap, Leaf } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Product } from '../types/product';

const Cart: React.FC = () => {
  const { items, addToCart, removeFromCart, updateQuantity, clearCart, total } = useCart();
  const { user } = useAuth();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/products');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product: Product) => {
    console.log('handleAddToCart called with product:', product);
    addToCart({
      id: product._id,
      name: product.name,
      price: product.price,
      image: product.images[0] || '/placeholder-product.jpg'
    });
  };

  const handleCheckout = async () => {
    setIsCheckingOut(true);
    
    // Simulate payment processing with realistic steps
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsCheckingOut(false);
    setIsOrderComplete(true);
    setShowFeedback(true);
    clearCart();
  };

  const handleSubmitFeedback = () => {
    console.log('Feedback submitted:', { rating, feedback });
    setShowFeedback(false);
  };

  if (isOrderComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="bg-white rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden"
          >
            {/* Success Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
            >
              <CheckCircle size={64} className="text-white" />
            </motion.div>
            
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6"
            >
              Order Confirmed! 🎉
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Congratulations! Your EDUST smart composting bin is on its way. 
              Get ready to revolutionize your sustainable living journey!
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 mb-8 border border-emerald-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-gray-600 mb-2"><strong>Order ID:</strong> #EDU{Date.now()}</p>
                  <p className="text-gray-600 mb-2"><strong>Customer:</strong> {user?.email}</p>
                  <p className="text-gray-600"><strong>Total Amount:</strong> ₹{total.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2"><strong>Expected Delivery:</strong> {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                  <p className="text-gray-600 mb-2"><strong>Shipping:</strong> Free Express Delivery</p>
                  <p className="text-gray-600"><strong>Status:</strong> <span className="text-green-600 font-semibold">Confirmed</span></p>
                </div>
              </div>
            </motion.div>

            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-200"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center">
                    <Sparkles className="mr-3 text-purple-500" />
                    Share Your Experience
                  </h3>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-4 text-lg">How was your shopping experience?</p>
                    <div className="flex justify-center space-x-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <motion.button
                          key={star}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => setRating(star)}
                          className={`p-2 transition-all duration-300 ${star <= rating ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-300'}`}
                        >
                          <Star size={32} fill="currentColor" />
                        </motion.button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <textarea
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Tell us about your experience with EDUST..."
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-purple-500/20 focus:border-purple-500 transition-all duration-300 resize-none"
                      rows={4}
                    />
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSubmitFeedback}
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:from-purple-400 hover:to-pink-500 transition-all duration-300 shadow-lg"
                  >
                    Submit Feedback
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-emerald-400 rounded-full opacity-60"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  y: [-20, 20, -20],
                  x: [-10, 10, -10],
                  opacity: [0.6, 0.2, 0.6],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Promotional Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
        >
          <div className="w-full md:w-1/2 bg-white/10 rounded-3xl p-6 shadow-xl border border-white/20">
            <img
              src="/images/edust-bin-1.jpg"
              alt="EDUST Smart Composting Bin in office"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 bg-white/10 rounded-3xl p-6 shadow-xl border border-white/20">
            <img
              src="/images/edust-bin-2.jpg"
              alt="EDUST Smart Composting Bin in subway"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Innovative Composting Bins
          </h1>
          <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
            Explore our diverse range of smart composting bins, designed to fit every need and lifestyle. 
            From compact indoor solutions to robust outdoor systems, each product is crafted for efficiency,
            durability, and ease of use. Start your composting journey with us and turn your organic waste
            into a valuable resource for a healthier garden and planet.
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto"></div>
            <p className="text-white mt-4">Loading products...</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <p className="text-red-400">{error}</p>
          </div>
        ) : (
          <>
            {/* Product Showcase */}
            <div className="flex flex-col md:flex-row md:justify-between mb-16">
              {products.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="w-full md:w-[48%] relative bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 overflow-hidden border border-white/20"
                >
                  {/* Product Header */}
                  <div className="h-64 bg-gradient-to-br from-emerald-500 to-teal-600 relative overflow-hidden">
                    <img
                      src={product.images[0] || '/placeholder-product.jpg'}
                      alt={product.name}
                      className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4"
                      >
                        <Leaf size={40} />
                      </motion.div>
                      <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
                      <div className="text-center">
                        <div className="text-4xl font-bold">₹{product.price.toLocaleString()}</div>
                        <div className="text-sm bg-white/20 px-2 py-1 rounded-full mt-2">
                          Stock: {product.stock}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <p className="text-white mb-6 line-clamp-3">{product.description}</p>
                    
                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * idx }}
                          className="flex items-center text-white"
                        >
                          <CheckCircle size={18} className="text-emerald-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(16, 185, 129, 0.4)" }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        console.log('Add to Cart button clicked!');
                        handleAddToCart(product);
                      }}
                      className={`w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group ${product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <span className="relative z-10">
                        {product.stock === 0 ? 'Out of Stock (Disabled)' : 'Add to Cart'}
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Shopping Cart */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20"
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                  <ShoppingCart size={36} className="mr-4 text-emerald-400" />
                  Your Cart
                </h2>
                
                <div className="space-y-6 mb-8">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-6 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20"
                    >
                      <div className="flex items-center space-x-6">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-20 h-20 object-cover rounded-xl"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder-product.jpg';
                          }}
                        />
                        <div>
                          <h3 className="font-bold text-white text-xl">{item.name}</h3>
                          <p className="text-emerald-300 text-lg">₹{item.price.toLocaleString()}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-full transition-all duration-300"
                        >
                          <Minus size={20} />
                        </motion.button>
                        <span className="font-bold text-white text-xl w-12 text-center">{item.quantity}</span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 rounded-full transition-all duration-300"
                        >
                          <Plus size={20} />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 bg-red-500/20 hover:bg-red-500/40 text-red-300 rounded-full transition-all duration-300 ml-4"
                        >
                          <Trash2 size={20} />
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="border-t border-white/20 pt-8">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-3xl font-bold text-white">Total: ₹{total.toLocaleString()}</span>
                    <div className="text-emerald-300 text-lg">
                      Free shipping • 2 year warranty included
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    disabled={isCheckingOut}
                    className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-cyan-700 text-white py-6 rounded-2xl font-bold text-xl hover:from-emerald-400 hover:via-teal-500 hover:to-cyan-600 transition-all duration-500 disabled:opacity-50 flex items-center justify-center space-x-4 relative overflow-hidden group"
                  >
                    {isCheckingOut ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Processing Your Order...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard size={24} />
                        <span>Complete Purchase</span>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </>
                    )}
                  </motion.button>
                </div>
              </motion.div>
            )}

            {items.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center py-20"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ShoppingCart size={80} className="text-white/30 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">Your cart is empty</h3>
                <p className="text-emerald-200 text-lg">Add some EDUST products to start your eco-friendly journey!</p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart; 