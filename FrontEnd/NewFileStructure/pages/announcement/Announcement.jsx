import { useState, useEffect } from "react";
import Header from "../../layout/NavBar/Header";
import Footer from "../../layout/Footer/Footer";
import "./announcement.css";
import axios from "axios";

const Announcement = () => {
  const [thisWeek, setThisWeek] = useState([]);
  const [earlierThisYear, setEarlierThisYear] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "https://school-backend-eight.vercel.app/api/v1/announcements"
        );
        const announcements = response.data.data || []; 

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - 7);

        const thisWeekAnnouncements = [];
        const earlierThisYearAnnouncements = [];

        announcements.forEach((announcement) => {
          const announcementDate = new Date(announcement.date);
          announcementDate.setHours(0, 0, 0, 0);

          if (announcementDate >= startOfWeek && announcementDate <= today) {
            thisWeekAnnouncements.push(announcement);
          } else {
            earlierThisYearAnnouncements.push(announcement);
          }
        });

        setThisWeek(thisWeekAnnouncements);
        setEarlierThisYear(earlierThisYearAnnouncements);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching announcements:", err);
        setError("Failed to fetch announcements. Please try again later.");
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  if (loading) {
    return (
      <div>
        <Header />
        <div className="announcement">
          <h2 className="announcementTitle">Loading announcements...</h2>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="announcement">
          <h2 className="announcementTitle">{error}</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="announcement">
        <h2 className="announcementTitle">Announcements Feed:</h2>

        {/* Render This Week announcements */}
        {thisWeek.length > 0 && (
          <>
            <h4>This Week</h4>
            <div className="announcement-cards">
              {thisWeek.map((announcement) => (
                <div key={announcement._id} className="announcement-card">
                  <h5>{announcement.title}</h5>
                  <p>{announcement.description}</p>
                  <p>
                    <strong>Date:</strong> {announcement.date}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Render Earlier This Year announcements */}
        {earlierThisYear.length > 0 && (
          <>
            <h4>Earlier This Year</h4>
            <div className="announcement-cards">
              {earlierThisYear.map((announcement) => (
                <div key={announcement._id} className="announcement-card">
                  <h5>{announcement.title}</h5>
                  <p>{announcement.description}</p>
                  <p>
                    <strong>Date:</strong> {announcement.date}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Message if no announcements */}
        {thisWeek.length === 0 && earlierThisYear.length === 0 && (
          <p>No announcements available.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Announcement;
