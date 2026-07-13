import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  specifications: {
    capacity: string;
    dimensions: string;
    material: string;
    weight: string;
    powerConsumption: string;
  };
  features: string[];
  images: string[];
  category: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0
  },
  specifications: {
    capacity: {
      type: String,
      required: true
    },
    dimensions: {
      type: String,
      required: true
    },
    material: {
      type: String,
      required: true
    },
    weight: {
      type: String,
      required: true
    },
    powerConsumption: {
      type: String,
      required: true
    }
  },
  features: [{
    type: String,
    required: true
  }],
  images: [{
    type: String,
    required: true
  }],
  category: {
    type: String,
    required: true,
    default: 'compost-bin'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

export const Product = mongoose.model<IProduct>('Product', productSchema); 