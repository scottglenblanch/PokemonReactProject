import React, {useEffect, useState} from 'react';
import CreateCard from '../../Global/CardCreaters/createCardToRender';
import '../Walls101/Wstyles.css'
import '../hjake07/Jstyles.css'

import DeckOption from '../../Global/Components/Wcomponents/ChosenDeck'

export default function DeckSelection(){
    return(
        <div className='pageThree'>
            <DeckOption></DeckOption>
            <br></br>
            <br></br>
            <div class='maincontainer'>
                <div class='card' id='card'>
                    <div class='front'>

                    </div>
                    <div class='back'>

                    </div>

                </div>

            </div>
        </div>
        
    )
}
