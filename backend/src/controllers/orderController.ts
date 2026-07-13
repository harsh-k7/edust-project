import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { Order, IOrder, IOrderItem } from '../models/Order';
import { Product } from '../models/Product';
import { AuthRequest } from '../middleware/auth';
import { logger } from '../config/logger';
import mongoose from 'mongoose';

// Create a new order
export const createOrder = async (req: AuthRequest, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { items, shippingAddress, totalAmount } = req.body;
  const userId = req.user?.userId; 

  if (!userId) {
    return res.status(401).json({ message: 'User not authenticated' });
  }

  try {
    const orderItems: IOrderItem[] = [];
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(404).json({ message: `Product with ID ${item.productId} not found.` });
      }
      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for product ${product.name}. Available: ${product.stock}, Requested: ${item.quantity}` });
      }
      orderItems.push({
        productId: new mongoose.Types.ObjectId(item.productId),
        name: product.name,
        image: product.images[0] || '/placeholder-product.jpg',
        price: product.price,
        quantity: item.quantity,
      });
      product.stock -= item.quantity;
      await product.save();
    }

    const newOrder: IOrder = new Order({
      user: userId,
      items: orderItems,
      shippingAddress,
      totalAmount,
      status: 'pending',
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    logger.error(`Error creating order: ${error}`);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get orders for a specific user
export const getMyOrders = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    if (!userId) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const orders = await Order.find({ user: userId }).populate('items.productId');
    res.json(orders);
  } catch (error) {
    logger.error(`Error fetching user orders: ${error}`);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get a single order by ID (Admin or User if it belongs to them)
export const getOrderById = async (req: AuthRequest, res: Response) => {
  try {
    const order = await Order.findById(req.params.id).populate('items.productId');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const userId = req.user?.userId;
    const isAdmin = req.user?.isAdmin;
    
    if (!userId || (order.user.toString() !== userId && !isAdmin)) {
      return res.status(403).json({ message: 'Not authorized to view this order' });
    }

    res.json(order);
  } catch (error) {
    logger.error(`Error fetching order by ID: ${error}`);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Admin: Get all orders
export const getAllOrders = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.isAdmin) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    const orders = await Order.find().populate('user').populate('items.productId');
    res.json(orders);
  } catch (error) {
    logger.error(`Error fetching all orders: ${error}`);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update order status (Admin only)
export const updateOrderStatus = async (req: AuthRequest, res: Response) => {
  try {
    if (!req.user?.isAdmin) {
      return res.status(403).json({ message: 'Not authorized' });
    }

    const { status, trackingNumber } = req.body;
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    order.status = status;
    if (trackingNumber) {
      order.trackingNumber = trackingNumber;
    }

    await order.save();
    res.json(order);
  } catch (error) {
    logger.error(`Update order status error: ${error}`);
    res.status(500).json({ message: 'Error updating order status', error });
  }
}; 