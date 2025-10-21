import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
import bankingchart from "../../public/images/bankingchart.png";
import bankingchart2 from "../../public/images/bankingchart2.png";
import bankingcirclebig from "../../public/images/bankingcirclebig.png";
import ellipse from "../../public/images/ellipse.png";
import { Landmark } from "lucide-react";
import Link from "next/link";


export const metadata = {
  title: "Private Banking & Infinite Banking Strategies · San Diego Annuity Shop",
  description:
    "Learn how to be your own bank using high-cash-value life insurance. Store, grow, and borrow against your money while it keeps earning interest.",
};

export default function Page() {
  return (
    <main>
      <Section>
        <h1 className="font-bold tracking-tight  text-[4vw] pt-[15vh] text-[var(--foreground)] text-center">
          Be Your Own Bank. The Power of Private Banking
        </h1>
        <h2>Build a system where your dollars never stop working even when you use them.</h2>
        <p className="p-section">
          Imagine if every dollar you saved could work for you twice — once when you spend it, and
          again as it continues to grow. Private Banking is a time-tested wealth strategy that helps
          you store money in a safe, tax-advantaged account that grows continuously while giving you
          the ability to borrow against your own cash value for major purchases, investments, or
          opportunities. Instead of paying interest to banks, you redirect that value back to
          yourself.
        </p>
        <div className="flex  justify-center">
          <Image src={bankingchart} alt="Save, grow, leverage" width={612} />
        </div>
        <h2>See how Private Banking compares to traditional saving methods:</h2>
        <div className="flex justify-center">
          <Image src={bankingchart2} alt="Save, grow, leverage" width={612} />
        </div>
        <p className="p-section">
          Unlike traditional savings or investment accounts, private banking strategies use
          contractual guarantees rather than market speculation. You maintain liquidity and control
          of your capital while earning uninterrupted growth — even when you access your funds. Over
          time, this system can help create generational wealth and a tax-free stream of retirement
          income.
        </p>
        <h2>Be the bank</h2>
        <div className="flex justify-center">
          <div className="flex flex-col md:w-[60%] items-center  border-2 p-5 md:p-10 rounded-xl shadow-lg gap-8">
            <div>
              <Landmark className="w-auto h-[15vw] " />
            </div>
            <p className="text-center text-[3vw]">
              The same financial principles banks and corporations have used for over a century are
              available to everyday families when structured correctly
            </p>
          </div>
        </div>
        <h2>Who Uses Private Banking?</h2>
        <p className="p-section">
          Families, entrepreneurs, and professionals who want control of their money instead of
          relying on traditional banks.
        </p>
        <h2>What It's Not</h2>
        <p className="p-section">
          Not an investment account. Not a get-rich-quick idea. It's a conservative system built on
          guaranteed compounding. Use it as a source to borrow against to seize other investment
          opportunities.
        </p>
        <div className="flex justify-center">
          <Image
            src={bankingcirclebig}
            alt="Borrow, invest, grow, save"
            className="animate-spin [animation-duration:20s]"
          />
        </div>
        <h2>Ready to explore how private banking fits into your financial plan?</h2>
        <p className="p-section mb-25">
          Let's design a custom strategy that fits your goals and income flow.
        </p>
        <Link
          href="/#contact-form"
          scroll={true}
          className="  w-[300px] group cursor-pointer mb-[25vh] mt-[10vh] "
        >
          <button className=" cursor-pointer absolute left-[50%] translate-x-[-50%] text-[color:var(--foreground)] disabled:opacity-60  group-hover:text-[#5C94BF] group-hover:[text-shadow:0_0_6px_rgba(37,99,235,0.45)] duration-400">
            Explore Private <br /> Banking Options
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
        </Link>
        <div className="mb-[25vh]"></div>
      </Section>
    </main>
  );
}
