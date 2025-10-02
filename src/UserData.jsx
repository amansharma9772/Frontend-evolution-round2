import React, { useState, useEffect } from "react";
import DataTable from "./component/DataTable";
import UserModal from "./component/UserModal";

function UserData() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeUserId, setActiveUserId] = useState(null); // track active row
  const [loading, setLoading] = useState(true);
  // Fetch users from API
 useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setLoading(false); // ✅ data loaded
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
      setLoading(false);
    });
}, []);
  

  // Define table columns
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    { header: "Website", accessor: "website" },
    { header: "Company", render: (row) => row.company?.name },
  ];

  // Handle row click
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setActiveUserId(user.id); // ✅ keep row active
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="title_sec mt-5">
        <h1 className="text-white font-bold text-[35px] md:text-[45px] text-center my-3">
          User Details
        </h1>
      </div>

      {/* Data Table */}
      <div className="data_table md:mt-[30px]">
  {loading ? (
    <p className="text-center text-white mt-5">Loading users...</p>
  ) : (
    <DataTable
      columns={columns}
      data={users}
      onRowClick={handleRowClick}
      activeUserId={activeUserId}
    />
  )}
</div>

      {/* User Modal */}
      <UserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // ✅ do NOT reset activeUserId
        user={selectedUser}
      />
    </div>
  );
}

export default UserData;
