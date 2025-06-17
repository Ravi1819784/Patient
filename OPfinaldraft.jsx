import React from 'react'
import "./OPfinaldraft.css"
import {Link} from "react-router-dom"
import Sidebar from './Sidebar'
const OPfinaldraft = ({listItem,patientview}) => {
  return (
    <> 
    <div className="main-op-draft">

<Sidebar/>
     <div className="op-container">
          <h2>OP - Final draft to Consultant</h2>

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
                    <strong>Gender</strong> :
                  </p>
                  <p>{item.male}</p>
                </div>
                <div className="label-group">
                  <p>
                    <strong>Blood group</strong> :
                  </p>
                  <p>{item.bg}</p>
                </div>
                <div className="label-group">
                  <p>
                    <strong>Date of Birth</strong> :
                  </p>
                  <p>{item.dob}</p>
                </div>

                 <div className="label-group">
                  <p>
                    <strong>Phone</strong> :
                  </p>
                  <p>{item.phone}</p>
                </div>

 <div className="label-group">
                  <p>
                    <strong>Date of Birth</strong> :
                  </p>
                  <p>{item.dob}</p>
                </div>

{patientview.map((pw)=><><div className="label-group">
                  <p>
                    <strong>Department</strong> :
                  </p>
                  <p>{pw.department}</p>
                </div>

                 <div className="label-group">
                  <p>
                    <strong>Date and Time</strong> :
                  </p>
                  <p>{pw.dateTime}</p>
                </div> </>)}
                 

 <div className="label-group">
                  <p>
                    <strong>Consultant</strong> :
                  </p>
                  <p>{item.consultant}</p>
                </div>


         
                <div className="btn-row">
                  <button className="print-btn">Print</button>
                  <Link to="/consultant">   <button className="sent-btn">Sent</button></Link>
            
        
                </div>
              </>
            ))}
          </div>
        </div>
       
      </div>
    
   </>
  )
}

export default OPfinaldraft
