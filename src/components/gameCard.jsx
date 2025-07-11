import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// Card display of pokemon
export default function Card({ pokemon, nxtLvl }) {
  const textRef = useRef();
  const imgRef = useRef();
  const { contextSafe } = useGSAP();

  const mouseEnter = contextSafe(() => {
    gsap.to(textRef.current, {
      duration: 0.5,
      fontSize: "2.7rem",
      color: "black",
    });

    gsap.to(imgRef.current, {
      duration: 0.5,
      height: "170px",
      y: 10,
    });
  });

  const mouseLeave = contextSafe(() => {
    gsap.to(textRef.current, {
      duration: 0.5,
      fontSize: "2.5rem",
      color: "#AFAFAF",
    });

    gsap.to(imgRef.current, {
      duration: 0.5,
      height: "200px",
      y: 0,
    });
  });

  const clickChange = contextSafe(() => {
    const tl = gsap.timeline();

    tl.to("#loaders", {
      display: "flex",
      duration: 0.2,
      height: "100%",
      ease: "power1.out",
      onComplete: () => {
        nxtLvl();
      },
    }).to(
      "#loaders",
      {
        duration: 0.2,
        height: "0%",
        display: "none",
        ease: "power1.in",
      },
      "+=0.2"
    );

    return tl;
  });

  return (
    <button
      onClick={clickChange}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      className="box-border bg-white rounded-[10%] sm:h-[200px] h-[120px] cursor-pointer relative"
    >
      <div
        id="loaders"
        className="hidden bg-pokeYellow absolute z-11 rounded-[10%] w-[100%] inset-0"
      ></div>
      <div className="flex justify-center items-center">
        <img
          ref={imgRef}
          className="absolute z-10 sm:h-[200px] h-[115px] outline-white-solid"
          src={pokemon.image}
          alt={pokemon.name}
        />
        <h1
          ref={textRef}
          className="hidden sm:block absolute z-0 inset-0 text-footerGray font-teko font-black text-[2.5rem]"
        >
          {pokemon.name}
        </h1>
      </div>
    </button>
  );
}
