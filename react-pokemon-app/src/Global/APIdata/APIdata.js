export default async function GetData(){
    //fetch data
    
    return await fetch("https://pokeapi.co/api/v2/pokemon?limit=180&offset=0") //Given https://api.pokemontcg.io/v1/sets
    .then((response) => response.json())
}

/*
Name
    data.results[//iteration].name

*/

/*   API structure

    data{
        results[
            {
                name,
                url
            }
            {
                name,
                url
            }
            //etc
        ]
    }


*/
