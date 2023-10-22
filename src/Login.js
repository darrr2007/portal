import React, { useState } from "react";
import "./Login.css";

const Login = () => {

 
  // State for form data and errors
  const [formData, setFormData] = useState({ number: "", otp: "" });
  const [errors, setErrors] = useState({ number: "", otp: "" });


  
  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};
  

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Validate form fields
    const newErrors = {};

    if (formData.number.length !== 10) {
      newErrors.number = "Mobile number must be 10 digits";
    }


    if (formData.otp.length !== 4) {
      newErrors.otp = "OTP must be 4 digits";
    }


    // Update errors state
    setErrors(newErrors);

    // console.log(Object.keys(newErrors));

    // If no errors, proceed with submission
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      //route to Portal
    }
  };

  return (
    <div className="App">
      <div className="create-account">
        <b className="all-rights-reserved">
          Streak Tech | All rights reserved | 2023{" "}
        </b>
        <div className="form-frame">
          <div className="create-account-wrap">
            <div className="form-wrapper">
              <div className="form-container">
                <b className="create-account-on-container">
                  <p className="on-nfo-portal">Login to <br/> NFO portal</p>
                </b>
                <form onSubmit={handleSubmit}>
                  <input
                    className="field"
                    value={formData.number}
                    placeholder="10 digit Mobile Number"
                    name="number"
                    onChange={handleChange}
                  />
                  <div className="error-message">{errors.number}</div>

                  <input
                    className="field"
                    value={formData.otp}
                    type="password"
                    placeholder="4 Digit OTP"
                    name="otp"
                    onChange={handleChange}
                  />
                  <div className="error-message">{errors.otp}</div>

                  <button className="button" type="submit">Log In</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="logo">
          <img className="nfo-logo-icon" alt="" src="./nfologo@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default Login;
