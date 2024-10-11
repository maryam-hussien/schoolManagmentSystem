import { useState } from 'react';
import './Social.css';

const SocialBar = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active item

  const handleClick = (index) => {
    setActiveIndex(index); // Update the active index on click
  };

  return (
    <div className='SocialBar w-75 m-auto'>
      {['All', 'School', 'Friends', 'Me'].map((label, index) => (
        <div
          key={index}
          className={activeIndex === index ? 'active' : ''} // Add active class if the index matches
          onClick={() => handleClick(index)} // Handle click to set the active state
        >
          {label}
        </div>
      ))}
    </div>
  );
};

export default SocialBar;
