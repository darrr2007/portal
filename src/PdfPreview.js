

import React from "react";
import "./PdfPreview.css";
import logo from "./nfo logo.svg";
import bg from "./bg.svg";

import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";


import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '../node_modules/@react-pdf-viewer/core/lib/styles/index.css';

import "@react-pdf-viewer/default-layout/lib/styles/index.css";

function PdfPreview() {
  const [pdfFile, setPDFFile] = useState(null);
  const [viewPdf, setViewPdf] = useState(null);

  const fileType = ["application/pdf"];
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile) {
        if (selectedFile && fileType.includes(selectedFile.type)) {
          let reader = new FileReader();
          reader.readAsDataURL(selectedFile);
          reader.onload = (e) => {
            setPDFFile(e.target.result);
          };
        } else {
          setPDFFile(null);
        }
      } else {
        console.log("please select");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };
  return (

	<div className="body" onContextMenu={(e) =>e.preventDefault()}>

	<div className="header" onContextMenu={(e) =>e.preventDefault()} >
		<img src={logo} alt="logo" className="logo"></img>
		<b className="back">&larr; Back to Portal</b>
		<img src={bg} alt="bg" className="bg"></img>
		

		</div>
	

    <div className="container" onContextMenu={(e) =>e.preventDefault()}>
      <form onSubmit={handleSubmit}>
        <input type="file" className="form-control" onChange={handleChange} />
        <button
          type="submit"
          className="btn btn-success"
          onChange={handleSubmit} 

        >
          View PDF
        </button>
      </form>


	  

      
      <div className="pdf-container" onContextMenu={(e) =>e.preventDefault()}>
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.16.105/build/pdf.worker.min.js">
          {viewPdf && (
            <>
              {" "}
              <Viewer fileUrl={viewPdf} plugins={[]} />
            </>
          )}
          {!viewPdf && <>No PDF</>}
        </Worker>
      </div>
    </div>
	</div>
  );
}

export default PdfPreview;
