import { useState } from 'react';
import Level from '../../DashComponents/selectedLevel/Level'; // Import the Level component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './DashCourses.css';
import course from "../../../../public/data/coursresapi";

function DashCourses() {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [courses, setCourses] = useState([]); // State to hold all courses
  const [filteredCourses, setFilteredCourses] = useState([]); // State to hold filtered courses
  const [isAddCourseFormVisible, setIsAddCourseFormVisible] = useState(false); // State to show/hide add course form
  const [newCourse, setNewCourse] = useState({ title: '', description: '', creator: '', level: '', grade: '', backgroundColor: '#fff', image: '' }); // New course form data

  // Function to filter courses based on level and grade
  const filterCourses = () => {
    if (!level || !grade) {
      toast.error("Please select both level and grade to filter the courses.");
      return;
    }
  
    // Ensure grade is treated as a number
    const gradeNumber = parseInt(grade, 10);
  
    // Filter courses based on level and grade
    const filtered = course.filter(
      (course) => course.level === level && course.grade === gradeNumber
    );
  
    setFilteredCourses(filtered); // Update the state with filtered courses
  
    if (filtered.length === 0) {
      toast.info("No courses found for the selected level and grade.");
    }
  };

  // Toggle the visibility of the add course form
  const toggleAddCourseForm = () => {
    setIsAddCourseFormVisible(prevState => !prevState);
  };

  // Handle course input changes
  const handleCourseInputChange = (e) => {
    const { name, value } = e.target;
    setNewCourse(prevCourse => ({
      ...prevCourse,
      [name]: value
    }));
  };

  // Handle form submission to add a new course
  const handleAddCourse = (e) => {
    e.preventDefault();
    setCourses([...courses, newCourse]); // Add the new course to the courses state
    toast.success("Course added successfully!");
    setNewCourse({ title: '', description: '', creator: '', level: '', grade: '', backgroundColor: '#fff', image: '' }); // Clear form
    toggleAddCourseForm(); // Close the form after submission
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0]; // Get the selected file

    if (file) {
      const reader = new FileReader(); // FileReader instance to read the image file

      reader.onloadend = () => {
        setNewCourse((prevCourse) => ({
          ...prevCourse,
          image: reader.result, // Store the base64 string of the image
        }));
      };

      reader.readAsDataURL(file); // Convert the image to a base64 encoded string
    }
  };

  // Handle course edit
  const handleEditCourse = (index) => {
    const courseToEdit = courses[index];
    setNewCourse(courseToEdit); // Set the course data in the form fields for editing
    toggleAddCourseForm(); // Show the form to edit the course
  };

  // Handle course deletion
  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    setCourses(updatedCourses); // Remove course from the list
    toast.success("Course deleted successfully!");
  };

  return (
    <div className="dashAttendance w-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />

      <h3 className="text-start mb-4">Students Management Dashboard:</h3>

      {/* Level and Grade Filters */}
      <form className="filters mb-3">
        <Level
          level={level}
          setLevel={setLevel}
          formData={{ grade }}
          setFormData={(data) => setGrade(data.grade)}
          showGrade={true}
          handleSubmit={filterCourses} // Set filter function to be called on submit
          buttonLabel="Show Courses"
        />
      </form>

      {/* Show Course Cards */}
      <div className="course-cards-container">
        <h3 className="text-center mb-4">Courses</h3>
        <button
          className="dash-btn-add-course"
          onClick={toggleAddCourseForm}
        >
          +
        </button>

        {/* Add Course Form */}
        {isAddCourseFormVisible && (
          <form onSubmit={handleAddCourse} className="add-course-form">
            {/* Course Title */}
            <div className="form-group">
              <input
                type="text"
                name="title"
                value={newCourse.title}
                onChange={handleCourseInputChange}
                placeholder="Course Title"
                required
              />
            </div>

            {/* Course Description */}
            <div className="form-group">
              <textarea
                name="description"
                value={newCourse.description}
                onChange={handleCourseInputChange}
                placeholder="Course Description"
                required
              />
            </div>

            {/* Course Creator */}
            <div className="form-group">
              <input
                type="text"
                name="creator"
                value={newCourse.creator}
                onChange={handleCourseInputChange}
                placeholder="Course Creator"
                required
              />
            </div>

            {/* Level Dropdown */}
            <div className="form-group">
              <select
                name="level"
                value={newCourse.level}
                onChange={handleCourseInputChange}
                required
              >
                <option value="">Select Level</option>
                <option value="Kindergarten">Kindergarten</option>
                <option value="Preparatory">Preparatory</option>
                <option value="Primary">Primary</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>

            {/* Grade Dropdown */}
            <div className="form-group">
              <select
                name="grade"
                value={newCourse.grade}
                onChange={handleCourseInputChange}
                required
              >
                <option value="">Select Grade</option>
                {[...Array(6).keys()].map((i) => (
                  <option key={i} value={i + 1}>
                    Grade {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Background Color Picker */}
            <div className="form-group">
              <input
                type="color"
                name="backgroundColor"
                value={newCourse.backgroundColor}
                onChange={handleCourseInputChange}
              />
            </div>

            {/* Image Upload */}
            <div className="form-group">
              <input
                type="file"
                name="image"
                onChange={handleImageUpload} // Call the function when file is selected
                accept="image/*" // Allow only images
                placeholder="Upload Course Image"
              />
            </div>

            {/* Display Image Preview */}
            {newCourse.image && (
              <div className="image-preview">
                <img
                  src={newCourse.image}
                  alt="Course Preview"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            )}

            {/* Submit Button */}
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </form>
        )}

        {/* Display Courses as Cards */}
        <div className="row">
          {(filteredCourses.length > 0 ? filteredCourses : courses).length === 0 ? (
            <div className="col-12 text-center">
              <p>No courses available for the selected level and grade.</p>
            </div>
          ) : (
            (filteredCourses.length > 0 ? filteredCourses : courses).map((course, index) => (
              <div className="col-md-4" key={index}>
                <div className="card" style={{ backgroundColor: course.backgroundColor }}>
                  <img src={course.image} alt={course.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">{course.title}</h5>
                    <p className="card-text">{course.description}</p>
                    <button className="btn btn-warning" onClick={() => handleEditCourse(index)}>
                      Edit
                    </button>
                    <button className="btn btn-danger" onClick={() => handleDeleteCourse(index)}>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default DashCourses;
