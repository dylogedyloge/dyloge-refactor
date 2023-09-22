"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BsFillFileTextFill,
  BsFillCameraReelsFill,
  BsGrid1X2,
  BsBookHalf,
  BsGear,
  BsArchive,
  BsSun,
  BsMoonStars,
} from "react-icons/bs";
import { GiDualityMask } from "react-icons/gi";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

import { usePathname } from "next/navigation";
import { FreeCounter } from "@/components/free-counter";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    icon: BsGrid1X2,
    href: "/dashboard",
    color: "text-stone-300",
  },
  {
    label: "Screen Play",
    icon: BsFillCameraReelsFill,
    href: "/screenPlay",
    color: "text-stone-300",
  },
  {
    label: "Stage Play",
    icon: GiDualityMask,
    color: "text-stone-300",
    href: "/stagePlay",
  },
  {
    label: "Story",
    icon: BsBookHalf,
    color: "text-stone-300",
    href: "/story",
  },

  {
    label: "Article",
    icon: BsFillFileTextFill,
    color: "text-stone-300",
    href: "/article",
  },
  {
    label: "History",
    icon: BsArchive,
    href: "/history",
  },
  {
    label: "Settings",
    icon: BsGear,
    href: "/settings",
  },
];

export const Sidebar = ({}: // apiLimitCount = 0,
// isPro = false,
{
  // apiLimitCount: number;
  // isPro: boolean;
}) => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full dark:bg-stone-900 bg-stone-200  ">
      <div className="px-3 py-2 flex-1">
        <div className="flex items-start justify-between">
          {" "}
          <Link href="/dashboard" className="flex items-center pl-3 mb-14">
            <div className="relative h-8 w-8 mr-4">
              <Image fill alt="Logo" src="/logo.png" />
            </div>
            <h1 className="text-2xl font-bold prose-stone">Dyloge</h1>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            className=" flex justify-center items-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <div className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">
              <BsSun />
            </div>
            <div className="absolute  rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100">
              <BsMoonStars />
            </div>
          </Button>
        </div>

        <div className=" prose-stone">
          {routes.map((route, index) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3  w-full justify-start font-medium cursor-pointer hover:text-stone-300 hover:bg-stone-800 rounded-sm transition",
                pathname === route.href ? "text-stone-300 bg-stone-800" : "",
                index === 1 || index === 5 ? "mt-8" : "mt-1"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-4 w-4 mr-3")} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter
      //apiLimitCount={apiLimitCount} isPro={isPro}
      />
    </div>
  );
};
