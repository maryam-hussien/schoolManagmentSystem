import "./AbsentDaysCard.css";

const AbsentDaysCard = () => {


  const absentDays = 5;

  
  return (
    <div className="absent-days-card">
      <h3>Absent Days</h3>
      <p>You have been absent for {absentDays} days this semester.</p>
    </div>
  );
};

export default AbsentDaysCard;
