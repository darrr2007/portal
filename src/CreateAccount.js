import React from "react";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div className="App">
      <div className="create-account">
        <b className="all-rights-reserved">
          National Finance Olympiad 2023 | All rights reserved{" "}
        </b>
        <div className="form-frame">
          <div className="create-account-wrap">
            <div className="form-wrapper">
              <div className="form-container">
                <b className="create-account-on-container">
                  <p className="on-nfo-portal"> Create account  <br /> on NFO portal</p>
                </b>
                <form>
                  <input
                    className="field"
                    value="Student name"
                    name="Student name"
                    id="name"
                    placeholder="Student Name"
                  />
                  <input
                    className="field"
                    value="Parent name"
                    name="Parent name"
                    id="name"
                    placeholder="Parent Name"
                  />
                  <input
                    className="field"
                    value="School"
                    name="name"
                    id="name"
                    placeholder="School"
                  />
                  <input
                    className="field1"
                    value="Grade"
                    name="name"
                    id="name"
                    placeholder="School"
                  />
                  <b className="your-grade-cannot">
                    *Your grade cannot be changed later
                  </b>
                  <input
                    className="field"
                    value="Email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                  />
                  <input
                    className="field"
                    value="Password"
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                  />
                  {/* <Link  to="/login"> Login</Link>  */}
                  <button className="button">Log In</button>
                </form>
                
                <button className="link-btn">
                  Already have an account? Login here.
                </button>
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

export default CreateAccount;
