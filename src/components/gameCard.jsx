// Card display of pokemon
export default function Card({ pokemon, nxtLvl }) {
  return (
    <button
      onClick={nxtLvl} //Checks for clickstatus
      className="bg-white rounded-[10%] sm:h-[200px] h-[120px] cursor-pointer relative hover:shadow-[0_0_200px_10px_#ffffff6c]"
    >
      <div className="flex justify-center items-center">
        <img
          className="absolute z-10 sm:h-[200px] h-[115px] outline-white-solid"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <h1 className="hidden sm:block absolute z-0 inset-0 text-footerGray font-teko font-black text-[2.5rem]">
          {pokemon.name}
        </h1>
      </div>
    </button>
  );
}
