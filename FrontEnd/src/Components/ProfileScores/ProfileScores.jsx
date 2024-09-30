import "./profileScores.css"

const ProfileScores = () => {
  return (
    <div className="d-flex flex-wrap flex-column text-capitalize ProfileScores container mt-5 ">
      <h3 className="text-center ">Student grades</h3>
     <div className="gradeSection border border-secondary rounded-2 d-flex flex-column mx-auto my-2">
      <div className="fw-semibold text-secondary">2024-06-21</div>
      <div className="grades d-flex fw-bold">
        <div className="p-1">midterm in science</div>
        <div className="p-1">0/100</div>
      </div>
    </div> 
     <div className="gradeSectionn border border-secondary rounded-2 d-flex flex-column mx-auto my-1">
      <div className="fw-semibold text-secondary">2024-06-21</div>
      <div className="grades d-flex fw-bold">
        <div className="p-1">final in science</div>
        <div className="p-1">0/100</div>
      </div>
    </div> 
    </div>
  )
}

export default ProfileScores