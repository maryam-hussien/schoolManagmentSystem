import { useState } from "react";
import './DashSchedule.css';
import Level from '../../DashComponents/selectedLevel/Level'; // Import the new component

const DashSchedule = () => {
  const [level, setLevel] = useState("");
  const [schedule, setSchedule] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // State to track which entry is being edited
  const [formData, setFormData] = useState({
    level: "",
    grade: "",
    timeSlot: "",
    subject: "",
    day: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (editingIndex !== null) {
      // Update the existing schedule entry
      setSchedule((prevSchedules) => {
        const updatedSchedules = [...prevSchedules];
        updatedSchedules[editingIndex] = formData; // Update the specific entry
        return updatedSchedules;
      });
      setEditingIndex(null); // Reset editing index
    } else {
      // Add new schedule
      setSchedule((prevSchedules) => [...prevSchedules, formData]);
    }
  
    // Reset the form fields
    setFormData({
      level: "",
      grade: "",
      timeSlot: "",
      subject: "",
      day: "",
    });
    setLevel(""); // Reset level as well
  };

  const handleEdit = (index) => {
    const entryToEdit = schedule[index];
    setFormData(entryToEdit);
    setEditingIndex(index); // Set the index of the entry being edited
  };

  const handleDelete = (index) => {
    setSchedule((prevSchedules) => prevSchedules.filter((_, i) => i !== index));
  };

  return (
    <div className="manage-schedules">
      <h3 className="text-start mb-4">Manage Schedules</h3>

      <Level 
        level={level} 
        setLevel={setLevel} 
        formData={formData} 
        setFormData={setFormData} 
        handleSubmit={handleSubmit} 
        buttonLabel={editingIndex !== null ? "Update Schedule" : "Add Schedule"} // Dynamic button label
        showGrade={true} // Pass true/false to show/hide specific selectors
        showDay={true}
        showTimeSlot={true}
        showSubject={true}
      />

      <h5 className="text-center mt-4 mb-2">Existing Schedules</h5>
      {/* Display added schedules */}
      <table className="table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Grade</th>
            <th>Day</th>
            <th>Time Slot</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {schedule.length > 0 ? (
            schedule.map((entry, index) => (
              <tr key={index}>
                <td data-label="Level">{entry.level}</td>
                <td data-label="Grade">{entry.grade}</td>
                <td data-label="Day">{entry.day}</td>
                <td data-label="Time Slot">{entry.timeSlot}</td>
                <td data-label="Subject">{entry.subject}</td>
                <td data-label="Actions">
                  <div className="schedulebtns">
                    <button className="scheduleedit-btn m-auto" 
                      onClick={() => handleEdit(index)}
                    >Edit</button>
                    <button className="scheduledelete-btn m-auto"
                      onClick={() => handleDelete(index)}
                    >Delete</button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No schedules added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DashSchedule;
