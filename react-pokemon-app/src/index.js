import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './Tests/reportWebVitals';
<<<<<<< HEAD
import './sections/hjake07/Jstyles.css';
import { WelcomePage } from './sections/hjake07/Jsection';
// import { TheRouter, Navbar } from './sections/hjake07/Jsection';
//-------------------------------------
=======
import App from './App'

>>>>>>> combine


//----------------------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* Remember to rename your section here */}
    <Tcode></Tcode>
    <h1>SEPARATION    - T^ Jv</h1>
    <WelcomePage/><Jcode />
    <h1>SEPARATION -   J^ Wv </h1>
    <Wcode></Wcode>
=======
    <App></App>
>>>>>>> combine
 </React.StrictMode>
);

//-----------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();