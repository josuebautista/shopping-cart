import './Cart.css'
import { } from 'react'
import { ProductCart } from '../../global';
import { useCart } from '../hooks/useCart';


interface CartItemProps {
  product: ProductCart;
}

function CartItem({
  product,
}: CartItemProps) {
  const { addToCart, removeFromCart } = useCart()
  return (
    <li>
      <img
        src={product.thumbnail}
        alt={product.title}
      />
      <div>
        <strong>{product.title}</strong> - ${product.price}
      </div>
      <footer>
        <button
          onClick={() => removeFromCart(product)}
        >
          -
        </button>
        <small>
          Qty: {product.quantity}
        </small>
        <button
          onClick={() => addToCart(product)}
        >
          +
        </button>
      </footer>
    </li>
  )
}

export default CartItem
