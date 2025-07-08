export default function GameContent() {
  return (
    <div className="sm:h-[70vh] w-[80vw] p-10 bg-amber-800 grid sm:grid-cols-[repeat(auto-fit,200px)] grid-cols-[repeat(2,150px)] sm:gap-[50px] gap-3 justify-center items-center ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white sm:h-[200px] h-[120px] cursor-pointer">
      <div>
        <h1>Pokemon Name</h1>
        <img src="" alt="" />
      </div>
    </div>
  );
}
