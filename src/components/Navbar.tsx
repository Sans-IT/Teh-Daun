import React from "react";
import Link from "next/link";
import SideBarMenu from "./SidebarMenu";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="z-50 bg-white w-full h-16 shadow border-b-zinc-300 fixed top-0">
      <div className="flex justify-between w-full items-center h-full max-w-6xl sm:max-w-7xl mx-auto px-2.5 sm:px-3">
        <Link
          href="/"
          className="font-berkshire font-bold text-primary text-3xl flex items-center gap-2"
        >
          <Image height={28} width={28} src="/tehdaun.png" alt="Teh Daun" />
          <h1>Teh Daun</h1>
        </Link>

        <SideBarMenu />
      </div>
    </nav>
  );
}

export default Navbar;
