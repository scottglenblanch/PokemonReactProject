import React, {useEffect, useState} from 'react';

import useFetchData from '../useFetchData';


export default function Tcode(){ //Remember to rename your section here
    
   
    const data = useFetchData();

    let url = data.results[0].url //results[iteration].url
    let splinters = url.split('https://pokeapi.co/api/v2/pokemon/')
    splinters = splinters[1].split('/')
    let pokemonIndex = splinters[0]
    let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

    return(
        <>
            <div>T code here</div>
            <p>{data.results[0].url}</p>
            <p>{pokemonIndex}</p>
            <img src={picture} />
            <p>{JSON.stringify(data)}</p>
        </>
    )
}