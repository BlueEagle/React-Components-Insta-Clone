//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dataFile from '../../dummy-data';

const PostsPage = () => {
  // set up state for your data
  const [data, setData] = useState(dataFile);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        data.map(post => {
          return <Post key={post.imageUrl} post={post} />
        })
      }
    </div>
  );
};

export default PostsPage;
