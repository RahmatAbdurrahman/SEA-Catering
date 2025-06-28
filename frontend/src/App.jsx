import React from 'react'; // ✅ Tambahkan ini!
import { ThemeProvider } from './contexts/ThemeContext';
import { CartProvider } from './contexts/CartContext';
import AppRoutes from './routes/AppRoutes';
import './styles/index.css';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </ThemeProvider>
  );
}
