import mongoose from 'mongoose';
import { logger } from './logger';

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/edust-composting';
    await mongoose.connect(mongoURI);
    logger.info('MongoDB Connected...');
  } catch (err) {
    if (err instanceof Error) {
      logger.error('MongoDB connection error:', err.message);
    }
    // Exit process with failure
    process.exit(1);
  }
};

export default connectDB; 