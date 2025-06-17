import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>

    {/* navbar */}

      <div className="navbar">
        <div className="nav">
          <div className="left"> <Link to="/"style={{textDecoration:"none"}}><h1 >Health CR</h1></Link></div>
           <div className="right"> <Link to="/login"style={{textDecoration:"none"}}><h1 >Login</h1></Link></div>
        </div>
      </div>


    </>
  );
};

export default Nav;
