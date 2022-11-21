import React, {useEffect, useState} from 'react';
import CreateCard from '../../Global/CardCreaters/createCardToRender';


export default function Jcode(){ //Remember to rename your section here
const defaultArray = Array.from({length: 81}, (_, i) => i + 1)
let randomArray = []
    for(let j = 0; j < 20; j++){
    randomArray.push(defaultArray[Math.floor(Math.random() * 81)])
}
let arrayToSplit = [...new Set(randomArray)].slice(0, 12)
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  console.log('1',arrayToSplit)
let shuffledArray = arrayToSplit.concat(arrayToSplit.slice())
// let splitArray1 = arrayToSplit.slice(0, 6)
// let splitArray2 = arrayToSplit.slice(6, 12)
// let splitArray3 = [splitArray1.concat(splitArray2)];
// let finalArray =  splitArray3.slice()
// console.log(splitArray3)

console.log(shuffledArray)






return(
        <div className='mySection' id="myTableSection">
            <div className='container'>
                  {shuffle(shuffledArray).map((index) =>(
                    <div className="cards"><CreateCard pokemonIndex={1 + index} typeToDisplay={null} key={index}/></div> 
               ) )}
             
                    </div>
            <Player1Score />
            <Player2Score />
            <Player3Score />
            <Player4Score />
            
        </div>
    
) 
    }
    
function Player1Score(){
    return(
        <div className="player1Scores">
            Player1: 2 Matches
        </div>
    )
}
function Player2Score(){
    return(
        <div className="player2Scores">
            Player2: 2 Matches
        </div>
    )
}
function Player3Score(){
    return(
        <div className="player3Scores">
            Player3: 2 Matches
        </div>
    )
}
function Player4Score(){
    return(
        <div className="player4Scores">
            Player4: 2 Matches
        </div>
    )
}
//Shuffle Card Algorithm Below
//          |
//          |
//          V

   // export default function App({ uniqueCardsArray }) {
        //   
        //     const [cards, setCards] = useState(
        //       () => shuffleCards(uniqueCardsArray.concat(uniqueCardsArray))
        //     );
            
        //     const handleCardClick = (index) => {
        //       // We will handle it later
        //     };
          
          
        //     return (
        //       <div className="mySection">
        //         <header>
        //           <h3>Play the Flip card game</h3>
        //           <div>
        //             Select two cards with same content consequtively to make them vanish
        //           </div>
        //         </header>
        //         <div className="container">
        //           {cards.map((card, index) => {
        //             return (
        //               <CreateCard
        //                 key={index}
        //                 card={card}
        //                 index={index}
        //                 onClick={handleCardClick}
        //               />
        //             );
        //           })}
        //         </div>
        //      </div>
        //     )
        //   }
    
    //     
    // function swap(array, i, j) {
    //     const temp = array[i];
    //     array[i] = array[j];
    //     array[j] = temp;
    //  }
    // function shuffleCards(array) {
    //     const length = array.length;
    // for (let i = length; i > 0; i--) {
    //     const randomIndex = Math.floor(Math.random() * i);
    //     const currentIndex = i - 1;
    //     swap(array, currentIndex, randomIndex)
    //     }
    //     return array;
    //  }