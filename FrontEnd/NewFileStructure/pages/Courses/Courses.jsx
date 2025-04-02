import { useState } from "react";
import "./courses.css";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import Filter from "../../features/Courses/Filter";
import CourseCard from "./CourseCard";
import Pagination from "../../features/Courses/Pagenation";

const allCourses = [
  {
    id: "1",
    title: "Arabic Language [2nd Secondary ]",
    teacher: "Teacher Name",
    image:
      "https://www.shareicon.net/data/128x128/2015/09/02/94618_arabic_512x512.png",
    rating: 4,
  },
  {
    id: "2",
    title: "Mathematics[2nd Primary]",
    teacher: "Teacher Name",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png",
    rating: 3,
  },
  {
    id: "3",
    title: "English Language [2nd Primary]",
    teacher: "Teacher Name",
    image:
      "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png",
    rating: 5,
  },
  {
    id: "4",
    title: "Chemistry  [2nd Secondary]",
    teacher: "Teacher Name",
    image:
      "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png",
    rating: 4,
  },
  {
    id: "5",
    title: "physics [2nd Secondary ]",
    teacher: "Teacher Name",
    image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png",
    rating: 4,
  },
  {
    id: "6",
    title: "Science  [6th Primary]",
    teacher: "Teacher Name",
    image:
      "https://w7.pngwing.com/pngs/327/423/png-transparent-science-symbol-engineering-science-engineering-chemistry-sign-thumbnail.png",
    rating: 4,
  },
  {
    id: "7",
    title: "English Language [3rd Primary]",
    teacher: "Teacher Name",
    image:
      "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png",
    rating: 5,
  },
  {
    id: "8",
    title: "Introduction to Python [3rd Secondary ]",
    teacher: "Teacher Name",
    image: "https://img.icons8.com/?size=256&id=13441&format=png",
    rating: 3,
  },
  {
    id: "9",
    title: "Science [5th Primary]",
    teacher: "Teacher Name",
    image:
      "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png",
    rating: 4,
  },
  {
    id: "10",
    title: "English Language [2nd Secondary ]",
    teacher: "Teacher Name",
    image:
      "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png",
    rating: 4,
  },
  {
    id: "11",
    title: "physics [3rd Secondary ]",
    teacher: "Teacher Name",
    image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png",
    rating: 4,
  },
  {
    id: "12",
    title: "physics [2nd Secondary ]",
    teacher: "Teacher Name",
    image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png",
    rating: 4,
  },
  {
    id: "13",
    title: "English Language [3rd Primary]",
    teacher: "Teacher Name",
    image:
      "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png",
    rating: 5,
  },
  {
    id: "14",
    title: "Introduction to Python [3rd Secondary ]",
    teacher: "Teacher Name",
    image: "https://img.icons8.com/?size=256&id=13441&format=png",
    rating: 3,
  },
  {
    id: "15",
    title: "Science [4th Primary]",
    teacher: "Teacher Name",
    image:
      "https://png.pngtree.com/png-vector/20230915/ourmid/pngtree-chemical-tube-sticker-png-image_10083609.png",
    rating: 4,
  },
  {
    id: "16",
    title: "English Language [2nd Secondary ]",
    teacher: "Teacher Name",
    image:
      "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png",
    rating: 4,
  },
  {
    id: "17",
    title: "physics [3rd Secondary ]",
    teacher: "Teacher Name",
    image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png",
    rating: 4,
  },
];

const myCourses = [
  {
    id: "1",
    title: "Arabic Language [2nd Secondary ]",
    teacher: "Mrs/Yasmeen",
    image:
      "https://www.shareicon.net/data/128x128/2015/09/02/94618_arabic_512x512.png",
    rating: 4,
  },
  {
    id: "2",
    title: "Mathematics[2nd Secondary]",
    teacher: "Mrs/Mariam",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/c/c3/Deus_mathematics.png",
    rating: 3,
  },
  {
    id: "3",
    title: "English Language [2nd Secondary]",
    teacher: "Mrs/rania",
    image:
      "https://images.vexels.com/media/users/3/201997/isolated/lists/ea210d04b9b9a0c0b3f65da99c46c228-english-book-flat.png",
    rating: 5,
  },
  {
    id: "18",
    title: "physics [2nd Secondary ]",
    teacher: "Mr/Mohamed",
    image: "https://cdn-icons-png.flaticon.com/256/1467/1467187.png",
    rating: 4,
  },
  {
    id: "6",
    title: "History [2nd Secondary]",
    teacher: "Mr/said",
    image: "https://cdn-icons-png.flaticon.com/512/2234/2234697.png",
    rating: 5,
  },
];

const CoursesPage = () => {
  const [filter, setFilter] = useState(""); // فلترة الكورسات
  const [searchQuery, setSearchQuery] = useState(""); // البحث
  const [currentPage, setCurrentPage] = useState(1); // الصفحات
  const itemsPerPage = 15; // عدد العناصر لكل صفحة

  // فلترة الكورسات بناءً على البحث والفلاتر
  const filteredCourses =
    filter === "all"
      ? allCourses.filter((course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : myCourses.filter((course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

  // تقسيم الكورسات إلى صفحات
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const displayedCourses = filteredCourses.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // تغيير الصفحة
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />
      <div className="courses">
        <div className="fsection">
          <h1>Courses</h1>
          <div className="nav-links">
            <a
              href="#"
              onClick={() => setFilter("")}
              className={!filter ? "active" : ""}
            >
              My Courses
            </a>
            <a
              href="#"
              onClick={() => setFilter("all")}
              className={filter === "all" ? "active" : ""}
            >
              All Courses
            </a>
          </div>
        </div>
        {/* مكون البحث */}
        <Filter
          filter={filter}
          setFilter={setFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {/* عرض الكورسات */}
        <div className="course-grid">
          {displayedCourses.length > 0 ? (
            displayedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
        {/* التحكم في الصفحات */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default CoursesPage;
