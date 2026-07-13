export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  specifications: {
    [key: string]: string;
  };
  features: string[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
} 