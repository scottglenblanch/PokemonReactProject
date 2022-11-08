export default async function GetData(){
    //fetch data
    
    return await fetch("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0") //Given https://api.pokemontcg.io/v1/sets
    .then((response) => response.json())
}

/*  We care about
Card pictures
    let url = data.results[//iteration].url
    let splinters = url.split('https://pokeapi.co/api/v2/pokemon/')
    splinters = splinters[1].split('/')
    let pokemonIndex = splinters[0]
    let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
Name
    data.results[//iteration].name
Type
    data.//Still looking


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
/*
    
*/
