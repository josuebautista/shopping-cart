import { createContext, useState } from 'react'

type FiltersProps = {
  category: string;
  minPrice: number;
}

interface filtersContextProps {
  filters: FiltersProps;
  setFilters: React.Dispatch<React.SetStateAction<FiltersProps>>;
}

// 1. Create a context
// This is the context that will be consumed
export const FiltersContext = createContext<filtersContextProps>({
  filters: {
    category: 'all',
    minPrice: 0,
  },
  setFilters: () => { },

})

// 2. Create a provider, to pass the context
// This is the provider that allows to access the context
export function FiltersProvider({ children }: { children: React.ReactNode }) {
  const [filters, setFilters] = useState<FiltersProps>({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters,
    }}>
      {children}
    </FiltersContext.Provider>
  )
}