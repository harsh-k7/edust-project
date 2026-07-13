import express from 'express';
import { body } from 'express-validator';
import {
  getCart,
  addToCart,
  updateCartItem,
  removeFromCart,
  clearCart
} from '../controllers/cartController';
import { auth } from '../middleware/auth';

const router = express.Router();

// All cart routes require authentication
router.use(auth);

// Validation middleware
const cartValidation = [
  body('productId').isMongoId().withMessage('Invalid product ID'),
  body('quantity').optional().isInt({ min: 1 }).withMessage('Quantity must be at least 1')
];

// Cart routes
router.get('/', getCart);
router.post('/add', cartValidation, addToCart);
router.put('/item/:productId', cartValidation, updateCartItem);
router.delete('/item/:productId', removeFromCart);
router.delete('/clear', clearCart);

export default router; 