import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-[50vh]">
      <div>
        <Image
          src={"/bg.png"}
          alt="hero"
          fill
          loading="eager"
          className="object-cover -z-50 brightness-80"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-64 max-w-7xl mx-auto">
        <h1 className="font-bold text-9xl tracking-tight">DIONELA</h1>
        <p className="w-[520px] text-center pt-4">
          Join Dionela for an unforgettable live performance! Get your tickets
          now for a night of great music and unforgettable moments.
        </p>
        <div className="pt-8">
          <button className="bg-pink-700 px-16 py-2 rounded-4xl">
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
