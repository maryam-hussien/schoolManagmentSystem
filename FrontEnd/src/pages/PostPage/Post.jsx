import AddPost from "../../Components/AddPost/AddPost";
import PostCard from "../../Components/PostCard/PostCard";
import img from "../../../public/assets/Connected world.svg";
import postsData from "../../../public/data/socialPostsapi"; // Ensure this path is correct
import { useState } from "react";

const Post = () => {
  const [posts, setPosts] = useState(postsData); // Initialize state with imported posts data

  // Handler function to add a new post
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]); // Update the posts state with the new post
  };
  return (
    <>
      <div className="d-flex flex-wrap  align-items-start px-3 SocialDiv">
        <img src={img} className="SocialImg" alt="Social" />
        <AddPost onAddPost={handleAddPost} />{" "}
        {/* Pass the function to AddPost */}
      </div>
      <div className="SocialTitle text-center mt-2">POSTS</div>
      <div>
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ul className="list-group">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Post;
