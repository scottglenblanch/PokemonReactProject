import React from "react"
export default function WelcomePage(){
    return(
        <div className="theContainer">
               <div className="box d-flex justify-content-center">
                {/* <Navbar></Navbar> */}
            <h1 className='title'>Pokemon Matching Game</h1>
            <h2 className='playerSelect'>Players</h2>
            <select className='w-25 form-select form-select-lg mt-3 mb-3 mx-auto' id="playerSelect">
                <option>1 player</option>
                <option>2 players</option>
                <option>3 players</option>
                <option>4 players</option>
            </select>
            <input type="text" placeholder='player name' className='nameInput w-25 form-control' />
            <button className='btn btn-primary w-25 mx-auto'>Start Playing!</button>
            </div>
        </div>
    )
}