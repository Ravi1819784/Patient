import React from 'react'
import "./Sidebar.css"
import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
  <>
   <div className="left-health">
          <h2>Manager</h2>
         
            {" "}
            <div className="lines"></div>
          

          <div className="opd">
            <h1>OPD</h1>

            <div className="list">
              <ul>
                     <Link to="/registration" style={{  color: "rgb(20, 20, 20)",textDecoration:"none"}}>  <li>Register patients</li></Link>
              
         <Link to="/patientlist-opd" style={{  color: "rgb(20, 20, 20)",textDecoration:"none"}}>  <li>patients list</li></Link>
              
              </ul>
            </div>
          </div>

          <div className="opd">
            <h1>IPD</h1>

            <div className="list">
              <ul>
            <Link to="/registration-ipd" style={{  color: "rgb(20, 20, 20)",textDecoration:"none"}}>  <li>Register patients</li></Link>
                <Link to="/patientlist-ipd" style={{  color: "rgb(20, 20, 20)",textDecoration:"none"}}>  <li>patients list</li></Link>
              </ul>
            </div>
          </div>

          <div className="medicine">
            <h2>Medicine</h2>
          </div>
        
            {" "}
            <div className="lines"></div>

          <div className="listall">
            <h4>List all</h4>
          </div>
        </div>
  </>
  )
}

export default Sidebar
