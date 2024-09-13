

import Slider from 'react-slick';
import './slider.css';

const TeacherSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at once by default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    '/FrontEnd/public/assets/download (1).jpg',
    '/FrontEnd/public/assets/download (2).jpg',
    '/FrontEnd/public/assets/download (3).jpg',
    '/FrontEnd/public/assets/download.jpg',
    '/FrontEnd/public/assets/images.jpg',
  ];

  return (
    <div className="teacher-slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="slider-item">
            <img src={image} alt={`Teacher ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeacherSlider;
