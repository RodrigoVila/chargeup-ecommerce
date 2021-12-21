import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex flex-1 w-full px-2 text-white md:w-2/3 md:mx-auto">
      <span className="relative w-full">
        <input
          type="search"
          placeholder="Search for a product..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-2 py-3 pl-4 leading-normal text-white transition border border-transparent rounded appearance-none focus:outline-none focus:border-gray-400"
        />
      </span>
    </div>
  );
};

export default SearchBar;
