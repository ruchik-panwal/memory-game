import { useState, useEffect } from "react";

import { apiCaller } from "./components/apiCaller";
import Footer from "./components/footer";
import GameContent from "./components/gameContent";
import { pokeDefault } from "./storage";

export default function App() {
  const [pokeArr, setPokeArr] = useState([...pokeDefault]); //Keeps track of array
  const [newGame, setNewGame] = useState(); //keeps track of new game button
  const [count, setCount] = useState(1); //Counts the score
  const [highScore, setHighScore] = useState(0); //Counts the highscore

  useEffect(() => {
    setCount(0); //Reset the count
    // Call another set of pokemon
    async function fetchData() {
      try {
        const result = await apiCaller([...pokeDefault]);
        if (Array.isArray(result) && result.length > 0) {
          setPokeArr(result);
        } else {
          setPokeArr([]);
        }
      } catch (err) {
        console.error("Error: ", err);
        setPokeArr([]);
      }
    }
    fetchData();
  }, [newGame]);

  return (
    <div className="bg-mainRed flex flex-col items-center">
      <GameContent
        pokeArr={pokeArr}
        setCount={(c) => {
          setCount(c);
          if (count > highScore) setHighScore(count); //Setting High Score
        }}
        count={count}
      />
      <Footer
        gameSetter={() => {
          newGame ? setNewGame(false) : setNewGame(true);
        }}
        count={count}
        high={highScore}
      />
    </div>
  );
}
