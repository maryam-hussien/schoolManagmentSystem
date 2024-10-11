import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import PropTypes from 'prop-types';

function FilterButton({ onFilterChange }) {
  const [selectedFilter, setSelectedFilter] = useState('All'); // Default to 'All'

  // Handles filter selection
  const handleFilterChange = (event) => {
    const filter = event.target.value;  // Get the selected filter value
    setSelectedFilter(filter);           // Update the local state
    onFilterChange(filter);              // Notify the parent component about the filter change
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <FaFilter style={{ marginRight: '8px' }} />
      <span style={{ fontSize: '22px', fontWeight: 'bold' }}>Filters:</span>
      <label>
        <input
          type="radio"
          value="All"
          checked={selectedFilter === 'All'}
          onChange={handleFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="Kindergarten"
          checked={selectedFilter === 'Kindergarten'}
          onChange={handleFilterChange}
        />
        Kindergarten
      </label>
      <label>
        <input
          type="radio"
          value="Primary"
          checked={selectedFilter === 'Primary'}
          onChange={handleFilterChange}
        />
        Primary
      </label>
      <label>
        <input
          type="radio"
          value="Preparatory"
          checked={selectedFilter === 'Preparatory'}
          onChange={handleFilterChange}
        />
        Preparatory
      </label>
      <label>
        <input
          type="radio"
          value="Secondary"
          checked={selectedFilter === 'Secondary'}
          onChange={handleFilterChange}
        />
        Secondary
      </label>
    </div>
  );
}

// Validate prop types
FilterButton.propTypes = {
  onFilterChange: PropTypes.func.isRequired,  // onFilterChange must be a function
};

export default FilterButton;
