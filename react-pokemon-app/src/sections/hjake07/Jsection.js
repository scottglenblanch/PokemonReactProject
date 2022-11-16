import React, {useEffect, useState} from 'react';
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
            <Player1Score />
            <Player2Score />
            <Player3Score />
            <Player4Score />

        </div>
    )
}
function Player1Score(){
    return(
        <div className="player1Scores">
            Player1: 2 Matches
        </div>
    )
}
function Player2Score(){
    return(
        <div className="player2Scores">
            Player2: 2 Matches
        </div>
    )
}
function Player3Score(){
    return(
        <div className="player3Scores">
            Player3: 2 Matches
        </div>
    )
}
function Player4Score(){
    return(
        <div className="player4Scores">
            Player4: 2 Matches
        </div>
    )
}


