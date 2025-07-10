// Card display of pokemon
export default function Card({ pokemon, nxtLvl }) {
  return (
    <button 
      onClick={nxtLvl} //Checks for clickstatus
      className="bg-white rounded-[10%] sm:h-[200px] h-[120px] cursor-pointer relative"
    >
      <div className="flex justify-center items-center">
        <img className="absolute z-10 h-[115px]" src={pokemon.image} alt={pokemon.name} />
        <h1 className="hidden sm:block absolute z-0 inset-0">{pokemon.name}</h1>
      </div>
    </button>
  );
}
