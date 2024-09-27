"use client";

import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import { ConfigProvider } from "antd";
import { useTheme } from "next-themes";
import { antDarkTheme, antLightTheme } from "../themeConfig";
import "dayjs/locale/zh-cn";

import dayjs from "dayjs";
import locale from "antd/locale/zh_CN";
dayjs.locale("zh-cn");
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme } = useTheme();
  return (
    <>
      <NavBar></NavBar>
      <div className="flex  ">
        <div className="hidden bg-se md:block h-[calc(100vh-4.5rem)] w-[20rem] px-4">
          <SideBar />
        </div>
        <div className="container max-w-[1200px] p-5">
          <ConfigProvider
            locale={locale}
            theme={theme === "light" ? antLightTheme : antDarkTheme}
          >
            {children}
          </ConfigProvider>
        </div>
      </div>
    </>
  );
}
