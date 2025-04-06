import Image from "next/image";
import Schedule from "./Schedule";
import BuyTicketButton from "./BuyTicketButton";

export default function Hero() {
  return (
    <div className="z-10 tracking-tighter flex justify-center text-center items-center h-[70vh]">
      <div className="">
        <div>
          <Image
            src={"/bg.png"}
            alt="background"
            fill
            quality={80}
            loading="eager"
            className="object-cover -z-50 brightness-50 h-[80vh]"
          />
          <div className="h-[80vh] xl:h-[91vh] -z-40">
            <div className="max-w-7xl mx-auto px-8 lg:px-16 2xl:px-6 flex flex-col justify-center items-center pt-48">
              <h1 className="text-[170px] font-bold tracking-tighter">
                DIONELA
              </h1>

              <p className="text-gray-300 text-md lg:text-lg lg:w-2/3 mx-auto">
                Join Dionela for an unforgettable live performance! Get your
                tickets now for a night of great music and unforgettable
                moments.
              </p>
              <BuyTicketButton />
              <Schedule />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
