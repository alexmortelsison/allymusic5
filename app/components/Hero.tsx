import Image from "next/image";
import Schedule from "./Schedule";

export default function Hero() {
  return (
    <div className="h-[50vh] items-center justify-center flex flex-col">
      <div>
        <Image
          src={"/bg.png"}
          alt="hero"
          fill
          loading="eager"
          className="object-cover -z-50 brightness-80"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-140 md:mt-140 lg:mt-90 2xl:mt-140 max-w-7xl mx-auto">
        <h1 className="font-bold text-8xl md:text-9xl 2xl:text-[150px] tracking-tight">
          DIONELA
        </h1>
        <p className="w-[520px] text-center pt-4 px-16 md:px-0 text-gray-300">
          Join Dionela for an unforgettable live performance! Get your tickets
          now for a night of great music and unforgettable moments.
        </p>
        <div className="pt-8">
          <button className="bg-pink-700 px-16 py-2 rounded-4xl hover:bg-pink-800 cursor-pointer">
            Buy Tickets
          </button>
        </div>
      </div>
      <div className="2xl:w-1/3 mx-auto px-4">
        <Schedule />
      </div>
    </div>
  );
}
