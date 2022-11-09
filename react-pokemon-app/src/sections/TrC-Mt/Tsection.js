import React, {useEffect, useState} from 'react';

import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Tcode(){ //Remember to rename your section here

    return(
        <div>
            <div>T code here</div>
            <CreateCard pokemonIndex={2} />
        </div>
    )
}