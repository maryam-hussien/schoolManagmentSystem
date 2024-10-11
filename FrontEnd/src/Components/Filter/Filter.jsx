import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; 
import './FilterButton.css'; 

function FilterButton({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('My Courses');
  const navigate = useNavigate();

  const filterRoutes = {
    'Courses': '/course', 
    Kindergarten: 'kindergaten',
    Primary: 'primary',
    Preparatory: 'preparatory',
    Secondary: 'secondary',
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter); 
    navigate(filterRoutes[filter]); 
  };

  return (
    <div className="filter-container">
      <FaFilter className="filter-icon" />
      <span className="filter-title">Filter by:</span>
      <div className="button-group">
        {['Courses', 'Kindergarten', 'Primary', 'Preparatory', 'Secondary'].map((filter) => (
          <button
            key={filter}
            className={`filter-button ${selectedFilter === filter ? 'active' : ''}`}
            onClick={() => handleFilterChange(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
}

FilterButton.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default FilterButton;
