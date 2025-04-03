import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { MdTune } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="p-4 flex items-center">
      <div className="flex items-center rounded-md bg-gray-100 flex-1 p-2">
        <HiOutlineSearch className="w-5 h-5 text-zinc-700 ml-2" />
        <input
          type="text"
          placeholder="Search..."
          className="flex-1 outline-none rounded-md placeholder-zinc-700 bg-transparent px-4"
        />
      </div>
      <MdTune className="w-7 h-7 cursor-pointer text-zinc-700 ml-4" />
    </div>
  );
};

export default SearchBar;
