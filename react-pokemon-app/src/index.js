import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './Tests/reportWebVitals';
import './sections/hjake07/Jstyles.css';
import { WelcomePage } from './sections/hjake07/Jsection';
// import { TheRouter, Navbar } from './sections/hjake07/Jsection';
//-------------------------------------

// Remember to rename your section here
import Tcode from './sections/TrC-Mt/Tsection';
import Jcode from './sections/hjake07/Jsection';
import Wcode from './sections/Walls101/Wsection';

//----------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Remember to rename your section here */}
    <Tcode></Tcode>
    <h1>SEPARATION    - T^ Jv</h1>
    <WelcomePage/><Jcode />
    <h1>SEPARATION -   J^ Wv </h1>
    <Wcode></Wcode>
 </React.StrictMode>
);

//-----------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
