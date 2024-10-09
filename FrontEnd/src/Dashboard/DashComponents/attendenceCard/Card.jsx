import "./card.css";
 
const Card = () => {
  return (
    <div className="attendcard fs-5 fw-light">
      <div className="date">21-6-2024</div>
      <div className="mainInfo">
        <img></img>
        <div>
          <div> maryam hussien </div>
          <div className="id">2027222 </div>
        </div>
      </div>
      <div className="d-flex justify-content-around m-auto flex-wrap">
        <button className="btn attendcardbtn">Present</button>
        <button className="btn">Absent</button>
      </div>
    </div>
  );
};

export default Card;
