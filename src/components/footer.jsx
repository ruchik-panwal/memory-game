export default function Footer({ gameSetter }) {
  return (
    <div className="bg-black text-white w-[100vw] flex justify-between h-[30vh]">
      <div>
        <div>
          <div>
            <button
              onClick={gameSetter}
            >
              New Game
            </button>
            <div>
              <p>HI</p>
              <p>10</p>
            </div>
          </div>
          <p>0</p>
        </div>
        <p>/10</p>
      </div>

      <div>
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
