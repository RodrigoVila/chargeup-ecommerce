import { FC } from 'react'

interface Props {
  setSearchValue: (value: string) => void
}

const ProductSearchBar: FC<Props> = ({ setSearchValue }) => {
  return (
    <div className="flex w-full flex-1 px-2 ml-4 text-black">
      <input
        type="search"
        placeholder="Buscar producto"
        // value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full appearance-none rounded border border-transparent px-2 py-3 pl-4 leading-normal  transition focus:border-gray-400 focus:outline-none"
      />
    </div>
  )
}

export default ProductSearchBar
