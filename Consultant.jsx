import React from 'react'
import Sidebar from './Sidebar'
import "./Consultant.css"
import{Link} from "react-router-dom"
const Consultant = ({listItem,patientview}) => {
  return (
    <>
    <div className="main-consultant">

        <Sidebar/>
<div className="dashboard-container">
 
      <div className="dashboard-main">
        <h2>Caty (name of Consultant)</h2>
        <div className="summary-section">
          <div className="summary-card">
            <p><strong>Patients</strong></p>
            <p>Non finished : 15</p>
            <p>Finished : 35</p>
            <p>Today's all : 50</p>
          </div>
          <div className="summary-card">
            <p><strong>Nurse</strong></p>
            <p>Morning : 9:00 - 12:30</p>
            <p>After Noon : 2:00 - 5:00</p>
            <p>Evening : 6:30 - 8:00</p>
          </div>
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Phone</th>
              <th>Date and Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {listItem.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.Age}</td>
                <td>{item.phone}</td>

                {patientview.map((pw)=><>    <td>{pw.dateTime}</td></>)}
                <td><div className="btn-status"> <Link to="/status"><div className="doctor-status-btn"><button>Status</button></div></Link></div></td>
             
              </tr>
            ))}
          </tbody>
        </table>

       
      </div>


      
    </div>


    </div>
    </>
  )
}

export default Consultant
