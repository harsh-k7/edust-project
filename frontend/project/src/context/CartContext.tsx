import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { collection, addDoc, query, where, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { useAuth } from './AuthContext';
import { CartItem } from '../types';

interface CartContextType {
  cart: CartItem[];
  totalItems: number;
  totalAmount: number;
  addToCart: (product: CartItem) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  clearCart: () => Promise<void>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      setCart([]);
      return;
    }

    const q = query(
      collection(db, 'carts'),
      where('userId', '==', currentUser.uid)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const cartItems: CartItem[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        cartItems.push({
          productId: data.productId,
          quantity: data.quantity,
          price: data.price,
          name: data.name,
          image: data.image
        });
      });
      setCart(cartItems);
    });

    return unsubscribe;
  }, [currentUser]);

  const addToCart = async (product: CartItem) => {
    if (!currentUser) return;
    
    const existingItem = cart.find(item => item.productId === product.productId);
    
    if (existingItem) {
      // Update quantity
      await updateQuantity(product.productId, existingItem.quantity + product.quantity);
    } else {
      // Add new item
      await addDoc(collection(db, 'carts'), {
        userId: currentUser.uid,
        ...product,
        timestamp: new Date()
      });
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!currentUser) return;
    
    const q = query(
      collection(db, 'carts'),
      where('userId', '==', currentUser.uid),
      where('productId', '==', productId)
    );
    
    const snapshot = await q.get();
    if (!snapshot.empty) {
      const docRef = doc(db, 'carts', snapshot.docs[0].id);
      await updateDoc(docRef, { quantity });
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!currentUser) return;
    
    const q = query(
      collection(db, 'carts'),
      where('userId', '==', currentUser.uid),
      where('productId', '==', productId)
    );
    
    const snapshot = await q.get();
    if (!snapshot.empty) {
      const docRef = doc(db, 'carts', snapshot.docs[0].id);
      await deleteDoc(docRef);
    }
  };

  const clearCart = async () => {
    if (!currentUser) return;
    
    const q = query(
      collection(db, 'carts'),
      where('userId', '==', currentUser.uid)
    );
    
    const snapshot = await q.get();
    const deletePromises = snapshot.docs.map((doc) => deleteDoc(doc.ref));
    await Promise.all(deletePromises);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        totalItems,
        totalAmount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};