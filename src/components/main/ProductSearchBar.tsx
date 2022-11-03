import { FC } from 'react'

interface Props {
  setSearchValue: (value: string) => void
}

const ProductSearchBar: FC<Props> = ({ setSearchValue }) => {
  return (
    <div className="flex flex-1 w-full max-w-2xl px-2 ml-2 text-black">
      <input
        type="search"
        placeholder="Buscar producto"
        // value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full px-2 py-3 pl-4 leading-normal border border-transparent rounded appearance-none  transition focus:border-gray-400 focus:outline-none"
      />
    </div>
  )
}

export default ProductSearchBar
