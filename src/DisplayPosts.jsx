import Card from "./component/Card";
import { useState, useEffect } from "react";
import SearchInput from "./component/SearchInput";
import Pagination from "./component/Pagination";
import { Link } from "react-router-dom";

const POSTS_PER_PAGE = 9;

const DisplayPosts = () => {
  const [posts, setPosts] = useState([]);       // store API posts
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch posts from API on mount
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Reset to page 1 when searchTerm changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  // Pagination logic applied on filteredPosts
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="title_sec mt-5">
        <h1 className="text-white font-bold text-[35px] md:text-[45px] text-center my-3">
          Fetch & Display Posts
        </h1>

        <div className="input_search_box mb-5 mx-3">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </div>

      <div className="posts_cards mt-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`}>
              <Card title={post.title} description={post.body} /> {/* API uses "body" */}
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No posts found.
          </p>
        )}
      </div>

      <div className="pagination mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default DisplayPosts;
