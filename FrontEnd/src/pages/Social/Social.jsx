import  { useState } from 'react';
import SocialNav from "../../Components/SocailNav/SocialNav";
import { Route, Routes } from "react-router-dom";
import "./Social.css";
import PostsFooter from '../../Components/PostsFooter/PostsFooter';
import Post from '../../Components/PostPage/Post';

const Social = () => {


  return (
    <>
      <SocialNav />
      <div className="Social p-3">
        <div className="SocialTitle">School Social Community</div>
        <Routes>
              <Route path="/" element={<Post />}/>


            </Routes>
      </div>
      <PostsFooter/>
    </>
  );
};

export default Social;
