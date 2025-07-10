// Card display of pokemon
export default function Card({ pokemon, nxtLvl }) {
  return (
    <button
      onClick={nxtLvl} //Checks for clickstatus
      className="bg-white sm:h-[200px] h-[120px] cursor-pointer"
    >
      <div className="flex justify-center items-center">
        <h1 className="absolute">{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
    </button>
  );
}
