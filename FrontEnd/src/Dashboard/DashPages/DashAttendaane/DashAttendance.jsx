import "./DashAttandane.css"
import Students from "../../../../public/data/studentsapi"
import Card from "../../DashComponents/attendenceCard/Card";
function DashAttendance() {
  return (
    <div className="dashAttendance w-100 ">
      <div className="attendtitle fw-bold text-start px-4 py-2 mb-2">Student Attendance Dashboard</div>
      <div className="attendcards">
        {Students.map((student) => (
          <Card key={student.id} student={student}/>
        ))}
        
      </div>
    </div>
  )
}

export default DashAttendance