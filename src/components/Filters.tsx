import { ChangeEvent, useContext, useId } from 'react'
import './Filters.css'
// @ts-ignore
import { CATEGORIES } from '../../global.d.ts'
import { FiltersContext } from '../context/filters.tsx'

function Filters() {
  const { filters, setFilters } = useContext(FiltersContext)
  const categories = Object.values(CATEGORIES)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  const handleChangeMinPrice = (event: ChangeEvent<HTMLInputElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      minPrice: Number(event.target.value)
    }))
  }

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setFilters((prevState) => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>
      <div>
        <label htmlFor={minPriceFilterId}>Min Price:</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={filters.minPrice}
        />
        <span>{filters.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}

        >
          {categories.map((category) => (
            <option key={category} value={category.toLowerCase()}>{category}</option>
          ))}

        </select>
      </div>
    </section>
  )
}

export default Filters
