// Footer has a mini screen like design which shows the score and has an option to create a new Game

export default function Footer({ gameSetter, count, high }) {
  return (
    <div className="box-border bg-black text-white h-[300px] w-[100vw] p-8 flex justify-center xl:justify-between select-none  shadow-[0_0_13px_7px_rgba(0,0,0,0.5)]">
      <div className="flex">
        <div className="box-border bg-gray-200 border-6 border-gray-700 p-5 gap-4 flex w-[400px] justify-between items-center">
          <div className="h-[100%] gap-3 flex flex-col items-center">
            <div className="text-black border-3 rounded-[8px] w-[100%] h-[100%] pt-2 flex flex-col items-center">
              <p className="m-0">High Score</p>
              <p className="text-[3.4rem] font-bold">{high}</p>
            </div>
            <button
              onClick={gameSetter} //When the button is clicked, A new Game Starts
              className="text-black border-3 rounded-[8px] p-2 pl-4 pr-4 cursor-pointer hover:bg-black hover:text-white"
            >
              New Game
            </button>
          </div>
          <p className="font-oswald font-bold text-[12rem] text-black">{count}</p>
        </div>
      </div>

      <div className="hidden xl:flex flex-col justify-between items-center text-footerGray">
        <div className=" flex flex-col justify-between items-center">
          <h1 className="m-0 font-oswald font-bold text-[8rem]/23 mb-5 line-">MEMORY GAME</h1>
          <div className="w-[99%] flex justify-between items-center">
            <p>Pokemon Edition</p>
            <p>37/100</p>
          </div>
        </div>

        <div className=" w-[99%] flex justify-between items-end">
          <p className="w-[200px] text-[1rem]/5">Guide: Click on cards to earn points, but don't click the same card twice</p>
          <a href="https://github.com/ruchik-panwal/memory-game" target="_blank" rel="noopener noreferrer">github</a>
        </div>
      </div>
    </div>
  );
}
