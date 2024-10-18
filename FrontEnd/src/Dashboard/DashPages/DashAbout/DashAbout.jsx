import AddAboutSchool from "../../DashComponents/AboutDash/AboutAdd";
import AddLocation from "../../DashComponents/AboutDash/AboutLocation";
import AddHistory from "../../DashComponents/AboutDash/AddHist";
import "./DashAbout.css";

function DashAbout() {
  return (
    <div className="dashAbout w-100">
      <div className="abouttitle fw-bold text-center px-4 py-2 mb-2">About Dashboard</div>
      <div className="aboutcards">
        <AddAboutSchool />
        <AddLocation />
        <AddHistory />
      </div>
    </div>
  );
}

export default DashAbout;
