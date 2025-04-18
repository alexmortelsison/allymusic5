"use client";
import { BiMenuAltRight } from "react-icons/bi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Concerts",
    href: "/concerts",
  },
  {
    name: "Photo Ops",
    href: "/photoops",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function SheetBar() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <BiMenuAltRight size={25} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="flex justify-center items-center mt-12">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription
            asChild
            className={`flex flex-col text-center space-y-4 mt-8`}
          >
            <div>
              {navLinks.map((item) => (
                <div key={item.href} className="w-full">
                  <Link
                    href={item.href}
                    className={`px-16 py-2 rounded-4xl ${
                      pathName === item.href
                        ? "font-semibold text-white"
                        : "text-gray-400 hover:bg-gray-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
