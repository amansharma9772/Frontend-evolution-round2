// src/components/Lightbox.jsx
import React, { useEffect } from "react";

const Lightbox = ({ images, currentIndex, setCurrentIndex, closeLightbox }) => {
  const total = images.length;
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setCurrentIndex((prev) => (prev + 1) % total);
      if (e.key === "ArrowLeft") setCurrentIndex((prev) => (prev - 1 + total) % total);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [total, closeLightbox, setCurrentIndex]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 px-2 sm:px-0">
      {/* Close Button */}
      <button
        className="absolute top-5 right-5 text-white text-3xl sm:text-4xl font-bold hover:text-red-500 transition"
        onClick={closeLightbox}
      >
        &times;
      </button>

      {/* Left Arrow */}
      <button
        className="absolute left-2 sm:left-5 p-2 sm:p-3 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition"
        onClick={() => setCurrentIndex((prev) => (prev - 1 + total) % total)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-10 sm:w-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Image */}
      <img
        src={currentImage.download_url}
        alt={currentImage.author}
        className="max-h-[80vh] sm:max-h-[90vh] max-w-full sm:max-w-[90%] object-contain rounded-md"
      />

      {/* Right Arrow */}
      <button
        className="absolute right-2 sm:right-5 p-2 sm:p-3 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition"
        onClick={() => setCurrentIndex((prev) => (prev + 1) % total)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 sm:h-10 sm:w-10 text-black"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Caption */}
      {/* <div className="absolute bottom-5 text-white text-sm sm:text-lg text-center px-2 sm:px-0">
        {currentImage.author} - Album {currentImage.albumId}
      </div> */}
    </div>
  );
};

export default Lightbox;
