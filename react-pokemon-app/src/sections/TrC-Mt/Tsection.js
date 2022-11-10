import React, {useEffect, useState} from 'react';

import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Tcode(){ //Remember to rename your section here
    let wantedType = null;
    
    return(
        <div>
            <div>T code here</div>
            {new Array(100).fill(1).map((startVal, index) =>(
                <CreateCard pokemonIndex={startVal + index} typeToDisplay={wantedType} />
            ) )}
           
        </div>
    )
}