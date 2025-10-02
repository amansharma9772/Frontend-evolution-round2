// src/ShowImages.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import ImageCard from "./component/ImageCard";
import FilterDropdown from "./component/FilterDropdown";
import ViewToggle from "./component/ViewToggle";
import Lightbox from "./component/Lightbox";

function ShowImages() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [filterType, setFilterType] = useState("all"); // all, album, images
  const [viewMode, setViewMode] = useState("grid"); // grid or list
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
const [toastMessage, setToastMessage] = useState("");
  const observer = useRef();

  // Fetch images from API
  const fetchImages = async (pageNum) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://picsum.photos/v2/list?page=${pageNum}&limit=20`
      );
      const data = await res.json();

      const dataWithAlbum = data.map((item) => ({
        ...item,
        albumId: item.id % 10, // simulate album
      }));

      if (data.length === 0) setHasMore(false);
      else setImages((prev) => [...prev, ...dataWithAlbum]);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  // Infinite scroll observer
  const lastImageRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  // Filtered images memoized for performance
  const filteredImages = useMemo(() => {
    return images.filter((img) => {
      if (filterType === "all") return true;
      if (filterType === "album") return img.albumId !== undefined;
      if (filterType === "images") return img.albumId === undefined;
      return true;
    });
  }, [images, filterType]);



const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 2000); // Hide after 2 sec
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="title_sec mt-5">
          <h1 className="text-white font-bold text-[35px] md:text-[45px] text-center my-3">
            Show Images
          </h1>
        </div>

        {/* Filter Dropdown */}
        <FilterDropdown filterType={filterType} setFilterType={setFilterType} />

        {/* Grid / List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : "flex flex-col gap-4"
          }`}
        >
          {filteredImages.map((item, index) => {
            const uniqueKey = item.id;

            const handleClick = () => {
              setCurrentIndex(index);
              setLightboxOpen(true);
            };

            // Attach observer to last item for infinite scroll
            const refProps =
              index === filteredImages.length - 1 ? { ref: lastImageRef } : {};

            return (
              <div
                key={uniqueKey}
                {...refProps}
                onClick={handleClick}
                className="cursor-pointer"
              >
                <ImageCard image={item.download_url} title={item.author} viewMode={viewMode}  showToast={showToast}/>
                {/* Show author and date in list view */}
                {viewMode === "list" && (
                  <div className="text-gray-300 text-sm mt-1 px-2">
                    <p>Author: {item.author}</p>
                    <p>ID: {item.id}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
{/* Toast message at top */}
{toastMessage && (
  <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg z-50">
    {toastMessage}
  </div>
)}


        {loading && (
          <div className="text-center text-white mt-5">Loading more images...</div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={filteredImages}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          closeLightbox={() => setLightboxOpen(false)}
        />
      )}

      {/* View Toggle */}
      <div className="fixed bottom-3 right-3 z-50">
        <ViewToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>
    </>
  );
}

export default ShowImages;
