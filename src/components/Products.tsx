import './Products.css'
import { Product } from '../../global.d'
import { AddToCartIcon } from './Icons'
import { useFilters } from '../hooks/useFilters'
import { useState } from 'react'
import json from '../mocks/products.json'


function Products() {
  const [products] = useState(json.products as unknown as Product[])
  const { filterProducts } = useFilters()
  const productsFiltered = filterProducts(products)

  return (
    <main className='products'>
      <ul>
        {productsFiltered.map(product => (
          <li key={product.id}>
            <img
              src={product.thumbnail}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Products
