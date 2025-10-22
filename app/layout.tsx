import "./globals.css";
import Image from "next/image";
import { SiLinkedin, SiFacebook, SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import Cwicon from "../public/images/cwicon.png";
import Topicon from "../public/images/topicon.png";
import Header from "./components/Header";
import Link from "next/link";
import ScrollToTop from "./components/ScrollToTop";

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.sandiegoannuityshop.com"),
  title: { default: "San Diego Annuity Shop", template: "%s · San Diego Annuity Shop" },
  description:
    "Annuities, IUL, private banking, and life insurance for San Diego families and professionals.",
  openGraph: { type: "website", siteName: "San Diego Annuity Shop" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <html lang="en" className={playfair.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Cloudflare Turnstile loader */}
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
        {/* Callback to copy Turnstile token into the hidden input */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.onTurnstileVerify = function(token){
                var el = document.getElementById('cf_token');
                if (el) el.value = token;
              };
            `,
          }}
        />
      </head>
      <body >
        <div className="absolute z-100 ">
          <Header />
        </div>

        {/* LocalBusiness / InsuranceAgency JSON-LD */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              name: "San Diego Annuity Shop",
              url: "https://www.sandiegoannuityshop.com",
              areaServed: "San Diego County",
              telephone: "+1-619-357-6823",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Diego",
                addressRegion: "CA",
                addressCountry: "US",
              },
            }),
          }}
        />

        <main>{children}</main>

        <footer className=" flex flex-col section-wrap pt-[3vh] w-[100%]  text-sm text-[var(--background)] bg-[var(--foreground)] h-[101vh] border-t border-slate-200 text-center relative z-100">
          <ul className="w-full  flex flex-col items-start gap-3">
            <li>(619) 357-6823</li>
            <li>brian@sandiegoannuityshop.com</li>
            <li>sandiegoannuityshop.com</li>
            <li>Brian Schafer • CA #0G93445</li>
            <li>Insurance-only — Not investment advice.</li>
          </ul>
          {/* <p className="mb-[2vh]">Give us a follow—we plan to start posting educational content</p> */}
          <div className="flex gap-[5vw] text-[color:var(--background)] mt-[5vh] mb-[5vh]">
            <a
              href="https://www.facebook.com/profile.php?id=61582435163324"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiFacebook className="hover:text-[#1877F2] h-[6vh] w-auto" />
            </a>
            <a
              href="https://www.instagram.com/sandiegoannuityshop"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiInstagram className="hover:text-[#E4405F]  h-[6vh] w-auto" />
            </a>
            <a
              href="https://www.youtube.com/@SanDiegoAnnuityShop"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiYoutube className="hover:text-[#FF0000] h-[6vh] w-auto" />
            </a>
            <a
              href="https://www.tiktok.com/@sandiegoannuityshop"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiTiktok className="hover:text-black h-[6vh] w-auto" />
            </a>
          </div>
          <div className="flex flex-col justify-between items-stretch  h-200 pb-[3vh]">
          <nav className="flex flex-col items-start gap-3">
            <Link href="/annuities" className="text-[var(--background)] text-[4vh]">
              Annuities
            </Link>
            <Link href="/iul" className="text-[var(--background)] text-[4vh]">
              IUL
            </Link>
            <Link href="/private-banking" className="text-[var(--background)] text-[4vh]">
              Private Banking
            </Link>
            <Link href="/life-insurance" className="text-[var(--background)] text-[4vh]">
              Life Insurance
            </Link>
          </nav>
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-3">
              <Image src={Cwicon} alt="copywright" />
              <div className="w-full flex">2025 San Diego Annuity Shop</div>
            </div>
            <ScrollToTop />
          </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
