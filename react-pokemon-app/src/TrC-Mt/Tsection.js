import React, {useEffect, useState} from 'react';

import CreateCard from '../createCardToRender';


export default function Tcode(){ //Remember to rename your section here
    const card = CreateCard()

    return(
        <>
            <div>T code here</div>
            {card}
        </>
    )
}