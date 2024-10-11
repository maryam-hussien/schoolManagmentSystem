import  { useState } from 'react';
import FilterButton from '../../Components/Filter/Filter';
import { NavLink } from 'react-router-dom';
import '../../pages/Courses/course.css';

const Bar = () => {
  const [filter, setFilter] = useState('All'); // State to track the current filter

  // Links for the different courses
  const links = [
    { to: '/course', label: 'My course' },
    { to: 'kindergaten', label: 'Kindergarten' },
    { to: 'primary', label: 'Primary' },
    { to: 'preparatory', label: 'Preparatory' },
    { to: 'secondary', label: 'Secondary' },
  ];

  // Function to handle filter change (this gets called by FilterButton)
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);  // Update the filter state based on user selection
  };

  // Filter the course links based on the selected filter
  const filteredLinks = links.filter((link) => {
    return filter === 'All' || link.label === filter; // Show all if 'All' is selected, otherwise filter by category
  });

  return (
    <>
      <section className='first'>
        {/* Render the filtered navigation links */}
        {filteredLinks.map((link, index) => (
          <NavLink key={index} to={link.to}>
            <button>{link.label}</button>
          </NavLink>
        ))}

        {/* Pass the handleFilterChange function to FilterButton */}
        <FilterButton onFilterChange={handleFilterChange} />
      </section>
    </>
  );
};

export default Bar;
