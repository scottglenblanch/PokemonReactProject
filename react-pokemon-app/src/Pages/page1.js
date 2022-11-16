import React from "react"
export default function WelcomePage(){
    return(
        <div className="container">
               <div className="box">
                {/* <Navbar></Navbar> */}
            <h1 className='title'>Pokemon Memory Game</h1>
            <h2 className='playerSelect'>Players</h2>
            <select className='playerSelect' id="playerSelect">
                <option>1 player</option>
                <option>2 players</option>
                <option>3 players</option>
                <option>4 players</option>
            </select>
            <input type="text" placeholder='player name' className='nameInput' />
            <button className='startButton'>Start Playing!</button>
            </div>
        </div>
    )
}