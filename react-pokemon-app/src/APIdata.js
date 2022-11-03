export default async function GetData(){
    //fetch data
    
    return await fetch("https://api.pokemontcg.io/v1/sets")
    .then((response) => response.json())
   
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