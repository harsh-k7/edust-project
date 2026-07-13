export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL?: string | null;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  specifications: Record<string, string>;
}

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export interface OrderDetails {
  items: CartItem[];
  totalAmount: number;
  timestamp: Date;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
}

export type ThemeMode = 'light' | 'dark';