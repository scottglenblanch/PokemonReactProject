import React, {useEffect, useState} from 'react';

import CreateCard from '../createCardToRender';


export default function Wcode(){ //Remember to rename your section here

    return(
        <div>
            <div>W code here</div>
            <CreateCard pokemonIndex={2} />
        </div>
    )
}