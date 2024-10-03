import DashSidebar from "../../DashComponents/DashSideBar/DashSidebar";
import "./DashHome.css"
const DashHome = () => {
  return (
    <div className="dashHome d-flex">
      <DashSidebar/>
      <div className="dashboard p-3 m-auto">dashboard</div>
    </div>
  )
}

export default DashHome