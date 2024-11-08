import { useContext } from 'react';
import { CartContext } from '../context/cart';

export const useCart = () => {
  const CartProvider = useContext(CartContext)
  if (CartProvider === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return CartProvider
}