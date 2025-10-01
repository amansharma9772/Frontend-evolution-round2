import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full max-w-md mx-auto my-4">
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search posts by title..."
        className="w-full pl-10 pr-4 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
};

export default SearchInput;
