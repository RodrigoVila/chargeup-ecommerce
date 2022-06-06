import { useEffect, useState } from 'react'
import FilterPill from './FilterPill'
import NavItems from './NavItems'

const labels = ['Keto', 'Vegano', 'Alto en proteina', 'Gluten Free', 'Sin Azucar']

interface Props {
  isVisible: boolean
}

const Filters = ({ isVisible = false }: Props) => {
  const [selected, setSelected] = useState([])

  useEffect(() => {
    console.log('!hola', selected)
  }, [selected])

  return (
    <div
      className={`${
        isVisible ? 'opacity-100' : 'opacity-0'
      } my-8 flex items-center justify-center transition-opacity`}
    >
      {labels.map((label) => (
        <FilterPill label={label} setSelected={setSelected} />
      ))}
    </div>
  )
}

export default Filters
