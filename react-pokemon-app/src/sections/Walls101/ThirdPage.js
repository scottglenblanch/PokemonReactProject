import React, {useEffect, useState} from 'react';
import CreateCard from '../../Global/CardCreaters/createCardToRender';
import '../hjake07/Jstyles.css'
import '../Walls101/Wstyles.css'

export default function DeckSelection(){
    return(
        <>

        <div className='titlePlayers'>
            <h1>Pokemon Matching Game</h1>
            <label>Number of Players: </label>
            <select name='players' id='playerSelect'>
                <option>1 Player</option>
                <option>2 Players</option>
                <option>3 Players</option>
                <option>4 Players</option>
            </select>
        </div>
        
        {/* <br></br>
        <br></br> */}
        <div className='chosenDeck'>
            <label>Choose a deck: </label>
            <select name='decks' id='decks'>
                <optgroup label='4 Players minimum'>
                    <option>Default</option>
                    <option>Poison</option>
                    <option>Flying</option>
                    <option>Water</option>
                    <option>Normal</option>
                </optgroup>
                <optgroup label='3 Players minimum'>
                    <option>Grass</option>
                    <option>Fire</option>
                    <option>Bug</option>
                    <option>Electric</option>
                    <option>Ground</option>
                    <option>Psychic</option>
                </optgroup>
                <optgroup label='2 Players minimum'>
                    <option>Fairy</option>
                    <option>Fighting</option>
                </optgroup>
            </select>
            <br></br>
            <br></br>
            <div className='front'>
                <CreateCard pokemonIndex={300} typeToDisplay={null}></CreateCard>
            </div>
            <div className='back'>
                <h4>Get Pranked!</h4>
            </div>
        </div>
        
        </>
    )
}
