import {
  Product,
  ProductCart,
  CartActionTypes
  // @ts-ignore
} from "../../global.d.ts";

interface CartActionProps {
  type: string;
  payload?: Product;
}

const updateLocalStorage = (state: ProductCart[] | []) => {
  window.localStorage.setItem('cart', JSON.stringify(state))
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
      const newState = [
        ...state,
        {
          ...actionPayload, // product
          quantity: 1,
        }
      ]
      updateLocalStorage(newState)
      return newState
    }
    case CartActionTypes.REMOVE_FROM_CART: {
      if (actionPayload === undefined) return state
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0 && state[productInCartIndex].quantity > 1) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity -= 1
        updateLocalStorage(newState)
        return newState
      }
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }
    case CartActionTypes.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
    default: {
      updateLocalStorage(state)
      return state
    }
  }
}