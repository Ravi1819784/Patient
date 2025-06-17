import React from 'react'
import Sidebar from './Sidebar'
import "./Opdpatientlist.css"
import {Link} from "react-router-dom"
import Table from 'react-bootstrap/Table';
import { RiFilterLine } from "react-icons/ri";
const Opdpatientlist = ({listItem}) => {
  return (
  <>
  
  <div className="main-opdList">
    <Sidebar/>
    <div className="right-list">
    <div className="right-list-nav">

        <div className="filter"><h2>filter</h2> <RiFilterLine />
</div>
 <h2 style={{color:"rgba(12,12,12)",letterSpacing:"4px"}}>O P D</h2>
      
        <div className="search-listbar"> <div className="search-list"><input type="search" /></div>
    <button className='search-btn'>search</button>
        </div>
        
    </div>
    <div className="list-form"> <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Dob</th>
          <th>Date</th>
            <th>Gender</th>
              <th>Patient View</th>
        </tr>
      </thead>
      <tbody>

        {listItem.map((item)=><>{    <tr>
          <td>{item.name}</td>
          <td>{item.Age}</td>
          <td>{item.dob}</td>
          <td>{item.date}</td>
           <td>{item.male} {item.female}</td>   
            <Link to="/op-patient-view"> <td><button className='btn-view'>View</button></td></Link>
        </tr>}</>)}
    
  
         
      </tbody>
    </Table></div>
    </div>

    </div>
      

  </>
  )
}

export default Opdpatientlist
