import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// import { BrowserRouter as Router } from 'react-router-dom'; // Removed as it's in App.tsx
// import { AuthProvider } from './contexts/AuthContext'; // Removed as it's in App.tsx
// import { CartProvider } from './contexts/CartContext'; // Removed as it's in App.tsx
// import { ThemeProvider } from './contexts/ThemeContext'; // Removed as it's in App.tsx

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Removed Router and nested providers as they are in App.tsx */}
    <App />
  </StrictMode>
);
