import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto px-8 lg:px-0">
      <Link href={"/"}>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={120}
          height={120}
          className="object-cover"
        />
      </Link>
      <div>
        <NavLinks />
      </div>
      <div>
        <button className="bg-pink-700 px-12 py-2 rounded-4xl hover:bg-pink-800 cursor-pointer">
          Contact
        </button>
      </div>
    </div>
  );
}
