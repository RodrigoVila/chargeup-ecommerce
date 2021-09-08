import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center flex-1 px-2 text-white md:w-1/3 md:justify-start">
      <span className="relative w-full">
        <input
          type="search"
          placeholder="Search for a product..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-2 py-3 pl-4 leading-normal text-white transition border border-transparent rounded appearance-none focus:outline-none focus:border-gray-400"
        />
        {/* <div className="absolute search-icon top-4 left-3.5">
          <svg
            className="w-4 h-4 text-white pointer-events-none fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </div> */}
      </span>
    </div>
  );
};

export default SearchBar;
