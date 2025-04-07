import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";

export default function DownloadImage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-14 lg:px-0 pt-4 gap-x-16 gap-y-16 justify-center">
      <div className="border md:h-[200px] md:w-[180px] h-[200px] w-[200px] relative">
        <Image
          src={"/photops/1.jpg"}
          alt="1"
          width={80}
          height={80}
          className="object-cover h-full w-full"
        />
        <a href="/photops/1.jpg" download={"/photops/1.jpg"}>
          <button className="absolute top-0 right-2 flex justify-center items-center text-center cursor-pointer hover:text-blue-600">
            <AiOutlineDownload size={25} className="hover:scale-110" />
          </button>
        </a>
      </div>
      <div className="border md:h-[200px] md:w-[180px] h-[200px] w-[200px]">
        <Image
          src={"/photops/1.jpg"}
          alt="1"
          width={80}
          height={80}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="border md:h-[200px] md:w-[180px] h-[200px] w-[200px]">
        <Image
          src={"/photops/1.jpg"}
          alt="1"
          width={80}
          height={80}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="border md:h-[200px] md:w-[180px] h-[200px] w-[200px]">
        <Image
          src={"/photops/1.jpg"}
          alt="1"
          width={80}
          height={80}
          className="object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
