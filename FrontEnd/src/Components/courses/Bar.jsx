import { useState } from 'react';
import FilterButton from '../../Components/Filter/Filter';
import { NavLink } from 'react-router-dom';
import '../../pages/Courses/course.css';
import courses from '../../../public/data/coursresapi';

const Bar = () => {
  const [filter, setFilter] = useState('');
  const [selectedSection, setSelectedSection] = useState('');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCourses = filter
    ? courses.filter(course => course.grade === filter)
    : [];

  const isPrimary = window.location.pathname.includes('primary');
  const isKindergarten = window.location.pathname.includes('kindergaten');
  const isSecondaryOrPreparatory = window.location.pathname.includes('secondary') || window.location.pathname.includes('preparatory');

  return (
    <>
      <section className='first'>
        <NavLink to='/course'>
          <button 
            className="btn btn-outline-primary"
            onClick={() => setSelectedSection('myCourse')} // Set section to "myCourse"
          >
            My course
          </button>
        </NavLink>
        <NavLink to='kindergaten'>
          <button 
            className="btn btn-outline-primary"
            onClick={() => setSelectedSection('kindergarten')} 
          >
            Kindergarten
          </button>
        </NavLink>
        <NavLink to='primary'>
          <button 
            className="btn btn-outline-primary"
            onClick={() => setSelectedSection('primary')} 
          >
            Primary
          </button>
        </NavLink>
        <NavLink to='preparatory'>
          <button 
            className="btn btn-outline-primary"
            onClick={() => setSelectedSection('preparatory')} 
          >
            Preparatory
          </button>
        </NavLink>
        <NavLink to='secondary'>
          <button 
            className="btn btn-outline-primary"
            onClick={() => setSelectedSection('secondary')} 
          >
            Secondary
          </button>
        </NavLink>

        {(selectedSection === 'primary' || 
          selectedSection === 'kindergarten' || 
          selectedSection === 'secondary' || 
          selectedSection === 'preparatory') && (
          <FilterButton
            onFilterChange={handleFilterChange}
            isPrimary={isPrimary}
            isKindergarten={isKindergarten}
            isSecondaryOrPreparatory={isSecondaryOrPreparatory}
          />
        )}
      </section>

      <section className='courses'>
        <div className="courseContainer ">
        
          <div className='course-list'>
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <div key={course.title} className="course-card" style={{ backgroundColor: course.backgroundColor }}>
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <p>Created by: {course.creator}</p>
                  <img src={course.image} alt={course.title} />
                </div>
              ))
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bar;
