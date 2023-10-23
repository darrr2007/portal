import React, { useState } from "react";
import {
  Link,
  useNavigate,
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import "./Portal.css";

const Portal = () => {
  const navigate = useNavigate();
  return (
    <div className="portal">
      <b className="all-rights-reserved">
        {" "}
        Streak Tech | All rights reserved | 2023{" "}
      </b>
      <div className="contentwrap">
        <img className="logo-icon" alt="" src="./nfo.svg" />
        <div className="contentwrap1">
          <div className="pagetitle">
            <b className="nfo-content">NFO Content</b>
            <img className="titleline-icon" alt="" src="/titleline.svg" />
          </div>
          <div className="guide-butt">
            <img className="img-icon" alt="" src="./Guide-Img.png" />
            <div className="content">
              <div className="nfo-content">
                6th grade <br /> Guidebook
              </div>
              <button
                className="button"
                onClick={() => {
                  navigate("/pdf-preview");
                }}
              >
                <b className="sml-txt">View</b>
              </button>
            </div>
          </div>
          <div className="guide-butt1">
            <img className="img-icon" alt="" src="./Workbook-img.png" />
            <div className="content">
              <div className="nfo-content">
                6th grade <br /> Workbook
              </div>
              <button className="button">
                <b className="sml-txt">View</b>
              </button>
            </div>
          </div>
          <div className="guide-butt2">
            <img className="img-icon" alt="" src="./advn.png" />
            <div className="content2">
              <div className="nfo-content">6th National Guidebook</div>
              <button className="buy-button">
                <b className="sml-txt1">Buy Guide</b>
              </button>
            </div>
          </div>
          <div className="examinfo">
            <div className="content3">
              <div className="nfo-content">Your exam is scheduled on</div>
              <b className="examdate">
                <p className="am-to-1130am">{`19th November 2023, `}</p>
                <p className="am-to-1130am">10am to 11:30am</p>
              </b>
            </div>
            <button className="buy-button">
              <b className="sml-txt1">Exam Rules</b>
            </button>
          </div>
        </div>
        <div className="studentid-wrap">
          <div className="studentid">
            <b className="name">Sauraj Babu</b>
            <div className="line" />
            <div className="grade">6th Grade</div>
            <div className="line" />
            <div className="grade">
              <p className="am-to-1130am">Bhavans Vidya Mandir </p>
              <p className="am-to-1130am">Nadavarambhu, Irinjalakuda</p>
            </div>
            <div className="line3" />
            <div className="sign-out">Sign Out of NFO</div>
          </div>
          <button className="supportbutton">
            <img className="vector-icon" alt="" src="./phone-icon.png" />
            <b className="support-text">Call Support</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portal;
