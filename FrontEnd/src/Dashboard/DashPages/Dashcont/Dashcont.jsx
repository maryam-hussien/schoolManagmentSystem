
import './DashCont.css';
import { Person, PersonAdd, People, CurrencyDollar } from 'react-bootstrap-icons';
import AttendanceChart from '../../DashComponents/AboutDash/Attendance'; 

const Dashcont = () => {
    
    const attendanceData = [
        { day: 'Mon', present: 75, absent: 25 },
        { day: 'Tue', present: 50, absent: 50 },
        { day: 'Wed', present: 55, absent: 45 },
        { day: 'Thu', present: 70, absent: 30 },
        { day: 'Fri', present: 60, absent: 40 },
    ];

    return (
        <div className="dashboard-container">
            <h1 style={{ fontSize: "25px", marginBottom: "30px" }}>Dashboard</h1>
            <div className="stat-cards">
                <div className="stat-card student-card" style={{ backgroundColor: "#A2D2DF" }}>
                    <div className="icon-container student-icon-bg d-flex align-items-center">
                        <People className="stat-icon" style={{ fontSize: '55px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '2px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Number of Students</div>
                        <div className="stat-number">2468</div>
                    </div>
                </div>
                <div className="stat-card teacher-card" style={{ backgroundColor: "#E7CCCC" }}>
                    <div className="icon-container teacher-icon-bg d-flex align-items-center">
                        <PersonAdd className="stat-icon" style={{ fontSize: '55px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '2px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Number of Teachers</div>
                        <div className="stat-number">245</div>
                    </div>
                </div>
                <div className="stat-card employee-card" style={{ backgroundColor: "rgb(223, 197, 212)" }}>
                    <div className="icon-container employee-icon-bg d-flex align-items-center">
                        <Person className="stat-icon" style={{ fontSize: '55px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '2px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Number of Employees</div>
                        <div className="stat-number">508</div>
                    </div>
                </div>
                <div className="stat-card revenue-card" style={{ backgroundColor: "#D9EDBF" }}>
                    <div className="icon-container revenue-icon-bg d-flex align-items-center">
                        <CurrencyDollar className="stat-icon" style={{ fontSize: '50px', color: 'black' }} />
                        <div className="stat-dash" style={{ width: '1px', height: '70px', backgroundColor: 'black', margin: '0 10px' }}></div>
                    </div>
                    <div className="stat-content">
                        <div className="stat-label">Total Revenue</div>
                        <div className="stat-number">$2,32,468</div>
                    </div>
                </div>
            </div>

            <div className="main-dashboard">
                <div className="chart-section">
                    <div className="chart-card">
                        <h4>Students</h4>
                        <div className="circular-chart-container">
                            <div className="circular-chart"></div>
                        </div>
                        <div className="chart-legend">
                            <span className='boy'>Boys: 205</span>
                            <span className='girl'>Girls: 170</span>
                        </div>
                    </div>

                    <div className="table-card">
                        <div className='teach' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>Teacher List</h4>
                            <PersonAdd style={{ fontSize: '25px', color: 'black' }} />
                        </div>
                        <div className="table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Class</th>
                                        <th>Subject</th>
                                        <th>Email</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Morris Johnson</td>
                                        <td>Class 6</td>
                                        <td>English</td>
                                        <td>morrisjohnson@gmail.com</td>
                                        <td>...</td>
                                    </tr>
                                    <tr>
                                        <td>Jane Cooper</td>
                                        <td>Class 5</td>
                                        <td>Music</td>
                                        <td>janecooper@gmail.com</td>
                                        <td>...</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='att'>
                <h1 style={{ textAlign: "left", marginBottom: "10px", marginLeft: '10px', fontSize: '24px', marginTop: '10px' }}>Attendance</h1>
                <AttendanceChart attendanceData={attendanceData} />
            </div>
        </div>
    );
};

export default Dashcont;
