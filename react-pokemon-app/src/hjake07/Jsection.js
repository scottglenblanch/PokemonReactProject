import React, {useEffect, useState} from 'react';

import CreateCard from '../createCardToRender';


export default function Jcode(){ //Remember to rename your section here
    const card = CreateCard()

    return(
        <>
            <div>J code here</div>
            {card}
        </>
    )
}