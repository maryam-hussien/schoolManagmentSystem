import { useState } from 'react';
import Students from "../../../data/studentsapi";
import Level from '../../DashComponents/selectedLevel/Level'; // Import the Level component
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../DashAttendaane/DashAttendance";
import '../DashAttendaane/DashAttendance'; // Import the custom CSS file for table row height

function DashAttendance() {
  const [level, setLevel] = useState("");
  const [grade, setGrade] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]); // State to hold filtered students
  const [newStudent, setNewStudent] = useState({ id: "", name: "", level: "", grade: "" }); // State for new student form

  const filterStudents = () => {
    if (level && grade) {
      setFilteredStudents(
        Students.filter(
          student => student.level === level && student.grade === parseInt(grade)
        )
      );
    } else {
      toast.error("Please select both level and grade.");
    }
  };

  const markAttendance = (studentId) => {
    toast.info(`Student ID: ${studentId} has been removed`);
    setFilteredStudents(prevStudents =>
      prevStudents.filter(student => student.id !== studentId)
    );
  };

  const handleAddStudent = () => {
    const { id, name, level, grade } = newStudent;
    if (!id || !name || !level || !grade) {
      toast.error("Please fill in all fields for the new student.");
      return;
    }

    if (filteredStudents.some(student => student.id === id)) {
      toast.error("A student with this ID already exists.");
      return;
    }

    setFilteredStudents(prevStudents => [
      ...prevStudents,
      { id, name, level, grade: parseInt(grade) }
    ]);
    toast.success("Student added successfully!");
    setNewStudent({ id: "", name: "", level: "", grade: "" });
  };

  return (
    <div className="dashAttendance w-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <h3 className="text-start mb-4 dashComponentTitle">Students Attendance Dashboard:</h3>
      <form className="filters mb-3">
        <Level 
          level={level} 
          setLevel={setLevel} 
          formData={{ grade }} 
          setFormData={(data) => setGrade(data.grade)} 
          showGrade={true}
          handleSubmit={filterStudents}
          buttonLabel='Show Students'
        />
      </form>
      <div className="dashAttendance">
        <h5 className="text-center mt-4 mb-2">Existing Students</h5>
        <table className="table table-responsive">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Level</th>
              <th>Grade</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.level}</td>
                  <td>{student.grade}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => markAttendance(student.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No students found for the selected level and grade.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="add-student mt-5">
        <h5 className="text-center mb-3">Add New Student</h5>
        <form className="d-flex justify-content-center gap-3">
          <input
            type="text"
            placeholder="ID"
            value={newStudent.id}
            onChange={(e) => setNewStudent({ ...newStudent, id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Name"
            value={newStudent.name}
            onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Level"
            value={newStudent.level}
            onChange={(e) => setNewStudent({ ...newStudent, level: e.target.value })}
          />
          <input
            type="text"
            placeholder="Grade"
            value={newStudent.grade}
            onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
          />
          <button type="button" className="btn btn-success" onClick={handleAddStudent}>
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default DashAttendance;
