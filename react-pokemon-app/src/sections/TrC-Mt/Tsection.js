import React, {useEffect, useState} from 'react';
<<<<<<< HEAD
=======
import TypeOptions from '../../Global/Components/Tcomponents/TypeOptions'

>>>>>>> combine
import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Tcode(){ //Remember to rename your section here
    let [wantedType, setWantedType] = useState(null)
    return(
        <>
            <div>
                <div style={{color: 'crimson'}}>T code here</div>
                <TypeOptions onChange={(e) => setWantedType(e.target.value)} value={wantedType}></TypeOptions> 
                {new Array(180).fill(1).map((one, index) =>(
                    <CreateCard pokemonIndex={one + index} typeToDisplay={wantedType} key={index}/>
                ) )}
            
            </div>
        </>
    )
}