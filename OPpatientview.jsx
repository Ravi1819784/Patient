import React, { useState } from "react";
import "./OPpatientview.css";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const OPpatientview = ({listItem,bookClick}) => {


  const [department,setdepartment]=useState("")
    const [doctor,setDoctor]=useState("")
      const [dateTime,setdateTime]=useState("")


      
     
  return (
    <>
      <div className="main-op-patient-view">
        <Sidebar />
        <div className="op-container">
          <h2>OP Patient view</h2>

          <div className="op-details">
            {listItem.map((item) => (
              <>
                {" "}
                <div className="label-group">
                  <p>
                    <strong>Name</strong> :
                  </p>
                  <p>{item.name}</p>
                </div>
                <div className="label-group">
                  <p>
                    <strong>Age</strong> :
                  </p>
                  <p>{item.Age}</p>
                </div>
                <div className="label-group">
                  <p>
                    <strong>Address</strong> :
                  </p>
                  <p>{item.address}</p>
                </div>
                <div className="label-group">
                  <p>
                    <strong>Gender</strong> :
                  </p>
                  <p>{item.male}</p>
                              <p>{item.female}</p>
                </div>

                <div className="label-group">
                  <p>
                    <strong>Blood group</strong> :
                  </p>
                  <p>{item.bg}</p>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>
                      <strong>Department</strong>
                    </label>
                    <input type="text" placeholder="Department-name" value={department} onChange={(e)=>setdepartment(e.target.value)} />
                  </div>
                  <div className="form-group">
                    <label>
                      <center>Doctor</center>
                    </label>
                    <input type="text" placeholder="Doctor" value={doctor} onChange={(e)=>setDoctor(e.target.value)} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Date and Time</label>
                  <input type="datetime-local" value={dateTime} onChange={(e)=>setdateTime(e.target.value)} />
                </div>
                <div className="btn-row">
                  <button className="history-btn">History</button>
                  <Link to="/booknow"><button className="book-btn" onClick={()=>{bookClick(department,doctor,dateTime)}}>Book Now</button></Link>
        
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OPpatientview;
