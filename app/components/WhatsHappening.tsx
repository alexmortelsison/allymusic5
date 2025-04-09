import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

export default function WhatsHappening() {
  return (
    <div className="md:mt-44 max-w-7xl mx-auto md:pt-16 h-[70vh] px-4">
      <div className="flex items-center justify-between">
        <h1 className="md:text-5xl text-3xl font-bold">
          What&apos;s happening
        </h1>
        <Link href={"/photoops"}>
          <div className="flex items-center space-x-2 hover:opacity-90 cursor-pointer">
            <BsArrowUpRightCircle size={40} />

            <p>See photos</p>
          </div>
        </Link>
      </div>
      <p className="text-3xl pt-4 ">TJ Monterde</p>
      <p className="text-gray-400">March 30, 2025</p>
      <p className="text-gray-400">The Palladium, Los Angeles</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 pt-8 space-x-4 space-y-4 place-items-center">
        <div className="border h-[300px] w-[300px]  md:h-[400px] md:w-[400px] flex flex-col items-center p-8 rounded-4xl shadow-md hover:scale-110 duration-200 shadow-pink-700">
          <Image
            src={"/tj1.png"}
            alt="tj1"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="border h-[300px] w-[300px]  md:h-[400px] md:w-[400px] flex flex-col items-center p-8  rounded-4xl shadow-md hover:scale-110 duration-200 shadow-pink-700">
          <Image
            src={"/tj2.png"}
            alt="tj2"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="border h-[300px] w-[300px]  md:h-[400px] md:w-[400px] flex flex-col items-center p-8  rounded-4xl shadow-md hover:scale-110 duration-200 shadow-pink-700">
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
