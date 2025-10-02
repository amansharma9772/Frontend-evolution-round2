import React from "react";

const DataTable = ({ columns, data, onRowClick, activeUserId }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg">
        <thead className="bg-[#001458] text-white">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="py-3 px-2 md:px-4 text-left text-sm md:text-base"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((row, rowIndex) => {
            const isActive = row.id === activeUserId;
            return (
              <tr
                key={rowIndex}
                className={`cursor-pointer transition-colors duration-200 
                  ${isActive ? "bg-[#1e2946] text-white" : "hover:bg-gray-700"}
                `}
                onClick={() => onRowClick && onRowClick(row)}
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={colIndex}
                    className={`py-2 px-2 md:px-4 whitespace-nowrap text-sm md:text-base ${
                      isActive ? "text-white" : "text-white"
                    }`}
                  >
                    {col.render ? col.render(row) : row[col.accessor]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
