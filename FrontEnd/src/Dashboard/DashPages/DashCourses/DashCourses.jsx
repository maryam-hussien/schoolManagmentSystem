import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "./DashCourses.css";
// import osImage from "../../../../public/assets/download.jpg";
// import aiImage from "../../../../public/assets/download.jpg";
// import seImage from "../../../../public/assets/download.jpg";

const DashCourses = () => {
  const initialCourses = [
    // {
    //   id: 1,
    //   title: "Operating System",
    //   description:
    //     "Learn the basic operating system concepts with hands-on projects.",
    //   creator: "Monk Lee",
    //   image: osImage,
    // },
    // {
    //   id: 2,
    //   title: "Artificial Intelligence",
    //   description:
    //     "Explore AI fundamentals and work on real-world applications.",
    //   creator: "Jung Jinhyun",
    //   image: aiImage,
    // },
    // {
    //   id: 3,
    //   title: "Software Engineering",
    //   description:
    //     "Master the best practices in software development and teamwork.",
    //   creator: "Kim Taeyong",
    //   image: seImage,
    // },
  ];

  const [courses, setCourses] = useState(initialCourses);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    creator: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewCourse({ ...newCourse, image: reader.result }); 
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newId = courses.length + 1;
    setCourses([...courses, { id: newId, ...newCourse }]);
    setNewCourse({ title: "", description: "", creator: "" });
    setIsFormVisible(false);
  };

  return (
    <div className="dashboard">
      <h2>My Courses</h2>


      <div className="filter-section">
        <div className="filter-group">
          <label>Filter by:</label>
          <section className="first">
            <NavLink to="kindergaten">
              <button>Kindergarten</button>
            </NavLink>
            <NavLink to="primary">
              <button>Primary</button>
            </NavLink>
            <NavLink to="preparatory">
              <button>Preparatory</button>
            </NavLink>
            <NavLink to="secondary">
              <button>Secondary</button>
            </NavLink>
          </section>
        </div>
        <FontAwesomeIcon icon={faFilter} className="filter-icon" />
      </div>
      <button
        className="add-course-btn"
        onClick={() => setIsFormVisible(!isFormVisible)}
      >
        {isFormVisible ? "Close" : "Add Course"}
      </button>

      {isFormVisible && (
        <form className="course-form" onSubmit={handleFormSubmit}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={newCourse.title}
            onChange={handleInputChange}
            required
          />
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={newCourse.description}
            onChange={handleInputChange}
            required
          />
          <label>Creator:</label>
          <input
            type="text"
            name="creator"
            value={newCourse.creator}
            onChange={handleInputChange}
            required
          />

          <label>Upload Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            required
          />
          <button type="submit">Submit</button>
        </form>
      )}

      <div className="courses-section">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <img
              src={course.image}
              alt={course.title}
              className="course-image"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p className="creator">Created by {course.creator}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashCourses;
