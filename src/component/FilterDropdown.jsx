// src/components/FilterDropdown.jsx
import React from "react";

const FilterDropdown = ({ filterType, setFilterType }) => {
  return (
    <div className="flex justify-center mb-6">
      <select
        className="w-75 pl-2 pr-4 py-2 text-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 "
        value={filterType}
        onChange={(e) => setFilterType(e.target.value)}
      >
        <option className="text-black hover:bg-gray-300" value="all" defaultValue>
          All Photos
        </option>
        <option className="text-black" value="album">Album</option>
        <option className="text-black" value="images">Images</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
