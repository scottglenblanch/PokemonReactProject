import React, {useEffect, useState} from 'react';
import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Wcode(){ //Remember to rename your section here

    return(
        <div>
            <div>Pauls code here</div>
            <CreateCard pokemonIndex={2} />
        </div>
    )
}

