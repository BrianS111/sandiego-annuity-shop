"use client";
import { X, Circle } from "lucide-react";
import ellipse from "../../public/images/ellipse.png";
import Image from "next/image";
import { SiLinkedin, SiFacebook, SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import logo from "../../public/images/SanDiegoAnnuityShop_Logo_Web_1500x750-removebg.png";
import { useEffect } from "react";
import Link from "next/link";

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export default function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  useEffect(() => {
    if (open) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const closeAndNavigate = () => onClose();

  return (
    <div
      className={[
        "fixed inset-0  z-50 flex flex-col items-center gap-[10vh] ",
        "bg-[#F8F5EF]",
        "transition-all duration-500 ease-[cubic-bezier(.22,.61,.36,1)]  ",
        open
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none",
        // open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      ].join(" ")}
    >
      <div className="flex flex-col items-center relative w-full pt-4">
        <Link onClick={onClose} href="/">
          <Image
            src={logo}
            alt="san diego annuity shop"
            className="absolute left-[5px] top-[5px]  xl:left-[0px] xl:top-[-10px] w-auto h-[70px] sm:h-[90px] md:h-[110px] lg-[h-130px] xl:h-[200px]"
            height={200}
          />
        </Link>
        <button onClick={onClose} aria-label="Close menu" className="cursor-pointer">
          <X className="w-[10vw] h-[10vw] md:w-[7vw] md:h-[7vw] lg:w-[5vw] lg:h-[5vw]" />
        </button>
        <nav aria-label="Main">
          <ul className="flex flex-col items-center space-y-4 text-center pt-10">
            <li>
              <Link
                href="/annuities"
                onClick={closeAndNavigate}
                className="text-[6vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] font-playfair  font-semibold hover:text-blue-600 transition-colors"
              >
                Annuities
              </Link>
            </li>
            <Circle fill="#1a1a1a" className="lg:h-[1vw] h-[2vw] " />
            <li>
              <Link
                href="/iul"
                onClick={closeAndNavigate}
                className="text-[6vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] font-playfair text-2xl font-semibold hover:text-blue-600 transition-colors"
              >
                IUL
              </Link>
            </li>
            <Circle fill="#1a1a1a" className="lg:h-[1vw]  h-[2vw]" />
            <li>
              <Link
                href="/private-banking"
                onClick={closeAndNavigate}
                className="text-[6vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] font-playfair text-2xl font-semibold hover:text-blue-600 transition-colors"
              >
                Private Banking
              </Link>
            </li>
            <li>
              <Circle fill="#1a1a1a" className="lg:h-[1vw] h-[2vw]" />
            </li>
            <li>
              <Link
                href="/life-insurance"
                onClick={closeAndNavigate}
                className="text-[6vw] md:text-[4vw] lg:text-[3vw] xl:text-[2vw] font-playfair text-2xl font-semibold hover:text-blue-600 transition-colors"
              >
                Life Insurance
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex relative flex-col  h-full justify-between w-full">
        <Link href="/#contact-form" onClick={onClose} scroll={true}>
          <div className="  w-[300px] group cursor-pointer ">
            <button className="translate-y-[25%] cursor-pointer absolute left-[50%] translate-x-[-50%] text-[color:var(--foreground)] disabled:opacity-60 text-2xl group-hover:text-[#5C94BF] group-hover:[text-shadow:0_0_6px_rgba(37,99,235,0.45)] duration-400">
              Contact
            </button>
            <div className="cursor-pointer w-[300px] absolute  left-[50%] translate-y-[-25%] translate-x-[-50%] rotate-[18deg] group-hover:rotate-0 duration-400">
              <Image src={ellipse} width={300} alt="click to submit form" className="w-[300px]" />
            </div>
            <div className=" w-[300px] absolute  left-[50%] translate-x-[-50%] translate-y-[-25%]   ">
              <Image
                src={ellipse}
                width={300}
                alt="click to submit form"
                className="w-[300px]   rotate-[-18deg] group-hover:rotate-0 duration-400"
              />
            </div>
          </div>
        </Link>
        <div className="px-15 flex  flex-col gap-5">
          <div>619-357-6823</div>
          <div>brian@sandiegoannuityshop.com</div>
          <div>sandiegoannuityshop.com</div>
          <div className="flex gap-5 text-[color:var(--background)] mb-8 ">
            <a
              href="https://www.facebook.com/profile.php?id=61582435163324"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="fill-[var(--foreground)] hover:fill-[#1877F2]" />
            </a>
            <a
              href="https://www.instagram.com/sandiegoannuityshop"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className={`fill-[var(--foreground)] hover:fill-[#E4405F]`} />
            </a>
            <a
              href="https://www.youtube.com/@SanDiegoAnnuityShop"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube className={`fill-[var(--foreground)] hover:fill-[#FF0000]`} />
            </a>
            <a
              href="https://www.tiktok.com/@sandiegoannuityshop"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok className={` fill-[var(--foreground)] hover:fill-[#760699]`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
