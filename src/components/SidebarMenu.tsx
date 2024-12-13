"use client";
import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBarMenu() {
  const [SidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [pathName, setPathName] = useState<string>("");
  const [trigger, setTrigger] = useState<boolean>(false);
  const router = usePathname();

  useEffect(() => {
    setPathName(window.location.pathname);
  }, [SidebarOpen, router]);

  const clickListItem = () => {
    setTrigger(!trigger);
  };

  const menuList = [
    { name: "Home", link: "/" },
    { name: "Tentang Kami", link: "/about-us" },
    { name: "Varian Rasa", link: "/variant" },
    { name: "Gabung Mitra", link: "/franchise" },
    { name: "Cabang", link: "/cabang" },
  ];

  return (
    <>
      {/* Sidebar for large screens */}
      <nav className="hidden md:block ms-auto">
        <ul className="flex space-x-8 font-berkshire text-lg">
          {menuList.map((menu, index) => (
            <li
              onClick={clickListItem}
              key={index}
              className={cn(
                pathName === menu.link
                  ? "text-primary"
                  : "" + " hover:text-primary"
              )}
            >
              <Link href={menu.link}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar Sheet for small screens */}
      <Sheet onOpenChange={setSidebarOpen} open={SidebarOpen}>
        <SheetTrigger>
          <div
            className={cn(
              `${
                SidebarOpen ? "bg-primary" : ""
              } border-2 border-primary rounded p-1 md:hidden block`
            )}
          >
            <Menu
              className={cn(`${SidebarOpen ? "text-white" : "text-primary"}`)}
            />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* Loop through the menu list and apply active state */}
            {menuList.map((menu, index) => (
              <SheetTitle
                key={index}
                className={cn(`font-berkshire text-2xl
                  ${
                    pathName === menu.link
                      ? "text-primary"
                      : "" + " hover:text-primary"
                  }
                `)}
              >
                <Link href={menu.link} onClick={() => setSidebarOpen(false)}>
                  {menu.name}
                </Link>
              </SheetTitle>
            ))}
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
}
