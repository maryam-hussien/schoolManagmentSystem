import { useState, useEffect } from "react";
import "./post.css";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import { Link } from "react-router-dom";
import AddPost from "../../features/Commuinty/AddPost/AddPost";
import PostCard from "../../features/Commuinty/PostCard/PostCard";

const Post = () => {
  const defaultPosts = [
    {
      id: 1,
      content: "📚 تعلم أساسيات البرمجة بلغة Python. مناسب للمبتدئين. 🖥️",
      date: "2025-01-20",
      likes: 20,
      comments: [
        { id: 1, commenter: "Ali", comment: "هذا الكورس مفيد جداً للمبتدئين! 😊" },
        { id: 2, commenter: "Sara", comment: "أين أجد المصادر؟" },
      ],
      image: null,
    },
    {
      id: 2,
      content: "🎓 دورة تطوير واجهات المستخدم باستخدام ReactJS 🚀.",
      date: "2025-01-19",
      likes: 15,
      comments: [
        { id: 1, commenter: "Hassan", comment: "دورة رائعة للمطورين المتقدمين! 💡" },
      ],
      image: null,
        },
    {
      id: 3,
      content: "📖 جدول الدراسة الأسبوعي:\n- الاثنين: JavaScript Basics\n- الثلاثاء: CSS Advanced",
      date: "2025-01-18",
      likes: 10,
      comments: [],
      image: null,
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    if (storedPosts.length === 0) {
      setPosts(defaultPosts);
      localStorage.setItem("posts", JSON.stringify(defaultPosts));
    } else {
      setPosts(storedPosts);
    }
  }, []);

  const handleAddPost = (newPost) => {
    setPosts((prevPosts) => {
      const updatedPosts = [newPost, ...prevPosts];
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
      return updatedPosts;
    });
  };

  return (
    <>
      <Header />
      <div className="Social p-3">
        <div className="d-flex flex-wrap px-3 SocialDiv">
          <Link to="/review" className="reviewroute">
            <div>Any Reviews?</div>
          </Link>
          <div className="SocialTitle">Here's Our Educational Network!</div>
          <AddPost onAddPost={handleAddPost} />
          <div className="SocialTitle text-center mt-2">POSTS :</div>
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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Post;
