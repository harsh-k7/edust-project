import express from 'express';
import { body } from 'express-validator';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  updateStock
} from '../controllers/productController';
import { isAdmin } from '../middleware/auth';

const router = express.Router();

// Validation middleware
const productValidation = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
  body('stock').isInt({ min: 0 }).withMessage('Stock must be a positive integer'),
  body('specifications.capacity').trim().notEmpty().withMessage('Capacity is required'),
  body('specifications.dimensions').trim().notEmpty().withMessage('Dimensions are required'),
  body('specifications.material').trim().notEmpty().withMessage('Material is required'),
  body('specifications.weight').trim().notEmpty().withMessage('Weight is required'),
  body('specifications.powerConsumption').trim().notEmpty().withMessage('Power consumption is required'),
  body('features').isArray().withMessage('Features must be an array'),
  body('images').isArray().withMessage('Images must be an array'),
  body('category').trim().notEmpty().withMessage('Category is required')
];

// Public routes
router.get('/', getProducts);
router.get('/:id', getProduct);

// Admin routes
router.post('/', isAdmin, productValidation, createProduct);
router.put('/:id', isAdmin, productValidation, updateProduct);
router.delete('/:id', isAdmin, deleteProduct);
router.patch('/:id/stock', isAdmin, updateStock);

export default router; 