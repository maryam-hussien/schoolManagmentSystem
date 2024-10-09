import "./card.css";
import img from "../../../../public/assets/0daad3630b85891d51f05fc25aba5985.jpg"; // Fallback image
import  { useState } from "react";

const Card = ({ student }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handlePresent = (e) => {
    console.log(`${student.name} is Present`);
  };

  const handleAbsent = () => {
    console.log(`${student.name} is Absent`);
  };
  const handleToggleVisibility = () => {
    setIsVisible(!isVisible); 
  };
  if (!isVisible) return null; // Return null if the card should not be visible

  return (
    <div className="attendcard fs-5 fw-light " onClick={handleToggleVisibility}>
      <div className="attendcarddate text-secondary">21-6-2024</div>
      <div className="mainInfo d-flex flex-wrap">
        <img src={student.photo || img} alt={student.name} className="student-photo" />
        <div className="m-auto attendcardData">
          <div>Name: {student.name}</div>
          <div className="id">ID: {student.id}</div>
        </div>
      </div>
      <div className="d-flex flex-wrap attendcardbtns">
        {/* Adding onClick handlers to buttons */}
        <button className="btn btn-success" onClick={handlePresent}>Present</button>
        <button className="btn btn-danger" onClick={handleAbsent}>Absent</button>
      </div>
    </div>
  );
};

export default Card;
