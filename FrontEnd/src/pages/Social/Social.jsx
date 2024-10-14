import  { useState } from 'react';
import AddPost from "../../Components/AddPost/AddPost"; // Ensure you have this import
import SocialNav from "../../Components/SocailNav/SocialNav";
import postsData from "../../../public/data/socialPostsapi"; // Ensure this path is correct
import "./Social.css";
import PostCard from '../../Components/PostCard/PostCard';
import img from "../../../public/assets/Connected world.svg"
import PostsFooter from '../../Components/PostsFooter/PostsFooter';

const Social = () => {
  const [posts, setPosts] = useState(postsData); // Initialize state with imported posts data

  // Handler function to add a new post
  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]); // Update the posts state with the new post
  };

  return (
    <>
      <SocialNav />
      <div className="Social p-3">
        <div className="SocialTitle">School Social Community</div>
        <div className='d-flex flex-wrap  align-items-start px-3 SocialDiv'>
          <img src={img} className='SocialImg' alt="Social" />
          <AddPost onAddPost={handleAddPost} /> {/* Pass the function to AddPost */}
        </div>
        <div className='SocialTitle text-center mt-2'>POSTS</div>
        {/* Display the list of posts */}
        <div >
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
      </div>
      <PostsFooter/>
    </>
  );
};

export default Social;
