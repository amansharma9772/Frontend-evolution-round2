import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FiUser } from "react-icons/fi"; // User icon

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Comments state
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [showAll, setShowAll] = useState(false);

  const defaultComments = [
    { id: 1, name: "John Doe", body: "Great post! Really enjoyed reading it." },
    { id: 2, name: "Jane Smith", body: "Thanks for sharing this information." },
    { id: 3, name: "Alex Johnson", body: "Very helpful, looking forward to more posts!" },
    { id: 4, name: "Maria Lee", body: "Awesome content!" },
    { id: 5, name: "Chris Brown", body: "I learned a lot from this post." },
  ];

  // Fetch post from API
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  // Load comments: localStorage → API → default
  useEffect(() => {
    const storedComments = localStorage.getItem(`comments_post_${id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    } else {
      const fetchComments = async () => {
        try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
          const data = await response.json();
          // Combine default comments + first 10 API comments
          setComments([...defaultComments, ...data.slice(0, 10)]);
        } catch (err) {
          console.error("Error fetching comments:", err);
          setComments(defaultComments); // fallback
        }
      };
      fetchComments();
    }
  }, [id]);

  // Save comments to localStorage whenever they change
  useEffect(() => {
    if (comments.length > 0) {
      localStorage.setItem(`comments_post_${id}`, JSON.stringify(comments));
    }
  }, [comments, id]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const commentToAdd = {
      id: Date.now(),
      name: "Anonymous",
      body: newComment,
    };

    setComments([commentToAdd, ...comments]);
    setNewComment("");
  };

  if (loading) return <p className="text-center text-white mt-10">Loading post...</p>;
  if (!post) return <p className="text-center text-white mt-10">Post not found</p>;

  // Decide which comments to show
  const commentsToShow = showAll ? comments : comments.slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto p-6 text-white">
      <div className="text-left mb-4">
        <Link
          to="/"
          className="text-gray-400 inline-block border border-gray-400 transform transition-all duration-300 hover:border-purple-500 hover:bg-purple-500 hover:text-white py-2 px-3 rounded-lg"
        >
          ← Back to posts
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-4 text-center">{post.title}</h1>
      <p className="text-gray-300 whitespace-pre-line mb-8 text-center">{post.body}</p>

      {/* Comments Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Comments</h2>

        {/* Input */}
        <div className="mb-6 flex gap-2 relative">
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="flex-1 p-2 rounded-lg border border-gray-600 bg-gray-900 text-white focus:outline-none focus:border-purple-500"
            onKeyDown={(e) => e.key === "Enter" && handleAddComment()}
          />
          <button
            onClick={handleAddComment}
            className="bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors absolute right-0 px-6 py-2"
          >
            Add
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {commentsToShow.map((comment) => (
            <div
              key={comment.id}
              className="bg-gray-800 p-4 rounded-lg border border-gray-700 flex items-start gap-3"
            >
              <FiUser className="text-purple-500 text-2xl mt-1" />
              <div>
                <p className="font-semibold text-purple-500">{comment.name}</p>
                <p className="text-gray-300">{comment.body || comment.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {comments.length > 4 && !showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="mt-4 text-purple-500 hover:text-purple-400 font-semibold px-[29px] py-[9px] border border-purple-500 rounded-lg"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
