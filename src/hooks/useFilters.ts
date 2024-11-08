import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { Product } from "../../global"

export function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products: Product[]) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }
  return { filters, filterProducts, setFilters }
}