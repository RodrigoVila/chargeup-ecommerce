import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className="flex justify-center my-5 ">
      <div className="w-3/4 overflow-hidden border-2 rounded-3xl border-primary-light ">
        <FaSearch className="absolute mt-3 ml-2 text-primary-dark " />
        <input
          className="w-full h-10 pl-7 focus:outline-none"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Looking for a product?"
        />
      </div>
    </div>
  );
};

export default SearchBar;
