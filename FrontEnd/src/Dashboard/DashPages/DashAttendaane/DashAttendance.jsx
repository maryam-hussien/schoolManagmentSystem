import "./DashAttandane.css"
import Students from "../../../../public/data/studentsapi"
import Card from "../../DashComponents/attendenceCard/Card";
import attendenceImg from '../../../../public/assets/Confirmed attendance-rafiki (1).svg'

function DashAttendance() {
  return (
    <div className="dashAttendance w-100 ">
      <div className="d-flex justify-content-between px-2 py-2 mb-3 flex-wrap">
        <p className="attendtitle fw-bold text-start ms-3">Student Attendance Dashboard :</p>
        <img src={attendenceImg} alt="none"/>
      </div>
      <div className="attendcards">
        {Students.map((student) => (
          <Card key={student.id} student={student}/>
        ))}
        
      </div>
    </div>
  )
}

export default DashAttendance