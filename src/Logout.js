import React from "react";
import "./Logout.css";
import logo from "./nfo big log.svg";
import bg from "./bg.svg";
import bg2 from "./bg2.svg";

function PdfPreview() {
  return (
    <div className="body">
      <div className="header">
        <img src={logo} alt="logo" className="logo"></img>

        <img src={bg} alt="bg" className="bg"></img>
      </div>

<div className="middle">
    <h3>You can only login to <br></br> one device at a time, please <br></br> logout of other devices</h3>
    <button type="submit"
          className="btn">Logout of all devices</button>


<button type="submit"
          className="btn2">Back to Login</button>
          
          
</div>



      <div className="section">
        <p className="rights">All rights reserved |  2023</p>
        <img src={bg2} alt="bg" className="bg2"></img>
      </div>
    </div>
  );
}

export default PdfPreview;
