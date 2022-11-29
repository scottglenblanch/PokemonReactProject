import { useEffect, useState } from 'react';
import HandleClick from '../../../sections/hjake07/Jsection';
import CreateCard from '../../CardCreaters/createCardToRender'
import Player1Score from './player1score'
import Player2Score from './player2score';
import Player3Score from './player3score';
import Player4Score from './player4score';

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export default function Jcode(){ //Remember to rename your section here

    const [displayArray, setDisplayArray] = useState([]);
    const [firstCardSelectedPosition, setFirstCardSelectedPosition ] = useState(null);
    const [secondCardSelectedPosition, setSecondCardSelectedPosition] = useState(null);

    const resetSelectedPositions= () => {
      setFirstCardSelectedPosition(null);
      setSecondCardSelectedPosition(null);
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
      const defaultArray = Array.from({length: 81}, (_, i) => i + 1)
      let randomArray = []
          for(let j = 0; j < 20; j++){
            const randomNumber = Math.floor(Math.random() * 81)
            randomArray.push(defaultArray[randomNumber])
          }
      const arrayWithUniqueTypes = [...new Set(randomArray)].slice(0, 12);
      const displayArrayWithoutPosition = [
        ...arrayWithUniqueTypes,
        ...arrayWithUniqueTypes
      ];

      // shuffle
      shuffleArray(displayArrayWithoutPosition);
      
      displayArray = displayArrayWithoutPosition.map((index, position) => ({
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
                            typeToDisplay={null}
                            selected={position === firstCardSelectedPosition || position === secondCardSelectedPosition} 
                          />
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