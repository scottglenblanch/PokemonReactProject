export default function GetData(){
    //fetch data
    let data = null;
    fetch("https://api.pokemontcg.io/v1/sets")
    .then((response) => data = response.json())
    return data;
}


/*   API structure

    data{
        ____{

        }
        ___{
            ___{

            }
        }
    }


*/
/*
    data.//pathsGoHere
*/