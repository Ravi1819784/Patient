import React, { useState } from 'react'
import "./Doctorstatus.css"
import Sidebar from './Sidebar'
const Doctorstatus = ({listItem,patientview}) => {

    // const [status,setStatus]=useState("")
    
    // const [tillavailable,setTillavailbale]=useState("")
  return (
 <>
 <div className="main-doctor-status">

    <Sidebar/>
    <div className="departments-container">
      <main className="departments-main">
        <h2>Departments - Name</h2>
        <table className="doctor-table">
          <thead>
            <tr>
              <th>Doctors</th>
              <th>Status</th>
              <th>Available till</th>
            </tr>
          </thead>
          <tbody>
            {patientview.map((pw, index) => (
              <tr key={index} className="doctor-row">
                <td>{pw.doctor}</td>
                <td>
                  <span
                    className={`status-dot ${
                      pw.status === 'green' ? 'green' : 'red'
                    }`}
                  ></span>
                </td>
                <td>{pw.availableTill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>

 </div>
 
 </>
  )
}

export default Doctorstatus
