// Footer has a mini screen like design which shows the score and has an option to create a new Game

export default function Footer({ gameSetter, count, high }) {
  return (
    <div className="box-border bg-black text-white h-[300px] w-[100vw] p-8 flex justify-center sm:justify-between">
      <div className="flex">
        <div className="box-border bg-green-950 border-6 p-5 gap-4 flex w-[400px] justify-between items-center">
          <div className="h-[100%] gap-3 flex flex-col items-center">
            <div className="border-3 w-[100%] h-[100%] pt-2 flex flex-col items-center">
              <p className="m-0">High Score</p>
              <p className="text-[3.4rem] font-bold">{high}</p>
            </div>
            <button
              onClick={gameSetter} //When the button is clicked, A new Game Starts
              className="border-3 p-2 pl-4 pr-4 cursor-pointer hover:bg-green-700"
            >
              New Game
            </button>
          </div>
          <p className="font-oswald font-bold text-[12rem]">{count}</p>
        </div>
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
