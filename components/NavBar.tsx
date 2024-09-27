import Link from "next/link";
import Image from "next/image";
import logo from "@/img/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ThemeTogger from "./ThemeTogger";

const NavBar = () => {
  return (
    <div className="sticky border-b w-full top-0 z-40 flex p-4 items-center space-x-4 justify-between px-16 bg-slate-900 text-white">
      <Link href="/">
        <span className="inline-block w-[40px] h-[40px] rounded-full bg-slate-900 mr-2">
          <Image className="inline-block" src={logo} width={40} alt="logo" />
        </span>
        <span className="text-2xl">
          Dashboard Demo with antd shadcn and tailwind
        </span>
      </Link>

      <div className="flex gap-5">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/auth">Logout</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeTogger></ThemeTogger>
      </div>
    </div>
  );
};

export default NavBar;
