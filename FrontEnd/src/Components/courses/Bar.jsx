import  { useState } from 'react';
import FilterButton from '../../Components/Filter/Filter';
import { NavLink } from 'react-router-dom';
import '../../pages/Courses/course.css';

const Bar = () => {
  const [filter, setFilter] = useState('All '); 

  const links = [

    { to: '/course', label: 'My course' },
    { to: 'kindergaten', label: 'Kindergarten' },
    { to: 'primary', label: 'Primary' },
    { to: 'preparatory', label: 'Preparatory' },
    { to: 'secondary', label: 'Secondary' },
  ];

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);  
  };

  const filteredLinks = links.filter((link) => {
    return filter === 'All' || link.label === filter; 
  });

  return (
    <>
      <section className='first'>
        {filteredLinks.map((link, index) => (
          <NavLink key={index} to={link.to}>
            <button>{link.label}</button>
          </NavLink>
        ))}
        <FilterButton onFilterChange={handleFilterChange} />
      </section>
    </>
  );
};

export default Bar;
