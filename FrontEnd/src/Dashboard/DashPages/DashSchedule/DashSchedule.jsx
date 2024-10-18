import  { useState } from "react";
import './DashSchedule.css'
const DashSchedule = () => {
  const [level, setLevel] = useState("");
  const [gradeOptions, setGradeOptions] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null); // State to track which entry is being edited


  const [formData, setFormData] = useState({
    level: "",
    grade: "",
    timeSlot: "",
    subject: "",
    day: "",
  });

  const subjects = [
    "Math",
    "Physics",
    "Chemistry",
    "History",
    "Biology",
    "English",
    "PE",
    "Art",
  ];

  const timeSlots = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 01:00",
    "01:00 - 02:00",
  ];

  // Handle Level Selection and Set Appropriate Grades
  const handleLevelChange = (e) => {
    const selectedLevel = e.target.value;
    setLevel(selectedLevel);
    let grades = [];

    if (selectedLevel === "Kindergarten") {
      grades = ["Grade 1", "Grade 2"];
    } else if (selectedLevel === "Primary") {
      grades = ["Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5", "Grade 6"];
    } else if (selectedLevel === "Preparatory" || selectedLevel === "Secondary") {
      grades = ["Grade 1", "Grade 2", "Grade 3"];
    }

    setGradeOptions(grades);
    setFormData({ ...formData, level: selectedLevel, grade: "" }); // Reset grade too
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

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
      <h3 className="text-center">Manage Schedules</h3>

      <form onSubmit={handleSubmit} className="schedule-form">
        <div className="form-row">
          {/* Level Selection */}
          <select
            name="level"
            className="form-control"
            value={level}
            onChange={handleLevelChange}
            required
          >
            <option value="">Select Level</option>
            <option value="Kindergarten">Kindergarten</option>
            <option value="Primary">Primary</option>
            <option value="Preparatory">Preparatory</option>
            <option value="Secondary">Secondary</option>
          </select>

          {/* Grade Selection */}
          <select
            name="grade"
            className="form-control"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade</option>
            {gradeOptions.map((grade, index) => (
              <option key={index} value={grade}>
                {grade}
              </option>
            ))}
          </select>

          {/* Day Selection */}
          <select
            name="day"
            className="form-control"
            value={formData.day}
            onChange={handleChange}
            required
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
          </select>

          {/* Time Slot Selection */}
          <select
            name="timeSlot"
            className="form-control"
            value={formData.timeSlot}
            onChange={handleChange}
            required
          >
            <option value="">Select Time Slot</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>

          {/* Subject Selection */}
          <select
            name="subject"
            className="form-control"
            value={formData.subject}
            onChange={handleChange}
            required
          >
            <option value="">Select Subject</option>
            {subjects.map((subject, index) => (
              <option key={index} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Add Schedule
        </button>
      </form>

      <h5 className="text-center">Existing Schedules</h5>
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
            <button className="scheduleedit-btn m-auto " 
              onClick={() => handleEdit(index)}
            >Edit</button>
            <button className="scheduledelete-btn m-auto "
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
