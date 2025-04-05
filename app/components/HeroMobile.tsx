import Image from "next/image";
import Schedule from "./Schedule";

export default function HeroMobile() {
  return (
    <div className="flex flex-col justify-center items-center md:hidden">
      <Image
        src={"/bgm.png"}
        alt="bgm"
        fill
        className="object-cover lg:hidden -z-50"
      />
      <div className="flex flex-col justify-center items-center mt-48 text-center px-12 ">
        <h1 className="font-bold text-8xl">DIONELA</h1>
        <p className="leading-5 pt-4">
          Join Dionela for an unforgettable live performance! Get your tickets
          now for a night of great music and unforgettable moments.
        </p>
        <div className="pt-8">
          <button className="bg-pink-700 px-16 py-2 rounded-4xl hover:bg-pink-800 cursor-pointer">
            Buy Tickets
          </button>
        </div>
      </div>
      <div className="w-screen px-2">
        <Schedule />
      </div>
    </div>
  );
}
