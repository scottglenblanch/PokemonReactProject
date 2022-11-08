import React from 'react';
import pokemon_data from './createCardDataObject';
import './cardstyles.css'

export default function CreateCard(){
    return(
        <div className='card'>
            <h2 className='cardName'>{pokemon_data.name}</h2>
            <img className='cardImage' src={pokemon_data.picture_url}></img>
            <span className='cardType'>{pokemon_data.type1}</span>
            <span className='cardType'>{pokemon_data.type2}</span>
        </div>
    )
}