import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3; // Number of visible page buttons at a time

    if (totalPages <= maxVisible + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (startPage > 2) pages.push("...");
      for (let i = startPage; i <= endPage; i++) pages.push(i);
      if (endPage < totalPages - 1) pages.push("...");

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="text-right my-6 space-x-2">
      {/* Prev Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded-md text-gray-300 hover:text-white focus:bg-purple-500 disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="px-3 py-1 text-white">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => onPageChange(number)}
            className={`px-3 py-1 rounded-md hover:bg-purple-500 hover:text-white transition ${
              currentPage === number
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {number}
          </button>
        )
      )}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded-md  text-gray-300 hover:text-white focus:bg-purple-500 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
