import React from "react"
import PlayerAmountOptionComponent from "../Global/Components/Tcomponents/PlayerAmountOptions"
export default function WelcomePage(){
    return(
        <div className="theContainer">
               <div className="box d-flex justify-content-center">
                {/* <Navbar></Navbar> */}
            <h1 className='title'>Pokemon Matching Game</h1>
            <h2 className='playerSelect'>Players</h2>
            <PlayerAmountOptionComponent></PlayerAmountOptionComponent>
            <input type="text" placeholder='player name' className='nameInput w-25 form-control' />
            <button className='btn btn-primary w-25 mx-auto'>Start Playing!</button>
            </div>
        </div>
    )
}

