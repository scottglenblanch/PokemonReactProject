import CreateCard from "../../Global/CardCreaters/createCardToRender";
export default function All(){
const allArray = Array.from({length: 151}, (_, i) => i + 1)
console.log(allArray)
const waterArray = []
return(
    <div className="p3container">
{allArray.map((index) => (
    
    
    
        <div id="div"><CreateCard pokemonIndex={index} typeToDisplay={'flying'} /></div>
   
))
}
   

</div>
)}
// for(let i = 0; i < 151; i++){
// if(!typeToDisplay){

// }
// }