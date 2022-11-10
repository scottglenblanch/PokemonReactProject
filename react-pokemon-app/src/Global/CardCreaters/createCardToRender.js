import React from 'react';
import {useGetPokiData} from './createCardDataObject';
import './cardstyles.css'

export default function CreateCard(props){
    const pokemon_index = props.pokemonIndex ?? 1;
    const { name = '', picture_url = '', type1 = '', type2 = ''} = useGetPokiData(pokemon_index);
    return(
        <div className='card'>
            <h2 className='cardName'>{name}</h2>
            <img className='cardImage' src={picture_url}></img>
            <div className="cardTypes">
                <span className='cardType'>{type1} {type2}</span>
            </div>
        </div>
    )
}