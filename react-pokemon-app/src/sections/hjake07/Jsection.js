import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Jcode(){ //Remember to rename your section here

    return(
    
        <div className='mySection'>
            <table>
                
                    <tbody>
                    <tr>
                   <td><CreateCard pokemonIndex={1} typeToDisplay={null}/></td>
                   <td><CreateCard pokemonIndex={2} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={3} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={4} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={5} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={6} typeToDisplay={null} /></td>
                    </tr>
            
                    <tr>
                        
                    
                    <td><CreateCard pokemonIndex={7} typeToDisplay={null} /></td>
                    <td><CreateCard pokemonIndex={8} typeToDisplay={null} /></td>
                    <td><CreateCard pokemonIndex={9} typeToDisplay={null} /></td>
                    <td><CreateCard pokemonIndex={10} typeToDisplay={null}  /></td>
                    <td><CreateCard pokemonIndex={11} typeToDisplay={null}  /></td>
                    <td><CreateCard pokemonIndex={12} typeToDisplay={null}  /></td>

                    </tr>
                    <tr>
                   <td><CreateCard pokemonIndex={1} typeToDisplay={null}/></td>
                   <td><CreateCard pokemonIndex={2} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={3} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={4} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={5} typeToDisplay={null} /></td>
                   <td><CreateCard pokemonIndex={6} typeToDisplay={null} /></td>
                    </tr>
            
                    <tr>
                        
                    
                    <td><CreateCard pokemonIndex={7} typeToDisplay={null} /></td>
                    <td><CreateCard pokemonIndex={8} typeToDisplay={null} /></td>
                    <td><CreateCard pokemonIndex={9} typeToDisplay={null} /></td>
                    <td><CreateCard pokemonIndex={10} typeToDisplay={null}  /></td>
                    <td><CreateCard pokemonIndex={11} typeToDisplay={null}  /></td>
                    <td ><CreateCard pokemonIndex={12} typeToDisplay={null}  /></td>
                    </tr>
                    </tbody>
            </table>
        </div>
    )
}
export function WelcomePage(){
    return(
        <div className="container">
                <Router>
                <Routes>
                    
                    <Route path="/home" element={<WelcomePage />}></Route>
                    <Route path="/page2" element={<Jcode />}></Route>
                </Routes>
                </Router>
            <h1 className='title'>Pokemon Memory Game</h1>
            <h2 className='playerSelect'>Players</h2>
            <select className='playerSelect'>
                <option>1 player</option>
                <option>2 players</option>
                <option>3 players</option>
                <option>4 players</option>
            </select>
            <input type="text" placeholder='player name' className='nameInput' />
            <button className='startButton'>Start Playing!</button>
        </div>
    )
}

export function Navbar(){
    return(
        <nav>
            <Link to='/home'>HOME</Link>
            <Link to='/'>HOME</Link>
            <Link to='/page2'>GAME</Link>

        </nav>
    )
}

