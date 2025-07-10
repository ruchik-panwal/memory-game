import { useEffect, useState } from "react";
import randomNumberArr from "./randomGenerator"; //For Getting an array of 12 randome numbers from 1 to 12
import Card from "./gameCard"; // Cards/Buttons

// Function for the game Screen
export default function GameContent({ pokeArr, setCount, count }) {
  // For changing the array when shuffled
  const [newPokeArr, setNewPokeArr] = useState([...pokeArr]);

  // Stores the array when API changes it
  useEffect(() => {
    setNewPokeArr([...pokeArr]);
  }, [pokeArr]);

  // Functions which returns a shuffled array
  function shuffleArray(arr) {
    const randArr = randomNumberArr(0, arr.length - 1);
    return randArr.map((i) => arr[i]);
  }

  // Keeps track of score and checks if the button is pressed or not
  function nextLevel(index) {
    if (!newPokeArr[index].isClicked) {
      // Updates the array that the button is clicked
      const updatedArr = [...newPokeArr];
      updatedArr[index] = { ...updatedArr[index], isClicked: true };
      setNewPokeArr(shuffleArray(updatedArr));

      // adds a count
      setCount(count + 1);
    } else {
      // If already clicked then lost
      setCount(404);
    }
  }

  // Check
  if (count < 12)
    //then keep playing
    return (
      <div className="h-[70vh] box-border w-[100vw] sm:w-[80vw] p-10 bg-amber-800 grid sm:grid-cols-[repeat(auto-fit,200px)] grid-cols-[repeat(3,120px)] sm:gap-[50px] gap-3 justify-center items-center ">
        {newPokeArr.map((poke, ind) => (
          <Card pokemon={poke} key={ind} nxtLvl={() => nextLevel(ind)} />
        ))}
      </div>
    );
  else if (count == 404)
    //Lost
    return (
      <div className="h-[70vh] flex justify-center items-center">You Lost</div>
    );
  return (
    //Won
    <div className="h-[70vh] flex justify-center items-center">You Won</div>
  );
}

