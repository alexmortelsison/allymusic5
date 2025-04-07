import { BsArrowUpRightCircle } from "react-icons/bs";
import { CgPin } from "react-icons/cg";
import Image from "next/image";

export default function ConcertsPage() {
  return (
    <div className="max-w-7xl mx-auto px-16 lg:px-0 pb-12">
      <h1 className="text-center md:text-4xl">Upcoming Events</h1>
      <div className="flex flex-col items-start text-start justify-start pt-8 lg:pl-8">
        <p className="text-lg">June 2025</p>
      </div>
      <div className="lg:pt-8 pt-4 lg:flex lg:justify-center">
        <div className="border md:h-[200px] lg:w-[70%] lg:justify-center rounded-2xl flex flex-col justify-center">
          <div className="sm:flex">
            <Image
              src={"/dionela.jpg"}
              alt="dionela"
              width={195}
              height={195}
              className="object-cover h-full w-full md:w-[195px] rounded-t-2xl md:rounded-l-2xl"
            />
            <div className="text-center flex flex-col md:pl-8 justify-center lg:pl-24">
              <p className="flex items-center justify-center md:justify-start">
                <span className="text-pink-700 font-bold text-2xl pr-2">
                  13
                </span>
                June, Friday
              </p>
              <h1 className="sm:flex text-3xl pt-2 font-semibold">DIONELA</h1>
              <p className="sm:flex text-gray-400 pt-2 md:pt-0">
                The Grace Tour
              </p>
              <div className="flex items-center justify-center md:pt-1 text-gray-400 pb-4 md:pb-0">
                <CgPin />
                <p className="text-nowrap">Long Island City, NY</p>
              </div>
            </div>
            <div className="flex justify-center md:justify-end md:items-center w-full lg:pr-32 md:pr-12 pb-8 md:pb-0 px-4 md:px-0">
              <div className="border border-pink-700 md:px-16 md:py-12 w-screen md:w-0 text-center items-center justify-center rounded-full flex py-2 cursor-pointer hover:opacity-90 bg-pink-700 md:bg-transparent">
                <BsArrowUpRightCircle
                  className="md:h-[30px]md:hidden text-white md:text-pink-700 pr-2"
                  size={30}
                />
                <p className="text-nowrap text-white md:text-pink-700 font-bold">
                  Buy Ticket
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
