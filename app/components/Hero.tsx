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
      <div className="flex flex-col justify-center items-center mt-70 md:mt-100 lg:mt-58 2xl:mt-80 max-w-7xl mx-auto">
        <h1 className="font-bold text-8xl md:text-9xl 2xl:text-[170px] tracking-tight">
          DIONELA
        </h1>
        <p className="w-[520px] text-center pt-4 px-16 md:px-0 text-gray-300 tracking-tighter">
          Join Dionela for an unforgettable live performance! Get your tickets
          now for a night of great music and unforgettable moments.
        </p>
        <div className="pt-8">
          <button className="bg-pink-700 px-16 py-2 rounded-4xl hover:bg-pink-800 cursor-pointer">
            Buy Tickets
          </button>
        </div>
      </div>
      <div className="w-full 2xl:w-2/3 mx-auto px-4 md:px-8 absolute bottom-5">
        <Schedule />
      </div>
    </div>
  );
}
