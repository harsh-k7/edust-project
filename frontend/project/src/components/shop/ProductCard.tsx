import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Button from '../common/Button';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
            New
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {product.name}
        </h3>
        
        <div className="flex items-baseline mb-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price.toFixed(2)}
          </span>
          {product.price < 299 && (
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
              ${(product.price * 1.2).toFixed(2)}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
          {product.description}
        </p>
        
        <div className="flex space-x-4">
          <Button 
            variant="primary" 
            onClick={onAddToCart}
            className="flex-1 flex items-center justify-center"
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          
          <Link to={`/shop/${product.id}`} className="flex-1">
            <Button 
              variant="outline" 
              fullWidth
            >
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;