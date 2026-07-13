import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { logger } from '../config/logger';
import { User } from '../models/User';

declare global {
  namespace Express {
    interface Request {
      user?: {
        userId: string;
        isAdmin: boolean;
      };
    }
  }
}

export interface AuthRequest extends Request {
  user?: {
    userId: string;
    isAdmin: boolean;
  };
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-super-secret-jwt-key-change-in-production') as { userId: string };
    
    const user = await User.findById(decoded.userId);
    if (!user) {
      throw new Error();
    }

    req.user = {
      userId: user._id.toString(),
      isAdmin: user.role === 'admin'
    };
    
    next();
  } catch (err) {
    logger.error('Authentication error:', err);
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

export const isAdmin = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    if (!req.user?.isAdmin) {
      return res.status(403).json({ error: 'Not authorized as admin' });
    }
    next();
  } catch (err) {
    logger.error('Admin authorization error:', err);
    res.status(500).json({ error: 'Server error' });
  }
}; 