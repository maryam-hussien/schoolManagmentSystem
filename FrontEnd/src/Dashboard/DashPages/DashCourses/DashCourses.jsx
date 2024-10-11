import  { useState } from "react";
import "./DashCourses.css"; // Ensure the CSS file is properly imported
import ScienceImage from '/assets/a1327d0d7ff475a3f8a58d4660ee27bb.jpg'; // Example image
import HistoryImage from '/assets/2021f398be5e10ac967420161f0f8120.jpg'; // Example image
import GeographyImage from '/assets/7998cd7054b50afd5741a5c1bba0d7e4.jpg'; // Example image
import { NavLink } from 'react-router-dom';

const DashCourses = () => {
  // Default courses list
  const initialCourses = [
    {
      id: 1,
      title: "Science Exploration",
      description: "Discover the wonders of science through experiments and hands-on activities.",
      creator: "Ms. Jessica",
      image: ScienceImage
    },
    {
      id: 2,
      title: "World History",
      description: "Learn about important historical events and figures that shaped our world.",
      creator: "Mr. Alex",
      image: HistoryImage
    },
    {
      id: 3,
      title: "Geography Adventures",
      description: "Explore the world’s continents, countries, and cultures through maps and activities.",
      creator: "Ms. Rachel",
      image: GeographyImage
    }
  ];

  // Manage the list of courses
  const [courses, setCourses] = useState(initialCourses);

  // Manage new course input
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    creator: ""
  });

  // Manage form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse({ ...newCourse, [name]: value });
  };

  // Handle form submission to add a new course
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create a new course object
    const course = {
      id: courses.length + 1, // Generate a unique ID
      ...newCourse,
      image: ScienceImage // For simplicity, using the same image (change as needed)
    };
    // Add the new course to the list
    setCourses([...courses, course]);
    // Clear the form fields
    setNewCourse({
      title: "",
      description: "",
      creator: ""
    });
    // Hide the form after submission
    setIsFormVisible(false);
  };

  return (
    <div className="dash-courses-container">
      <h2>My Courses</h2>
      <section className='first'>  
        <NavLink to='/course' >       
            <button>My course</button>
          </NavLink>                
          <NavLink to='kindergaten' >       
            <button>Kindergarten</button>
          </NavLink>
          <NavLink to='primary' >       
            <button>Primary</button>
          </NavLink>
          <NavLink to='preparatory' >       
            <button>Preparatory</button>
          </NavLink>
          <NavLink to='secondary' >       
            <button>Secondary</button>
          </NavLink>

         
        </section>
      {/* Button to toggle form visibility */}
      <div className="add-course-btn-container">
        <button className="add-course-btn" onClick={() => setIsFormVisible(!isFormVisible)}>
          {isFormVisible ? "Hide Form" : "Add New Course"}
        </button>
      </div>

      {/* Conditionally render the form based on visibility state */}
      {isFormVisible && (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Course Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Course Title"
            value={newCourse.title}
            onChange={handleInputChange}
            className="form-input"
            required
          />

          <label htmlFor="description">Course Description:</label>
          <input
            id="description"
            type="text"
            name="description"
            placeholder="Course Description"
            value={newCourse.description}
            onChange={handleInputChange}
            className="form-input"
            required
          />

          <label htmlFor="creator">Course Creator:</label>
          <input
            id="creator"
            type="text"
            name="creator"
            placeholder="Course Creator"
            value={newCourse.creator}
            onChange={handleInputChange}
            className="form-input"
            required
          />

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      )}

      {/* Render the course cards dynamically */}
      <div className="courses-section">
        {courses.map((course) => (
          <div className="course-card1" key={course.id} style={{ backgroundColor: "#f1f1f1" }}>
            <img
              src={course.image}
              alt={course.title}
              className="course-image1"
            />
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <p className="course-creator">Created by {course.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashCourses;
