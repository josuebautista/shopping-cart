import './Cart.css'
import { useId } from 'react'
import { CartIcon } from './Icons'
import { useCart } from '../hooks/useCart'
import CartItem from './CartItem'


function Cart() {
  const cartCheckBoxId = useId()
  const { cart } = useCart()
  return (
    <>
      <label
        className="cart-button"
        htmlFor={cartCheckBoxId}
      >
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckBoxId} hidden />
      <aside className='cart'>
        <ul>
          {cart.map((item) => (
            <CartItem key={item.id} product={item} />
          ))}
        </ul>
      </aside>
    </>
  )
}

export default Cart
