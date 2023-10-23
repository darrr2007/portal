import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './index.css';
import App from './App';
import CreateAccount from './CreateAccount';
import Login from './Login';
import Portal from './Portal'
import PdfPreview from './PdfPreview';
import Logout from './Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Portal />}>
    <Route path="/pdf-preview" element={<PdfPreview />} />
    </Route>
    </Routes>
      
      
    </BrowserRouter>
  </React.StrictMode>
);


