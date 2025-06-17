import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./Components/Nav";
import Login from "./Components/Login";
import Healthcare from "./Components/Healthcare";
import Registration from "./Components/Registration";
import REgisteripd from "./Components/REgisteripd";
import Opdpatientlist from "./Components/Opdpatientlist";
import Ipdlist from "./Components/Ipdlist";
import OPpatientview from "./Components/OPpatientview";
import IPpatientview from "./Components/IPpatientview";
import OPfinaldraft from "./Components/OPfinaldraft";
import Consultant from "./Components/Consultant";
import Doctorstatus from "./Components/Doctorstatus";
const App = () => {

  const [ap1,setAp1]=useState([])

// api


 const click = async (name, date, Age, bg,address,phone,dob,Department,male,female ) => {
    const result = await fetch("http://localhost:5800/reg", {
      method: "post",
      body: JSON.stringify({ name, date, Age, bg,address,phone,dob,Department,male,female }),
      headers: { "content-type": "application/json" },
    });
     const data = await result.json();
    console.log(data)
    alert("you are registered")
  };

    const getRegister = async () => {
    let result = await fetch("http://localhost:5800/regs");
    result = await result.json();
    setAp1(result);
        console.log(result)

  };

  useEffect(() => {
    getRegister();
  },[]);




// 











  // opd

  const [listItem, setListItem] = useState([]);
  const [listItemIpd, setListItemIpd] = useState([]);
  const[patientview,setPatientView]=useState([])

//   const[users,setUsers]=useState([])

//   function handleapi(click){
//     if(users){
// const user1=([...users,{click}])

// setUsers(user1)

// localStorage.getItem("api1",JSON.stringify(user1))
//     }

//   }

//   useEffect(() => {
//     const ap = JSON.parse(localStorage.getItem("api1"));

//     if (ap) {
//       setUsers(ap);
//     }
//   }, []);

  



  function registerlist(
    name,
    Age,
    dob,
    date,
    bg,
    phone,
    address,
    male,female,
    Department
  ) {
    if (listItem) {
      const patient1 = [
        ...listItem,
        { name, Age, dob, date, bg, phone, address, male,female, Department },
      ];

      setListItem(patient1);
      localStorage.setItem("pt", JSON.stringify(patient1));
    }
  }

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem("pt"));

    if (a) {
      setListItem(a);
    }
  }, []);


  // patientview

  function bookClick(department,doctor,dateTime){
    if(patientview){

      const patientviewop=[...patientview,(department,doctor,dateTime)];

      setPatientView(patientviewop)
      localStorage.setItem("ptw",JSON.stringify(patientviewop))
    }
  }

    useEffect(() => {
    const c = JSON.parse(localStorage.getItem("ptw"));

    if (c) {
      setPatientView(c);
    }
  }, []);


  // ipd

  // function registerlistipd(
  //   name,
  //   Age,
  //   dob,
  //   date,
  //   bg,
  //   phone,
  //   address,
  //   male,
  //   female,
  //   author,
  //   Department
  // ) {
  //   if (listItemIpd) {
  //     const patient2 = [
  //       ...listItemIpd,
  //       {
  //         name,
  //         Age,
  //         dob,
  //         date,
  //         bg,
  //         phone,
  //         address,
  //         male,
  //         female,
  //         author,
  //         Department,
  //       },
  //     ];

  //     setListItemIpd(patient2);
  //     localStorage.setItem("ptt2", JSON.stringify(patient2));
  //   }
  // }

  // useEffect(() => {
  //   const b = JSON.parse(localStorage.getItem("ptt2"));

  //   if (b) {
  //     setListItemIpd(b);
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Healthcare />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/registration"
            element={<Registration registerlist={registerlist} />}
          />
          <Route
            path="/registration-ipd"
            element={<REgisteripd click={click}/>}
          />
          <Route
            path="/patientlist-opd"
            element={<Opdpatientlist listItem={listItem} />}
          />
          <Route
            path="/patientlist-ipd"
            element={<Ipdlist ap1={ap1} />}
          />
          <Route
            path="/op-patient-view"
            element={<OPpatientview listItem={listItem}  bookClick={bookClick} />}
          />
          <Route path="/ip-patient-view" element={<IPpatientview />} />
          <Route
            path="/booknow"
            element={<OPfinaldraft listItem={listItem} patientview={patientview} />}
          />
          <Route
            path="/consultant"
            element={<Consultant listItem={listItem} patientview={patientview} />}
          />
          <Route
            path="/status"
            element={<Doctorstatus listItem={listItem} patientview={patientview}/>}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
