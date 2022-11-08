/*
    Get a paramemter_number from the section(s)
    That number will be the pokemon the section(s) want to create
*/
//===========================================

const data = useFetchData();
// let url = data.results[PARAMETER_NUMBER_HERE].url
let splinters = url.split('https://pokeapi.co/api/v2/pokemon/')
splinters = splinters[1].split('/')
let pokemonIndex = splinters[0]
let picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`

//--------------------------------------------------

async function GetTypeData(){

    return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`)
    .then((response) => response.json())
}
function useTypeFetchData() {

    const [type_data, setTypeData] = useState(null)

    useEffect(() => {
        GetTypeData().then(newTypeData => {
            setTypeData(newTypeData)
        })
    }, [])

    return type_data;
}
const type_data = await useTypeFetchData()

//-------------------------------------

const pokemon_data  = {
    pokemon_index: pokemonIndex,
    name: data.results[pokemon_index-1].name,
    picture_url: picture,
    //type: type_data.//PATH_TO_TYPES_HERE
}

//===================================
/*
    Send the pokemon_data to the section(s)
    The section(s) can now create a card of that pokemon
*/
