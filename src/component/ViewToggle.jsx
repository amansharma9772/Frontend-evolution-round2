// src/components/ViewToggle.jsx
import React from "react";
import { MdOutlineGridView } from "react-icons/md";
import { CiBoxList } from "react-icons/ci";
const ViewToggle = ({ viewMode, setViewMode }) => {
  return (
    <div className="flex justify-center mb-6 gap-1">
      <button
        className={`px-2 py-2 rounded-md font-semibold ${
          viewMode === "grid" ? "bg-purple-500 text-white" : "bg-gray-700 text-white"
        }`}
        onClick={() => setViewMode("grid")}
      >
        <MdOutlineGridView />
      </button>
      <button
        className={`px-2 py-2 rounded-md font-semibold ${
          viewMode === "list" ? "bg-purple-500 text-white" : "bg-gray-700 text-white"
        }`}
        onClick={() => setViewMode("list")}
      >
       <CiBoxList />
      </button>
    </div>
  );
};

export default ViewToggle;
