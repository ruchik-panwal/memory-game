import { useState, useEffect } from "react";

import { apiCaller } from "./components/apiCaller";
import Footer from "./components/footer";
import GameContent from "./components/gameContent";
import { pokeDefault } from "./storage";

export default function App() {
  const [pokeArr, setPokeArr] = useState([...pokeDefault]);
  const [newGame, setNewGame] = useState();
  const [count, setCount] = useState(1);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    setCount(0);
    async function fetchData() {
      try {
        const result = await apiCaller([...pokeDefault]);
        if (Array.isArray(result) && result.length > 0) {
          setPokeArr(result);
        } else {
          setPokeArr([]);
        }
      } catch (err) {
        console.error("API Error:", err);
        setPokeArr([]);
      }
    }
    fetchData();
  }, [newGame]);

  return (
    <div className="flex flex-col items-center">
      <GameContent
        pokeArr={pokeArr}
        setCount={(c) => {
          setCount(c);
          if (count > highScore) setHighScore(count);
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
