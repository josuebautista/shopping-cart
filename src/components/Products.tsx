import './Products.css'
import { Product } from '../../global.d'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilters'
import { useState } from 'react'
import json from '../mocks/products.json'
import { useCart } from '../hooks/useCart'


function Products() {
  const { addToCart, removeFromCart, cart } = useCart()
  const [products] = useState(json.products as unknown as Product[])
  const { filterProducts } = useFilters()
  const productsFiltered = filterProducts(products)

  const checkProductInCart = (product: Product): boolean => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {productsFiltered.map(product => {
          const isProductInCart = checkProductInCart(product)
          return (
            <li key={product.id}>
              <img
                src={product.thumbnail}
                alt={product.title}
              />
              <div>
                <strong>{product.title}</strong> - ${product.price}
              </div>
              <div>
                {isProductInCart
                  ? (
                    <button
                      onClick={() => removeFromCart(product)}
                    >
                      <RemoveFromCartIcon />
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(product)}
                    >
                      <AddToCartIcon />
                    </button>
                  )}
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default Products
