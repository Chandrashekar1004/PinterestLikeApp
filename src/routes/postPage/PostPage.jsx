import { Link } from "react-router";
import PostInteractions from "../../Components/postInteractions/PostInteractions";
import "./PostPage.css"
import React from 'react'
import Image from "../../Components/Image/Image";
import Comments from "../../Components/Comments/Comments";

const PostPage = () => {
  return (
    <div className="postPage">
      <svg
        height="20"
        viewBox="0 0 24 24"
        width="20"
        style={{ cursor: "pointer" }}
      >
        <path d="M8.41 4.59a2 2 0 1 1 2.83 2.82L8.66 10H21a2 2 0 0 1 0 4H8.66l2.58 2.59a2 2 0 1 1-2.82 2.82L1 12z"></path>
      </svg>
        <div className="postContainer">
          <div className="postImg">
            <Image path="Images/wrestlemania-18-the-rock-hulk-hogan.jpg" alt=""
            w={400} h={500} />
          </div>
          <div className="postDetails">
              <PostInteractions />
              <Link to="/john" className="postUser">
              <Image path="General/noAvatar.png" alt=""/>
              <span> Iyer</span>
              </Link>
              <Comments/>
          </div>
        </div>
    </div>
  )
}

export default PostPage ;

