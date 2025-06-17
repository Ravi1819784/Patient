import React, { useState,useEffect } from "react";
import "./Registraion.css";
import Sidebar from "./Sidebar";
const Registration = ({registerlist}) => {


    // const [register, setRegister] = useState([]);
const[name,setName]=useState("")
const[date,setDate]=useState("")
const[Age,setAge]=useState("")
const[bg,setBg]=useState("")
const[address,setAddress]=useState("")
const[phone,setPhone]=useState("")
const[dob,setDob]=useState("")
const[Department,setDepartment]=useState("")
const[male,setMale]=useState(false)
const[female,setFemale]=useState(false)
// const[author,setAuthor]=useState(false)




  // const registerbtn = async () => {
  //   let result = await fetch("http://localhost:5400/register-op", {
  //     method: "post",
  //     body: JSON.stringify({ name, date, Age, bg,address,phone,dob,Department,male,female,author }),
  //     headers: { "content-type": "application/json" },
  //   });
  //   result = await result.json();
  // };

  //   const getRegister = async () => {
  //   let result = await fetch("http://localhost:5400/register-opd");
  //   result = await result.json();
  //   setRegister(result);
  // };

  // useEffect(() => {
  //   getRegister();
  // });



// form submit without api





  return (
    <>
      <div className="main-opd-registration">
        <Sidebar />
        <div className="right-opd-registration">
          <div className="head-register">
            <div className="main-head-register">
              <div className="left-register">
                <h3>OP - Register a patient</h3>
              </div>
              <div className="right-register">
                <p>ID: #123</p>
              </div>
            </div>
          </div>



          <form >
            <div className="name-date">
              <div className="name">
                <label htmlFor="Name" style={{ marginLeft: "11px" }}>
                  Name
                </label>
                <br />
                <br />
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
              </div>
              <div className="date">
                {" "}
                <label htmlFor="Date" style={{ marginLeft: "11px" }}>
                  Date
                </label>
                <br />
                <br />
                <input type="date" onChange={(e)=>setDate(e.target.value)} value={date} />
              </div>
            </div>

            <div className="age-gender-bg">
              {" "}
              <div className="age">
                <label htmlFor="Age" style={{ marginLeft: "11px" }}>
                  Age
                </label>
                <br />
                <br />
                <input type="text" onChange={(e)=>setAge(e.target.value)} value={Age} />
              </div>
              <div className="gender">
                <label htmlFor="Gender">Gender</label>

                
                <br />
                <br />
                <span>    <label htmlFor="Male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value={"Male"}
                  style={{ marginLeft: "5px" ,marginTop:"2px"}} 
                   onChange={(e)=>setMale(e.target.value)} 
                />{" "}</span>
            
               <span>
                  <label htmlFor="Female">Female </label>
                  <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    style={{ marginLeft: "5px",marginTop:"2px" }} onChange={(e)=>setFemale(e.target.value)} 
                  />{" "}
                </span>


                {/* <span> <label htmlFor="Author">Author</label>
                <input
                  type="radio"
                  name="gender"
                  value={"author"}
                  style={{ marginLeft: "5px" ,marginTop:"2px"}} onChange={(e)=>setAuthor(e.target.value)} 
                /></span>  */}
               
              </div>
              <div className="blood-group">
                <label htmlFor="Blood group">Blood group</label>
                <br />
                <br />
                <input type="text"onChange={(e)=>setBg(e.target.value)} value={bg} />
              </div>
            </div>

            <label htmlFor="House address">House address</label>
            <input
              type="text"
              placeholder="name,house,city,..."
              className="hs" onChange={(e)=>setAddress(e.target.value)} value={address}
            />

            <div className="phone-dob">
              <label htmlFor="Phone">Phone</label>
              <input type="text" onChange={(e)=>setPhone(e.target.value)} value={phone}/>

              <label htmlFor="Date of Birth">Date of Birth</label>
              <input type="date"onChange={(e)=>setDob(e.target.value)} value={dob} />
            </div>

            <div className="dpt-reg">
              {" "}
              <label htmlFor="Department">Department</label>
              <input type="text" onChange={(e)=>setDepartment(e.target.value)} value={Department}/>
              {/* <button className="reg-btn" onClick={registerbtn}>Register</button> */}
              <button className="reg-btn" onClick={()=>{registerlist(name,Age,dob,date,bg,phone,address,male,female,Department)}}>Register</button>
              {/* <button className="reg-btn" type="submit">Register</button> */}
            </div>
          </form>
        </div>
      </div>


      

    </>
  );
};

export default Registration;
