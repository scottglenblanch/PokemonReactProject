import CreateCard from "../../Global/CardCreaters/createCardToRender";
export default function All(){
const allArray = Array.from({length: 81}, (_, i) => i + 1)
console.log(allArray)
return(
    <div className="p3container">
{allArray.map((index) => (
    
    
    
        <div><CreateCard pokemonIndex={index} typeToDisplay={null} /></div>
   
))
}
   

</div>
)}