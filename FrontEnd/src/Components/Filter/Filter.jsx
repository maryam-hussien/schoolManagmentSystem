
import { FaFilter } from 'react-icons/fa'; 

function FilterButton() {
  return (
    <button
      style={{
        padding: '10px 20px',
        backgroundColor: 'white',
        color: '#333',
        border: '1px solid #ddd',
        borderRadius: '12px', 
        cursor: 'pointer',
        fontSize: '22px',
        fontFamily:'bold',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
      }}
    >
     
      <FaFilter style={{ marginRight: '8px' }} />
      Filters
    </button>
  );
}

export default FilterButton;
