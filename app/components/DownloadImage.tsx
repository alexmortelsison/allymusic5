import { AiOutlineDownload } from "react-icons/ai";
import Image from "next/image";
import { imageLinks } from "./ImageLinks";

export default function DownloadImage() {
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:px-0 pt-4 space-x-4 space-y-4 ">
          {imageLinks.map((item) => (
            <div
              key={item.image}
              className="border md:h-[200px] md:w-[180px] h-[200px] w-[200px] relative hover:scale-110 duration-200"
            >
              <Image
                src={item.image}
                alt="image"
                width={40}
                loading="eager"
                height={40}
                className="object-cover w-[180px] h-[200px]"
              />
              <a href={item.image} download={item.image}>
                <button className="absolute top-0 right-2 flex justify-center items-center text-center cursor-pointer hover:text-blue-600">
                  <AiOutlineDownload size={25} className="hover:scale-110" />
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
