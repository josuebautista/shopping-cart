import {
  Product,
  ProductCart,
  CartActionTypes,
  INITIAL_STATE
} from "../../global";

interface CartActionProps {
  type: string;
  payload?: Product;
}

export const cartReducer = (state: ProductCart[], action: CartActionProps) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case CartActionTypes.ADD_TO_CART: {
      if (actionPayload === undefined) return state
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }
      return [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        }
      ]
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      if (actionPayload === undefined) return state
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0 && state[productInCartIndex].quantity > 1) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity -= 1
        return newState
      }
      return state.filter(item => item.id !== id)
    }
    case CartActionTypes.CLEAR_CART: {
      return INITIAL_STATE
    }
    default: {
      return state
    }
  }
}