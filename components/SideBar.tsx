import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import {
  LayoutDashboard,
  Newspaper,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";
import Link from "next/link";

const SideBar = () => {
  const itemClass = "mr-4 h-4 w-4";
  return (
    <>
      <Command className="w-full">
        <CommandInput placeholder="查询菜单" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="">
            <CommandItem>
              <LayoutDashboard className={itemClass} />
              <Link href="/">看板</Link>
            </CommandItem>
            <CommandItem>
              <Newspaper className={itemClass} />
              <Link href="/posts">帖子</Link>
            </CommandItem>
            <CommandItem>
              <Folders className={itemClass} />
              <Link href="/categories">目录</Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="">
            <CommandItem>
              <User className={itemClass} />
              <Link href="/profile">我的</Link>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard className={itemClass} />
              <Link href="/billing">账单</Link>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings className={itemClass} />
              <Link href="/settings">设置</Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
};

export default SideBar;
