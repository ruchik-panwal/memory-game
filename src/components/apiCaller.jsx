import randomNumberArr from "./randomGenerator";

// This Calls the API n-times for getting pokemon
export async function apiCaller() {
  const ranArr = randomNumberArr(1, 500); //Array of 10 random numbers

  // Getting an array of objects containing name and image of the pokemon
  const results = await Promise.all( 
    ranArr.map(async (num) => {
      const pokeApi = await fetch("https://pokeapi.co/api/v2/pokemon/" + num);
      const pokeApiJson = await pokeApi.json();
      return {
        name: pokeApiJson.name,
        image: pokeApiJson.sprites.front_default,
        isClicked: false,
      };
    })
  );

  return results;
}

