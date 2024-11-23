import { useState } from "react";
import courses from "../../../public/data/coursresapi";
import "./courses.css";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import { FaSearch } from 'react-icons/fa';

const Courses = () => {
  const [filter, setFilter] = useState(""); 
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 7; 
  const filteredCourses = (courses || []).filter((course) => {
    if (filter === "more") {
      return course.creator === "Mr. John" && course.title?.toLowerCase().includes(searchQuery.toLowerCase());
    }
    const matchesLevel = filter ? course.level?.toLowerCase() === filter.toLowerCase() : true;
    const matchesSearch = course.title?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesSearch;
  });
  

  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div className="courses">
        <div className="fsection">
          <h1>My Courses</h1>
          <div className="nav-links">
            <a
              href="#"
              onClick={() => setFilter("")} 
              className={!filter ? "active" : ""}
            >
              All Courses
            </a>
            <a
              href="#"
              className={filter === "more" ? "active" : ""}
              onClick={() => setFilter("more")}
            >
              My Courses
            </a>
          </div>
        </div>

        <section className="fsec" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
  <button 
    onClick={() => setFilter("Kindergarten")} 
    className={filter === "Kindergarten" ? "active" : ""}
    style={{ flex: "1 1 150px" }}
  >
    Kindergarten
  </button>
  <button 
    onClick={() => setFilter("Primary")} 
    className={filter === "Primary" ? "active" : ""}
    style={{ flex: "1 1 150px" }}
  >
    Primary
  </button>
  <button 
    onClick={() => setFilter("Preparatory")} 
    className={filter === "Preparatory" ? "active" : ""}
    style={{ flex: "1 1 150px" }}
  >
    Preparatory
  </button>
  <button 
    onClick={() => setFilter("Secondary")} 
    className={filter === "Secondary" ? "active" : ""}
    style={{ flex: "1 1 150px" }}
  >
    Secondary
  </button>


  <div
    style={{
      flex: "1 1 150px", 
      position: "relative",
    }}
  >
    <FaSearch
      className="iconsearch"
    />
    <input 
      style={{
        textAlign: "left",
        paddingLeft: "35px",
        width: "100%",     
        height: "100%",    
      }}
      type="text"
      placeholder="Search my courses..."
      value={searchQuery}
      onChange={(e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1); 
      }} 
      className="search-input"
    />
  </div>
</section>

        <div className="course-grid">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <div
                key={`${course.level}-${course.grade}`}
                className="course-card"
                style={{ backgroundColor: course.backgroundColor }}
              >
                <img src={course.image} alt={course.title} />
                <h3>{course.title}</h3>
                <p>{course.description}</p>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={currentPage === index + 1 ? "active-page" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Courses;
