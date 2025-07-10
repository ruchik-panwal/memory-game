import { useEffect, useState } from "react";
import randomNumberArr from "./randomGenerator";

export default function GameContent({ pokeArr }) {
  const [count, setCount] = useState(1);
  const [newPokeArr, setNewPokeArr] = useState([...pokeArr]);

  useEffect(() => {
    setNewPokeArr([...pokeArr]);
    setCount(1);
  }, [pokeArr]);

  function shuffleArray(arr) {
    const randArr = randomNumberArr(0, arr.length - 1);
    return randArr.map((i) => arr[i]);
  }
  
  function nextLevel(index) {
    if (!newPokeArr[index].isClicked) {
      const updatedArr = [...newPokeArr];
      updatedArr[index] = { ...updatedArr[index], isClicked: true };
      setNewPokeArr(shuffleArray(updatedArr));
      setCount(count + 1);
    } else {
      setCount(404);
    }
  }

  if (count < 9)
    return (
      <div className="sm:h-[70vh] w-[80vw] p-10 bg-amber-800 grid sm:grid-cols-[repeat(auto-fit,200px)] grid-cols-[repeat(2,150px)] sm:gap-[50px] gap-3 justify-center items-center ">
        {newPokeArr.map((poke, ind) => (
          <Card pokemon={poke} key={ind} nxtLvl={() => nextLevel(ind)} />
        ))}
      </div>
    );
  else if (count == 404)
    return <div className="h-[70vh] flex justify-center items-center">You Lost</div>;
    return <div className="h-[70vh] flex justify-center items-center">You Won</div>;
}

function Card({ pokemon, nxtLvl }) {
  return (
    <button
      onClick={nxtLvl}
      className="bg-white sm:h-[200px] h-[120px] cursor-pointer"
    >
      <div className="flex justify-center items-center">
        <h1 className="absolute">{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </button>
  );
}
