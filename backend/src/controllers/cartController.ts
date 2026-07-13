import { Request, Response } from 'express';
import { Cart, ICart } from '../models/Cart';
import { Product, IProduct } from '../models/Product';
import mongoose from 'mongoose';
import { AuthRequest } from '../middleware/auth';

// Get user's cart
export const getCart = async (req: AuthRequest, res: Response) => {
  try {
    const cart = await Cart.findOne({ user: req.user?.userId })
      .populate('items.product');
    
    if (!cart) {
      return res.json({ items: [], total: 0 });
    }
    
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cart', error });
  }
};

// Add item to cart
export const addToCart = async (req: AuthRequest, res: Response) => {
  const { productId, quantity = 1 } = req.body;

  try {
    // Validate product exists and has stock
    const product = await Product.findOne({ 
      _id: productId,
      isActive: true,
      stock: { $gte: quantity }
    });

    if (!product) {
      return res.status(404).json({ 
        message: 'Product not found or out of stock' 
      });
    }

    let cart = await Cart.findOne({ user: req.user?.userId });

    if (!cart) {
      // Create new cart if doesn't exist
      cart = new Cart({
        user: req.user?.userId,
        items: [{ product: productId, quantity }]
      });
    } else {
      // Check if product already in cart
      const existingItem = cart.items.find(
        item => (item.product as IProduct).toString() === productId
      );

      if (existingItem) {
        // Update quantity if product exists
        existingItem.quantity += quantity;
      } else {
        // Add new item if product doesn't exist
        cart.items.push({ product: productId, quantity });
      }
    }

    await cart.save();
    await cart.populate('items.product');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
};

// Update cart item quantity
export const updateCartItem = async (req: AuthRequest, res: Response) => {
  const { productId } = req.params;
  const { quantity } = req.body;

  if (quantity < 1) {
    return res.status(400).json({ message: 'Quantity must be at least 1' });
  }

  try {
    // Validate product exists and has stock
    const product = await Product.findOne({ 
      _id: productId,
      isActive: true,
      stock: { $gte: quantity }
    });

    if (!product) {
      return res.status(404).json({ 
        message: 'Product not found or out of stock' 
      });
    }

    const cart = await Cart.findOne({ user: req.user?.userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const cartItem = cart.items.find(
      item => (item.product as IProduct).toString() === productId
    );

    if (!cartItem) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    cartItem.quantity = quantity;
    await cart.save();
    await cart.populate('items.product');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error });
  }
};

// Remove item from cart
export const removeFromCart = async (req: AuthRequest, res: Response) => {
  const { productId } = req.params;

  try {
    const cart = await Cart.findOne({ user: req.user?.userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = cart.items.filter(
      item => (item.product as IProduct).toString() !== productId
    );

    await cart.save();
    await cart.populate('items.product');
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error removing from cart', error });
  }
};

// Clear cart
export const clearCart = async (req: AuthRequest, res: Response) => {
  try {
    const cart = await Cart.findOne({ user: req.user?.userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    cart.items = [];
    await cart.save();
    res.json({ message: 'Cart cleared successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error clearing cart', error });
  }
}; 