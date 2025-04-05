import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

export default function DropdownNavbar() {
  return (
    <div className="lg:hidden select-none">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HiOutlineMenuAlt3 size={30} />
        </DropdownMenuTrigger>
        <DropdownMenuContent asChild>
          <div>
            <DropdownMenuItem className="flex flex-col px-4">
              <Link href={"/allconcerts"}>All Concerts</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col px-4">
              <Link href={"/allconcerts"}>Photo Ops</Link>
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-col px-4">
              <Link href={"/allconcerts"}>About</Link>
            </DropdownMenuItem>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
