import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto">
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
      <div>A</div>
    </div>
  );
}
