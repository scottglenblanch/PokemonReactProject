import React, {useEffect, useState} from 'react';
import CreateCard from '../../Global/CardCreaters/createCardToRender';
import '../hjake07/Jstyles.css'
import '../Walls101/Wstyles.css'
import DeckOption from './components/ChosenDeck';

export default function DeckSelection(){
    return(
        <div className='pageThree'>
            <DeckOption></DeckOption>
                <br></br>
                <br></br>
                <div className='front'>
                    <CreateCard pokemonIndex={300} typeToDisplay={null}></CreateCard>
                </div>
                <div className='back'>
                    <h4>Get Pranked!</h4>
                </div>
            </div>
        
    )
}
