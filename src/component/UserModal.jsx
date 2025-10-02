import React from "react";

const UserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  const { address, company } = user;

  return (
    <div className="fixed inset-0 bg-[#00000099] bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-11/12 max-w-xl p-6 relative animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors text-xl font-bold"
        >
          ✕
        </button>

        {/* Header */}
        <div className="mb-4 border-b pb-2">
          <h2 className="text-2xl font-bold text-black text-center">
            User Full Details
          </h2>
        </div>

        {/* Content */}
        <div className="space-y-4 text-gray-800">
          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Name:</span>
            <span className="font-bold">{user.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Username:</span>
            <span className="font-bold">{user.username}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Email:</span>
            <span className="font-bold">{user.email}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Phone:</span>
            <span className="font-bold">{user.phone}</span>
          </div>

          <div className="flex justify-between">
            <span className="font-medium text-gray-600">Website:</span>
            <span className="font-bold">{user.website}</span>
          </div>

          <div className="border-t pt-3">
            <h3 className="font-bold text-black mb-1">Company Info:</h3>
            <p className="font-bold flex justify-between"><span className="font-semibold">Name:</span> {company?.name}</p>
            <p className="font-bold flex justify-between"><span className="font-medium">Catch Phrase:</span> {company?.catchPhrase}</p>
            <p className="font-bold flex justify-between"><span className="font-medium">BS:</span> {company?.bs}</p>
          </div>

          <div className="border-t pt-3 font-bold text-black">
            <h3 className="font-bold text-black mb-1">Address:</h3>
            <div className="flex flex-wrap gap-1">
            <p>{address?.street}, {address?.suite}</p>
            <p>{address?.city}, {address?.zipcode}</p>
            <p>Geo: Lat {address?.geo?.lat}, Lng {address?.geo?.lng}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default UserModal;
