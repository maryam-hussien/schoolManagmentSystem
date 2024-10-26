import { useState } from 'react';
import Students from "../../../../public/data/studentsapi";
import Level from '../../DashComponents/selectedLevel/Level'; // Import the Level component

function DashAttendance() {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]); // State to hold filtered students

  // Today's date
  const today = new Date().toLocaleDateString();

  const filterStudents = () => {
    console.log('Filtering students with level:', level, 'and grade:', grade);
    
    // Check if both level and grade are selected
    if (level && grade) {
      // Filter students based on level and parsed grade
      setFilteredStudents(Students.filter(student => 
        student.level === level &&  student.grade === parseInt(grade)
      ));    
      // Optional: Log the filtered students for debugging
    } else {
      alert("Please select both level and grade."); // Alert if either is not selected
    }
  };
  
  const markAttendance = (studentId, attended) => {
   console.log(studentId , attended);
   
  };
  return (
    <div className="dashAttendance w-100 ">
        <h3 className=" text-start mb-4">Student Attendance Dashboard:</h3>

      <form className="filters mb-3">
        {/* Use Level component for level and grade selection */}
        <Level 
          level={level} 
          setLevel={setLevel} 
          formData={{ grade }} 
          setFormData={(data) => setGrade(data.grade)} // Set grade from formData
          showGrade={true} // Show the grade selector
          handleSubmit={filterStudents}
          buttonLabel='show students'
        />
      </form>

      <div className="attend-table">
        <table className="table table-responsive">
        <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Level</th> {/* Added Level column */}
              <th>Grade</th> {/* Added Grade column */}
              <th>Actions</th> {/* Changed to Actions column */}
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td> {/* Displaying Level */}
                  <td>{student.grade}</td> {/* Displaying Grade */}
                  <td>
                    {/* Attendance Action Buttons */}
                    <button className="btn btn-success me-2" onClick={() => markAttendance(student.id, true)}>
                      Attended
                    </button>
                    <button className="btn btn-danger" onClick={() => markAttendance(student.id, false)}>
                      Absent
                    </button>
                  </td>
                  <td>{today}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No students found for the selected level and grade.</td> {/* Adjusted colspan */}
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashAttendance;
