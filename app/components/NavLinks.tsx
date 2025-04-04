"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "All Concerts",
    href: "/allconcerts",
  },
  {
    name: "Photo Ops",
    href: "/photops",
  },
  {
    name: "About",
    href: "/about",
  },
];

export default function NavLinks() {
  const pathName = usePathname();
  return (
    <div className="md:flex space-x-8 hidden">
      {navLinks.map((link) => (
        <div key={link.href}>
          <Link
            href={link.href}
            className={`${
              pathName === link.href ? "font-bold" : "text-gray-300"
            }`}
          >
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
