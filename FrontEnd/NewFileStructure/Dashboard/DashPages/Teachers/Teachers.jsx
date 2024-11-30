import { useState } from "react";
import TeachersData from "../../../data/TeachersData"; 
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";


const SelectDropdown = ({ label, value, options, onChange }) => (
  <div className="form-group">
    <label className="form-label">{label}</label>
    <select className="form-select" value={value} onChange={onChange}>
      <option value="">Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

function Teachers() {
  const [subject, setSubject] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  // Extract unique subjects from the Teachers dataset
  const subjects = [...new Set(TeachersData.map(teacher => teacher.subject))];

  const filterTeachers = () => {
    if (subject) {
      const filtered = TeachersData.filter(teacher => teacher.subject === subject);
      setFilteredTeachers(filtered);
    } else {
      toast.error("Please select a subject to filter!");
    }
  };

  return (
    <div className="teachersPage w-100 p-3">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <h3 className="dashComponentTitle mb-4">Teachers Dashboard</h3>

      <form className="filters mb-3 d-flex gap-3">
        {/* Dropdown for subjects */}
        <SelectDropdown
          label="Subject"
          value={subject}
          options={subjects}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button type="button" className="btn btn-primary" onClick={filterTeachers}>
          Show Teachers
        </button>
      </form>

      <div className="teachers-list">
        <h5 className="text-center mt-4 mb-2">Teachers</h5>
        {filteredTeachers.length > 0 ? (
          <table className="table table-striped table-bordered table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredTeachers.map((teacher) => (
                <tr key={teacher.id}>
                  <td>{teacher.id}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.subject}</td>
                  <td>{teacher.phone}</td>
                  <td>{teacher.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No teachers found for the selected subject.</p>
        )}
      </div>
    </div>
  );
}

export default Teachers;
