import Section from "./components/Section";
import FadeIn from "./components/FadeIn";
import fiachart from "../public/images/fiachart.png";
import Image from "next/image";
import bankingcircle from "../public/images/bankingcircle.png";
import { ArrowBigDown } from "lucide-react";
import ContactForm from "./components/ContactForm";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Section>
        <div className="flex  items-center justify-center pt-[15vw] xl:pt-[18vw] md:pt-[150px]">
          <h1 className=" mb-15 text-[3vw]  w-[85%] text-center italic ">
San Diego Annuity Shop is an independent, local retirement income agency helping San Diego retirees protect savings, secure income, and explore safe CD alternatives.
          </h1>
        </div>

        <nav className="justify-center flex-col items-center mb-[200px]">
          <Link
            href="/annuities"
            className="font-playfair flex justify-center text-[10vw] xl:text-[7vw] text-[var(--foreground)] hover:text-[var(--blue)]"
          >
            Annuities
          </Link>
          <Link href="/iul" className="font-playfair text-[10vw] xl:text-[7vw] flex justify-center text-[var(--foreground)] hover:text-[var(--blue)]">
            IUL
          </Link>
          <Link
            href="/private-banking"
            className="font-playfair text-[10vw] flex justify-center xl:text-[7vw] text-[var(--foreground)] hover:text-[var(--blue)]"
          >
            Private-Banking
          </Link>
          <Link
            href="life-insurance"
            className="font-playfair text-[10vw] flex justify-center xl:text-[7vw] text-[var(--foreground)] hover:text-[var(--blue)]"
          >
            Life Insurance
          </Link>
        </nav>
        <div className="flex flex-col  mb-[100px]">
          <p className="text-[5vw] xl:text-[3vw] mb-[25px] lg:mb-[50px] italic">
           <strong>Modern fixed and indexed annuities</strong> from top-rated carriers give you peace of mind with
            no market losses, steady growth, and protection powered by modern indexing.
          </p>
          <span className="flex justify-center text-[3vw] xl:text-[2vw]">
            When markets drop, your gains stay locked in.
          </span>
        </div>
        <div className="flex justify-center mb-[200px] lg:mb-[300px]">
          <Image
            src={fiachart}
            alt="Chart showing an annuity making gains, locking them in and not taking losses"
            width={500}
          />
        </div>
        <div className="flex flex-col  mb-[100px]">
          <p className="text-[5vw] xl:text-[3vw] mb-[25px] lg:mb-[50px] italic">
            <strong>Indexed Universal Life </strong>combines market-linked growth with long-term tax advantages
            offering control, liquidity, and flexibility that traditional retirement accounts can't
          </p>
          <span className="flex justify-center text-[3vw] xl:text-[2vw]">
            From accumulation to retirement to legacy, it all grows tax-free
          </span>
        </div>
        <div>
          <ul className="flex flex-col justify-center items-center mb-[200px] lg:mb-[300px]">
            <li className="text-[10vw] xl:text-[7vw] font-playfair">Tax-free Growth</li>
            <li>
              <ArrowBigDown className="w-auto h-[100px] lg:h-[200px]" />
            </li>
            <li className="text-[10vw] xl:text-[7vw] font-playfair">Tax-free Income</li>
            <li>
              <ArrowBigDown className="w-auto h-[100px] lg:h-[200px]"/>
            </li>
            <li className="text-[10vw] xl:text-[7vw] font-playfair">Tax-free Legacy</li>
          </ul>
          <div className="flex flex-col  mb-[100px]">
            <p className="text-[5vw] xl:text-[3vw] mb-[25px] lg:mb-[50px] italic">
             <strong>Private banking strategies</strong> create predictable growth while letting your money stay in
              motion earning returns while you access it through participating loans.{" "}
            </p>
            <span className="flex justify-center text-[3vw] xl:text-[2vw]">
              Your money works harder when it's never sitting still.
            </span>
          </div>
          <div className="flex justify-center   lg:mb-[100px] ">
            <Image
              src={bankingcircle}
              alt="Borrow, Invest, Grow, repay"
             className="h-[200px] md:h-[300px] lg:h-[350px] w-auto animate-spin [animation-duration:20s] "
              width={300}
            />
          </div>
        </div>
        <div className=" w-[75%]">
          <h2 className="font-playfair xl:text-[7vw] lg:mb-[100px]">
            Find your perfect protection + growth plan
          </h2>
        </div>

        <Section id="contact-form" className="flex flex-col justify-center mb-[200px]">
          <ContactForm />

        </Section>
      </Section>
    </main>
  );
}
