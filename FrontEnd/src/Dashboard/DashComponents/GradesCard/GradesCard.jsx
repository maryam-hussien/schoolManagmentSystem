import './GradesCard.css'

const GradesCard = () => {
  return (
    <div className="dashboard-card grades-card">
      <h3>My Grades</h3>
      <ul>
        <li> Mid term : </li>
        <li>Chemistry: A</li>
        <li>Physics: B+</li>
        <li>Mathematics: A-</li>
      </ul>
    </div>
  );
};

export default GradesCard;
