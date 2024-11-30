import "./profileScores.css";
import { isBefore, isToday, isAfter } from 'date-fns';

const ProfileScores = () => {
  const today = new Date();

  const exams = [
    { date: new Date('2024-09-30'),type :'total', subject: ' Science', score: '0',finalGrade:'100' },
    { date: new Date('2024-10-05'),type :'final', subject: ' Math', score: '0',finalGrade:'60' },
    { date: new Date('2024-10-10'),type :'midterm', subject: ' Arabic', score: '0',finalGrade:'10' },
  ];

  // Sort exams array by date (ascending order)
  exams.sort((a, b) => a.date - b.date);

  // Function to determine background color based on the date
  const getBackgroundColor = (eventDate) => {
    if (isBefore(eventDate, today)) {
      return 'white'; // Past date
    } else if (isToday(eventDate)) {
      return 'white'; // Today
    } else if (isAfter(eventDate, today)) {
      return '#179cb1'; // Future date
    }
  };

  return (
    <div className="d-flex flex-wrap flex-column text-capitalize ProfileScheduleSection container mt-3">
      <h3 className="text-center">Student Grades</h3>
      {exams.map((exam, index) => (
        <div
          key={index}
          className="gradeSection border border-secondary rounded-2 d-flex flex-column mx-auto my-2"
          style={{ backgroundColor: getBackgroundColor(exam.date) }}
        >
          <div className="fw-semibold text-secondary">{exam.date.toDateString()}</div>
          <div className="grades d-flex fw-bold">
            <div className="p-1">{exam.type} in {exam.subject}</div>
            <div className="p-1">{exam.score }/{exam.finalGrade}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileScores;
