import { createContext, useReducer } from 'react';
import { Product, ProductCart, CartActionTypes, INITIAL_STATE } from '../../global';
import { cartReducer } from '../reducers/cart';


interface CartContextProps {
  children: React.ReactNode;
}

interface CartContextType {
  cart: ProductCart[] | [];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  clearCart: () => void;
}

export function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

  const addToCart = (product: Product) => dispatch({
    type: CartActionTypes.ADD_TO_CART,
    payload: product,
  })

  const removeFromCart = (product: Product) => dispatch({
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: product,
  })

  const clearCart = () => dispatch({
    type: CartActionTypes.CLEAR_CART,
  })

  return {
    cart: state,
    addToCart,
    removeFromCart,
    clearCart,
  }
}

export const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => { },
  removeFromCart: () => { },
  clearCart: () => { },
})

export const CartProvider = ({ children }: CartContextProps) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCartReducer()

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
    }} >
      {children}
    </CartContext.Provider>
  )
}