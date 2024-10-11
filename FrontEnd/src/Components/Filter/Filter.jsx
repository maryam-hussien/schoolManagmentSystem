import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './FilterButton.css';

function FilterButton({ onFilterChange, isKindergarten, isPrimary, isSecondaryOrPreparatory }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

 
  const grades = (() => {
    if (isKindergarten) return [1, 2];
    if (isSecondaryOrPreparatory) return [1, 2, 3];
    if (isPrimary) return [1, 2, 3, 4, 5, 6];
    return [];
  })();

  return (
    <div className="filter-container">
      <button onClick={toggleDropdown} className="dropdow-toggle">
        <FaFilter className="filter-icon" />
        Filter By:
      </button>
      {isDropdownOpen && (
        <div className="dropdow-menu">
          {grades.map((grade) => (
            <button
              key={grade}
              className="dropdow-button"
              onClick={() => {
                onFilterChange(`Grade ${grade}`);
                setDropdownOpen(false);
              }}
            >
              Grade {grade}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

FilterButton.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  isKindergarten: PropTypes.bool.isRequired,
  isPrimary: PropTypes.bool.isRequired,
  isSecondaryOrPreparatory: PropTypes.bool.isRequired,
};

export default FilterButton;
