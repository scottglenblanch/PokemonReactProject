import CreateCard from '../../../Global/CardCreaters/createCardToRender'
import Player1Score from './player1score'
import Player2Score from './player2score';
import Player3Score from './player3score';
import Player4Score from './player4score';

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