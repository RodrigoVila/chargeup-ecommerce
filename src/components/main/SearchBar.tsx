interface Props {
  setSearchValue: (value: string) => void
}

const SearchBar = ({ setSearchValue }: Props) => {
  return (
    <div className="flex flex-1 w-full px-2 text-white md:w-2/3 md:mx-auto">
      <input
        type="search"
        placeholder="What are you looking for?"
        // value={value}
        onChange={(e) => setSearchValue(e.target.value)}
        className="w-full px-2 py-3 pl-4 leading-normal text-white transition border border-transparent rounded appearance-none focus:outline-none focus:border-gray-400 text-black"
      />
    </div>
  )
}

export default SearchBar
