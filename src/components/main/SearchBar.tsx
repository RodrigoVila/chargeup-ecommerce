import { FC } from 'react'

interface Props {
  setSearchValue: (value: string) => void
}

const SearchBar: FC<Props> = ({ setSearchValue }) => {
  return (
    <div className="flex w-full flex-1 px-2 text-white md:mx-auto md:w-2/3">
      <input
        type="search"
        placeholder="What are you looking for?"
        // value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full appearance-none rounded border border-transparent px-2 py-3 pl-4 leading-normal text-white text-black transition focus:border-gray-400 focus:outline-none"
      />
    </div>
  )
}

export default SearchBar
