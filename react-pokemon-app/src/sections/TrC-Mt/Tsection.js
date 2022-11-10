import React, {useEffect, useState} from 'react';

import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Tcode(){ //Remember to rename your section here
    let wantedType = null;
    
    return(
        <div>
            <div>T code here</div>
            {new Array(180).fill(1).map((one, index) =>(
                <CreateCard pokemonIndex={one + index} typeToDisplay={wantedType} key={index}/>
            ) )}
           
        </div>
    )
}