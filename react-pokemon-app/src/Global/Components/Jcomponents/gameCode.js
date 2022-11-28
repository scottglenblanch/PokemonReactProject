import { useEffect, useState } from 'react';
import { useEffect, useState, useContext } from 'react';
import HandleClick from '../../../sections/hjake07/Jsection';
import CreateCard from '../../CardCreaters/createCardToRender'
import Player1Score from './player1score'
import Player2Score from './player2score';
import Player3Score from './player3score';
import Player4Score from './player4score';
import { AppContext_TypeSelected, AppContext_AmountPlayers } from '../../../AppContext'

import { AppContext_AmountPlayers, AppContext_CardDisplaying, AppContext_TypeSelected } from '../../../AppContext';


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Jcode(){ //Remember to rename your section here

  const {type_selected} = useContext(AppContext_TypeSelected)
  const {isCardDisplaying} = useContext(AppContext_CardDisplaying)


    const [displayArray, setDisplayArray] = useState([]);
    const [firstCardSelectedPosition, setFirstCardSelectedPosition ] = useState(null);
    const [secondCardSelectedPosition, setSecondCardSelectedPosition] = useState(null);

    const resetSelectedPositions= () => {
      setTimeout(() => {
      setFirstCardSelectedPosition(null);
      setSecondCardSelectedPosition(null);
      }, 900)
    }

    const updateWhenMatchFound = () => {
      console.log('You found a match!')
      displayArray[firstCardSelectedPosition].isHidden = true;
      displayArray[secondCardSelectedPosition].isHidden = true;

      setDisplayArray([...displayArray]);
      resetSelectedPositions();

    }

    useEffect(() => {
      const firstCardPosition = displayArray[firstCardSelectedPosition]?.position
      const secondCardPosition = displayArray[secondCardSelectedPosition]?.position
      const firstCardIndex = displayArray[firstCardSelectedPosition]?.index;
      const secondCardIndex = displayArray[secondCardSelectedPosition]?.index;
      const isBothSelected = firstCardSelectedPosition !== null && 
      secondCardSelectedPosition !== null
      const isMatch =  isBothSelected && 
        firstCardIndex === secondCardIndex && firstCardPosition !== secondCardPosition;
      const isNotMatch = isBothSelected && !isMatch

      if(isMatch) {
       updateWhenMatchFound();
      } else if(isNotMatch) {
        console.log('Not a match!');
        resetSelectedPositions();
      }

    }, [firstCardSelectedPosition, secondCardSelectedPosition, displayArray]);

    useEffect(() => {
      let displayArray;
      const defaultArray = Array.from({length: 151}, (_, i) => i + 1)
      let randomArray = []
          for(let j = 0; j < 20; j++){
            const randomNumber = Math.floor(Math.random() * 81)
            randomArray.push(defaultArray[randomNumber])
          }
      const arrayWithUniqueTypes24 = [...new Set(randomArray)].slice(0, 12);
      const arrayWithUniqueTypes12 = [...new Set(randomArray)].slice(0, 6)
      const displayArrayWithoutPosition24 = [
        ...arrayWithUniqueTypes24,
        ...arrayWithUniqueTypes24
      ];
      const displayArrayWithoutPosition12 = [
        ...arrayWithUniqueTypes12,
        ...arrayWithUniqueTypes12
      ]

      // shuffle
      shuffleArray(displayArrayWithoutPosition24); //change to 24 for full size game
      
      displayArray = displayArrayWithoutPosition24.map((index, position) => ({ //change to 24 for full size game
        index, isHidden: false, position
      }))

      setDisplayArray(displayArray);
    }, []);

    const onClick = (pos) => {
      const firstCardIndex = displayArray[firstCardSelectedPosition]?.index;
      const secondCardIndex = displayArray[secondCardSelectedPosition]?.index;
      const isSetFirstCard = isNaN(firstCardIndex);
      const isSetSecondCard = !isSetFirstCard && isNaN(secondCardIndex);

      if(isSetFirstCard) {
        setFirstCardSelectedPosition(pos); 
      } else if(isSetSecondCard) {
        setSecondCardSelectedPosition(pos);
      }
    };
    
    return(

            <div className='mySection' id="myTableSection">
                <div className='container'>
                      {displayArray.map(({ index, isHidden, position }) => !isHidden ? (
                        <div className="cards" >
                          <CreateCard
                            onClick={() => onClick(position)}
                            key={position}
                            pokemonIndex={1 + index}
                            typeToDisplay={type_selected}
                            selected={position === firstCardSelectedPosition || position === secondCardSelectedPosition} 
                          />
                          {/* {console.log('Index: ' + index + ' IsCardDisplaying: ' + isCardDisplaying)} */}
                        </div> 
                   ) : null )}
                 
                        </div>
                <Player1Score />
                <Player2Score />
                <Player3Score />
                <Player4Score />
                
            </div>

            
        
    ) 
        }