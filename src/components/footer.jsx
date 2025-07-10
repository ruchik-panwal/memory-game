// Footer has a mini screen like design which shows the score and has an option to create a new Game

export default function Footer({ gameSetter, count, high }) {
  return (
    <div className="bg-black text-white w-[100vw] flex justify-center sm:justify-between h-[30vh]">
      <div>
        <div>
          <div>
            <button
              onClick={gameSetter} //When the button is clicked, A new Game Starts
            >
              New Game
            </button>
            <div>
              <p>HI</p>
              <p>{high}</p>
            </div>
          </div>
          <p>{count}</p>
        </div>
        <p>/12</p>
      </div>

      <div className="hidden sm:block">
        <div>
          <h1>MEMORY GAME</h1>
          <div>
            <p>Pokemon Edition</p>
            <p>37/100</p>
          </div>
        </div>

        <div>
          <p>Guide</p>
          <a href="http://">github</a>
        </div>
      </div>
    </div>
  );
}
