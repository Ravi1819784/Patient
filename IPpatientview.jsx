import React from 'react'
import Sidebar from './Sidebar'
const IPpatientview = ({ap1}) => {
  return (
   <>
    <div className="main-op-patient-view">
<Sidebar/>
 <div className="op-container">
      <h2>IP Patient view</h2>
      <div className="op-details">

        {ap1.map((item)=><> <div className="label-group">
          <p><strong>Name</strong> :</p>
          <p>{item.name}</p>
        </div>
        <div className="label-group">
          <p><strong>Age</strong> :</p>
          <p>{item.Age}</p>
        </div>
        <div className="label-group">
          <p><strong>Address</strong> :</p>
          <p>{item.address}</p>
        </div>
        <div className="label-group">
          <p><strong>Gender</strong> :</p>
          <p>{item.male} {item.female}</p>
        </div>
        <div className="label-group">
          <p><strong>Blood group</strong> :</p>
          <p>{item.bg}</p>
        </div>


           <div className="label-group">
          <p><strong>Department</strong> :</p>
          <p>{item.Department}</p>
        </div>

        {/* <div className="form-row">
          <div className="form-group">
            <label><strong>Department</strong></label>
            <input type="text" placeholder="Department-name" />
          </div>
          <div className="form-group">
            <label><center>Doctor</center></label>
            <input type="text" placeholder="abc" />
          </div>
        </div>

        <div className="form-group">
          <label>Date and Time</label>
          <input type="datetime-local" />
        </div> */}

        <div className="btn-row">
          <button className="history-btn">History</button>
          <button className="book-btn">Book Now</button>
        </div></>)}
       
      </div>
    </div>
   </div>
   </>
  )
}

export default IPpatientview

