import express from 'express';
import { body } from 'express-validator';
import {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderStatus,
  getAllOrders
} from '../controllers/orderController';
import { auth, isAdmin } from '../middleware/auth';

const router = express.Router();

// All routes require authentication
router.use(auth);

// Validation middleware
const orderValidation = [
  body('items').isArray({ min: 1 }).withMessage('Items array cannot be empty'),
  body('items.*.productId').isMongoId().withMessage('Invalid product ID'),
  body('items.*.quantity').isInt({ min: 1 }).withMessage('Quantity must be at least 1'),
  body('totalAmount').isFloat({ min: 0 }).withMessage('Total amount must be a positive number'),
  body('shippingAddress.street').trim().notEmpty().withMessage('Street is required'),
  body('shippingAddress.city').trim().notEmpty().withMessage('City is required'),
  body('shippingAddress.state').trim().notEmpty().withMessage('State is required'),
  body('shippingAddress.zip').trim().notEmpty().withMessage('Zip is required'),
  body('shippingAddress.country').trim().notEmpty().withMessage('Country is required')
];

const statusUpdateValidation = [
  body('status').isIn(['pending', 'processing', 'shipped', 'delivered', 'cancelled'])
    .withMessage('Invalid status'),
  body('trackingNumber').optional().isString()
];

// User routes
router.post('/', orderValidation, createOrder);
router.get('/my-orders', getMyOrders);
router.get('/:id', getOrderById);

// Admin routes
router.get('/admin/all', isAdmin, getAllOrders);
router.patch('/admin/:id/status', isAdmin, statusUpdateValidation, updateOrderStatus);

export default router; 