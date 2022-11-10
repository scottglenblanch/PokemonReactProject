import React from 'react';
import {useGetPokiData} from './createCardDataObject';
import './cardstyles.css'

export default function CreateCard(props){
    const pokemon_index = props.pokemonIndex ?? 1;
    const typeToDisplay = props.typeToDisplay
    const { name = '', picture_url = '', type1 = '', type2 = ''} = useGetPokiData(pokemon_index);
    const isDisplay = typeToDisplay === null || typeToDisplay === type1 || typeToDisplay === type2;
    return isDisplay ? (
        <div className='card'>
            <h2 className='cardName'>{name}</h2>
            <img className='cardImage' src={picture_url}></img>
            <span className='cardType'>{type1}</span>
            <span className='cardType'>{type2}</span>
        </div>
    ) : null //Can change to something else
}