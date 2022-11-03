import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
//-------------------------------------

//Remember to rename your section here
import Tcode from './TrC-Mt/Tsection';
import Jcode from './hjake07/Jsection';
import Wcode from './Walls101/Wsection';

//----------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Remember to rename your section here */}
    <Tcode></Tcode>
    <Jcode></Jcode>
    <Wcode></Wcode>
  </React.StrictMode>
);

//-----------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
