import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";

export default function WhatsHappening() {
  return (
    <div className="mt-44 max-w-7xl mx-auto pt-16 h-[70vh]">
      <div className="flex items-center justify-between">
        <h1 className="text-5xl font-bold">What&apos;s happening</h1>
        <div className="flex items-center space-x-2 hover:opacity-90 cursor-pointer">
          <BsArrowUpRightCircle size={40} />
          <p>See photos</p>
        </div>
      </div>
      <p className="text-3xl pt-4 ">TJ Monterde</p>
      <p className="text-gray-400">March 30, 2025</p>
      <p className="text-gray-400">The Palladium, Los Angeles</p>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-8 space-x-4 place-items-center">
        <div className="border h-[400px] w-[400px] flex flex-col items-center p-8 rounded-4xl shadow-md hover:scale-110 duration-200 shadow-pink-700">
          <Image
            src={"/tj1.png"}
            alt="tj1"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="border h-[400px] w-[400px] flex flex-col items-center p-8  rounded-4xl shadow-md hover:scale-110 duration-200 shadow-pink-700">
          <Image
            src={"/tj2.png"}
            alt="tj2"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="border h-[400px] w-[400px] flex flex-col items-center p-8  rounded-4xl shadow-md hover:scale-110 duration-200 shadow-pink-700">
          <Image
            src={"/tj3.png"}
            alt="tj3"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
