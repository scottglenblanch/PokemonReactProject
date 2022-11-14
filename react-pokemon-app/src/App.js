import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//-------------------------------------

import Tcode from './sections/TrC-Mt/Tsection';
import Jcode from './sections/hjake07/Jsection';
import Wcode from './sections/Walls101/Wsection';

import PAGES from './Pages/Pages'

export default function App(){
    return(
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<PAGES.Page1 />} />
                <Route path="/game" element={<PAGES.Page2 />} />
                <Route path="/choose-type" element={<PAGES.Page3 />} />
                <Route path="/hidden-tests" element={<TestPage/>} />
                <Route path="*" element={<ErrorPage/>} />
            </Routes>
        </Router>
    )
}

function TestPage(){
    return (
        <>
            <Tcode></Tcode>
            <h1>SEPARATION    - T^ Jv</h1>
            <Jcode></Jcode>
            <h1>SEPARATION -   J^ Wv </h1>
            <Wcode></Wcode>
        </>
    )
}
function ErrorPage(){
    return(
        <>
            <h1>Error: 404 page not found</h1>
            <Link to="/">Home</Link>
        </>
    )
}
function Navbar(){
    return(
        <>
            <nav>
                <Link to='/'>Page 1</Link>
                <Link to='/game'>Page 2</Link>
                <Link to='/choose-type'>Page 3</Link>
            </nav>
        </>
    )
}