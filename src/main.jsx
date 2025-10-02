import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DisplayPosts from "./DisplayPosts.jsx";
import PostDetail from "./component/PostDetail.jsx";


import "./index.css";
import UserData from "./UserData.jsx";
import ShowImages from "./ShowImages.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
    
      <Routes>
        <Route path="/" element={<DisplayPosts />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/usertable" element={<UserData/>} />
        <Route path="/showimages" element={<ShowImages/>} />
      </Routes>
    </Router>
  </StrictMode>
);
