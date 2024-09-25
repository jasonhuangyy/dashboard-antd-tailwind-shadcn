"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThemeTogger = () => {
  const { setTheme } = useTheme();
  const [toggled, setToggled] = React.useState(false);
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setToggled((toggled) => !toggled);
        setTheme(toggled ? "dark" : "light");
      }}
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] text-black rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem]   rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeTogger;
