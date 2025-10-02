// src/component/ImageCard.jsx
import React, { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const ImageCard = ({ image, title, viewMode, showToast }) => {
  const currentDate = new Date().toLocaleDateString();
  const [isFavorite, setIsFavorite] = useState(false);

  // Check if image is already in favorites
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const exists = favorites.some((item) => item.image === image);
    setIsFavorite(exists);
  }, [image]);

  const handleFavorite = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!isFavorite) {
      favorites.push({ image, title, date: currentDate });
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
      showToast("Image saved to Favorites!");
    } else {
      const updated = favorites.filter((item) => item.image !== image);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setIsFavorite(false);
      showToast("Image removed from Favorites!");
    }
  };

  return (
    <div
      className={`relative bg-gray-800 rounded-md overflow-hidden shadow-md ${
        viewMode === "list" ? "flex items-center p-4 space-x-4" : ""
      }`}
    >
      {/* Heart Icon */}
      <div
        className="absolute top-2 right-2 z-10 cursor-pointer text-white"
        onClick={handleFavorite}
      >
        <FaHeart className={`${isFavorite ? "text-red-500" : "text-white"} text-xl`} />
      </div>

      <img
        src={image}
        alt={title}
        className={`${
          viewMode === "list"
            ? "w-32 h-32 object-cover rounded-md"
            : "w-full h-48 object-cover"
        }`}
        loading="lazy"
      />

      {viewMode === "list" && (
        <div className="text-white">
          <p className="font-semibold">Author: {title}</p>
          <p className="text-gray-300 text-sm">Date: {currentDate}</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(ImageCard);
    