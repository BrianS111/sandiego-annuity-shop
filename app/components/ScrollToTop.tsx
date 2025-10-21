'use client'
import Image from "next/image";
import Topicon from "../../public/images/topicon.png";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className="cursor-pointer transition-transform duration-300 hover:scale-105"
      role="button"
      aria-label="Scroll to top"
    >
      <Image src={Topicon} alt="Go to top" />
    </div>
  );
}