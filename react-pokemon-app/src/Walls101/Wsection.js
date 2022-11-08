import React, {useEffect, useState} from 'react';

import CreateCard from '../createCardToRender';


export default function Wcode(){ //Remember to rename your section here
    const card = CreateCard()

    return(
        <>
            <div>W code here</div>
            {card}
        </>
    )
}