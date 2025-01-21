import { useState, useRef } from "react";
import "./AddPost.css";
import { FaImage } from "react-icons/fa";

const AddPost = ({ onAddPost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  // دالة لتحويل الصورة إلى Base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
      reader.readAsDataURL(file);
    });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file);
      setImage(base64Image); // حفظ الصورة كـ Base64
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      id: Math.floor(Math.random() * 1000),
      content,
      date: new Date().toISOString().split("T")[0],
      likes: 0,
      comments: [],
      image, // الصورة محفوظة بصيغة Base64
    };

    onAddPost(newPost);
    setContent("");
    setImage(null);
  };

  return (
    <div className="card mb-4 AddPost">
      <div className="card-body">
        <h5 className="card-title mb-4">Add New Post</h5>
        <form onSubmit={handleSubmit}>
          <div className="d-flex align-items-start mb-3 flex-wrap mt-1 w-75">
            <img
              src="https://icons.veryicon.com/png/o/system/system-1/post-5.png"
              alt="none"
              className="rounded-circle me-3"
              style={{ width: "30px", height: "30px" }}
            />
            <div className="flex-grow-1">
              <textarea
                className="form-control border-0"
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="3"
                placeholder="What's on your mind?"
                required
              ></textarea>
            </div>
          </div>
          <hr className="border border-secondary w-100" />
          <div className="addpostLastSec">
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                <FaImage
                  onClick={() => fileInputRef.current.click()}
                  className="image-icon"
                />
                <input
                  type="file"
                  className="d-none"
                  id="image"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                />
              </label>
              {image && <p className="mt-2">Image uploaded successfully!</p>}
            </div>
            <button type="submit" className="btn btn-primary">
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
