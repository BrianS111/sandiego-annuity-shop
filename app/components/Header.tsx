"use client";
import Image from "next/image";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { useState, useCallback } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="fixed top-0 z-100 ">
      <div className="fixed z-100">
        <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
      {/* <div className=" relative h-30 z-40"> */}
      <div className="bg-black">
        <div className="pointer-events-none fixed top-0 inset-x-0 bottom-[-16px] h-[60vw] lg:h-[30vw] bg-gradient-to-b from-[color:var(--background)]/100 from-20% to-transparent to-50%" />
        <div
          onClick={openMenu}
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label="Open menu"
          className="z-50 fixed top-1 md:top-3  left-1/2 -translate-x-1/2  cursor-pointer w-[10vw] lg:w-[7vw] xl:w-[5vw] h-[25px]"
        >
          <div className="w-[10vw] lg:w-[7vw] xl:w-[5vw] h-[1px] md:h-[2px]  bg-[#1a1a1a] z-20 fixed top-4 md:top-3 left-1/2 -translate-x-1/2 "></div>
          <div className="w-[10vw] lg:w-[7vw] xl:w-[5vw] h-[1px] md:h-[2px]  bg-[#1a1a1a] z-20 fixed top-5 left-1/2 -translate-x-1/2 "></div>
        </div>

        <Link
          href="/"
          className="fixed top-5  left-1/2 -translate-x-1/2 w-[45vw] lg:w-[30vw] xl:w-[25vw] block z-40"
        >
          <Image
            src="/images/SanDiegoAnnuityShop_Logo_Web_1500x750-removebg.png"
            alt="San Diego Annuity Shop Logo"
            width={1500}
            height={750}
            priority
            className="h-auto object-contain"
          />
        </Link>
      </div>
      {/* <p className="text-[#25314C] text-[5px] font-light tracking-wide fixed top-22 left-1/2 -translate-x-1/6 w-full">
        Smarter Protection. Built for Growth™
      </p> */}

    </header>
  );
}
