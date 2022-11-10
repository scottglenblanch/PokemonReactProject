import React, {useEffect, useState} from 'react';

import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Jcode(){ //Remember to rename your section here

    return(
        <div>
            <div>J code here</div>
            <table>
                <tbody>
                    <tr>
            <td><CreateCard pokemonIndex={1} /></td>
            <td><CreateCard pokemonIndex={4} /></td>
            <td><CreateCard pokemonIndex={7} /></td>
            <td><CreateCard pokemonIndex={10} /></td>
            <td><CreateCard pokemonIndex={13} /></td>
            <td><CreateCard pokemonIndex={16} /></td>
            <td><CreateCard pokemonIndex={19} /></td>
            <td><CreateCard pokemonIndex={21} /></td>
            <td><CreateCard pokemonIndex={23} /></td>



                     </tr>
                     <tr>
            <td><CreateCard pokemonIndex={2} /></td>
            <td><CreateCard pokemonIndex={5} /></td>
            <td><CreateCard pokemonIndex={8} /></td>
            <td><CreateCard pokemonIndex={11} /></td>
            <td><CreateCard pokemonIndex={14} /></td>
            <td><CreateCard pokemonIndex={17} /></td>
            <td><CreateCard pokemonIndex={20} /></td>
            <td><CreateCard pokemonIndex={22} /></td>
            <td><CreateCard pokemonIndex={24} /></td>



                     </tr>
                     <tr>
            <td><CreateCard pokemonIndex={3} /></td>
            <td><CreateCard pokemonIndex={6} /></td>
            <td><CreateCard pokemonIndex={9} /></td>
            <td><CreateCard pokemonIndex={12} /></td>
            <td><CreateCard pokemonIndex={15} /></td>
            <td><CreateCard pokemonIndex={18} /></td>

            <td></td>

                     </tr>
                </tbody>
            </table>
            <CreateCard pokemonIndex={3} />
            <CreateCard pokemonIndex={4} />
        </div>
    )
}