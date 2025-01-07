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
  const [filteredTeachers, setFilteredTeachers] = useState(TeachersData);
  const [isAddTeacherFormVisible, setIsAddTeacherFormVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false); // New state to track if we are editing
  const [newTeacher, setNewTeacher] = useState({
    id: "",
    name: "",
    subject: "",
    phone: "",
    email: "",
  });

  // Extract unique subjects from TeachersData
  const subjects = [...new Set(TeachersData.map((teacher) => teacher.subject))];

  const filterTeachers = () => {
    if (subject) {
      const filtered = TeachersData.filter((teacher) => teacher.subject === subject);
      setFilteredTeachers(filtered);
    } else {
      toast.error("Please select a subject to filter!");
    }
  };

  const toggleAddTeacherForm = () => {
    setIsAddTeacherFormVisible((prev) => !prev);
    setNewTeacher({ id: "", name: "", subject: "", phone: "", email: "" });
    setIsEditing(false); // Reset edit state when closing the form
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    const { id, name, subject, phone, email } = newTeacher;
    if (!id || !name || !subject || !phone || !email) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (isEditing) {
      // Handle editing an existing teacher
      const updatedTeachers = filteredTeachers.map((teacher) =>
        teacher.id === newTeacher.id ? newTeacher : teacher
      );
      setFilteredTeachers(updatedTeachers);
      toast.success("Teacher updated successfully!");
    } else {
      // Handle adding a new teacher
      if (filteredTeachers.some((teacher) => teacher.id === id)) {
        toast.error("A teacher with this ID already exists.");
        return;
      }
      setFilteredTeachers((prev) => [...prev, newTeacher]);
      toast.success("Teacher added successfully!");
    }
    setNewTeacher({ id: "", name: "", subject: "", phone: "", email: "" });
    setIsEditing(false); // Reset edit state after save
    toggleAddTeacherForm();
  };

  const handleDeleteTeacher = (id) => {
    setFilteredTeachers((prev) => prev.filter((teacher) => teacher.id !== id));
    toast.info("Teacher removed successfully.");
  };

  const handleEditTeacher = (teacher) => {
    setNewTeacher({ ...teacher });
    setIsEditing(true); // Set editing mode
    setIsAddTeacherFormVisible(true); // Show form when editing
  };

  return (
    <div className="teachersPage w-100">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar={false} />
      <h3 className="text-start mb-4 dashComponentTitle">Teachers Management Dashboard</h3>

      {/* Subject Filter */}
      <form className="filters mb-3 d-flex align-items-center gap-3">
  <SelectDropdown
    label="Subject"
    value={subject}
    options={subjects}
    onChange={(e) => setSubject(e.target.value)}
  />
  <button
    type="button"
    className="btn btn-primary"
    onClick={filterTeachers}
  >
  ShowTeacher
  </button>
</form>


  
      {/* Teacher List */}
      <div className="teacher-list">
        {filteredTeachers.length > 0 ? (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Subject</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
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
                  <td>
  <div className="d-flex flex-column gap-2">
    <button
      className="btn btn-primary"
      onClick={() => handleEditTeacher(teacher)} // Edit button
    >
      Edit
    </button>

    <button
      className="btn btn-danger"
      onClick={() => handleDeleteTeacher(teacher.id)} // Delete button
    >
      Delete
    </button>
  </div>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center">No teachers found for the selected subject.</p>
        )}
      </div>
      <div className="d-flex justify-content-center align-items-center">
  <button
    className="btn btn-success mb-3"
    onClick={toggleAddTeacherForm}
  >
    {isAddTeacherFormVisible ? "Close Form" : "Add Teacher"}
  </button>
</div>


      {isAddTeacherFormVisible && (
  <div className="add-teacher mt-4">
    <h5 className="text-center mb-3">{isEditing ? "Edit Teacher" : "Add New Teacher"}</h5>
    <form className="d-flex gap-3 flex-wrap justify-content-center">
      <input
        type="text"
        className="form-control"
        placeholder="ID"
        value={newTeacher.id}
        onChange={(e) =>
          setNewTeacher((prev) => ({ ...prev, id: e.target.value }))
        }
      />
      <input
        type="text"
        className="form-control"
        placeholder="Name"
        value={newTeacher.name}
        onChange={(e) =>
          setNewTeacher((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <SelectDropdown
        label="Subject"
        value={newTeacher.subject}
        options={subjects}
        onChange={(e) =>
          setNewTeacher((prev) => ({ ...prev, subject: e.target.value }))
        }
      />
      <input
        type="text"
        className="form-control"
        placeholder="Phone"
        value={newTeacher.phone}
        onChange={(e) =>
          setNewTeacher((prev) => ({ ...prev, phone: e.target.value }))
        }
      />
      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={newTeacher.email}
        onChange={(e) =>
          setNewTeacher((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      
      {/* Button Container with Flex Column */}
      <div className="d-flex flex-column gap-3">
        <button
          type="submit"
          className={`btn ${isEditing ? "btn-warning" : "btn-primary"}`}
          onClick={handleAddTeacher}
        >
          {isEditing ? "Save Changes" : "Add Teacher"}
        </button>
      </div>
    </form>
  </div>
)}

      
    </div>
  );
}

export default Teachers;
