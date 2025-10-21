import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import { ArrowBigDown } from "lucide-react";
import { Sprout } from "lucide-react";
import { Wallet } from "lucide-react";
import { Users } from "lucide-react";
import { TrendingUp } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Banknote } from "lucide-react";
import Image from "next/image";
import taxadv from "../../public/images/taxadvnobg.png";
import ellipse from "../../public/images/ellipse.png";
import Link from "next/link";

export const metadata = {
  title: "Indexed Universal Life (IUL) Insurance · San Diego Annuity Shop",
  description:
    "Learn how IUL policies offer tax-free growth, living benefits, and lifetime protection. Compare top IUL options in San Diego.",
};

export default function Page() {
  return (
    <main>
      <Section>
        <h1 className="font-bold tracking-tight  text-[4vw] pt-[15vh] text-[var(--foreground)] text-center">
          Indexed Universal Life (IUL)
        </h1>
        <h2>Smarter growth. Tax-free flexibility. Protection that adapts.</h2>
        <p className="p-section">
          Indexed Universal Life (IUL) policies combine market-linked growth with long-term tax
          advantages giving you control, liquidity, and flexibility your 401(k) can't match.
        </p>
        <h2>Not your average life insurance.</h2>
        <p className="p-section">
          IUL isn't about a “death benefit” you'll never see. It's about building a living financial
          tool that grows tax-deferred, can be accessed tax-free, and provides permanent protection
          for the people you care about.
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="text-[8vw] lg:text-[5vw] text-[var(--foreground)]">
            <strong>Tax-Free Growth</strong>
          </div>
          <div>
            <ArrowBigDown className="w-auto lg:h-[10vw] h-[14vw]" />
          </div>
          <div className="text-[8vw] lg:text-[5vw] text-[var(--foreground)]">
            <strong>Tax-Free Income</strong>
          </div>
          <div>
            <ArrowBigDown className="w-auto lg:h-[10vw] h-[14vw]" />
          </div>
          <div className="text-[8vw] lg:text-[5vw] text-[var(--foreground)]">
            <strong>Tax-Free Legacy</strong>
          </div>
        </div>
        <h2>Borrow your cash value and still earn growth on it</h2>
        <p className="p-section">
          With an IUL, your cash value keeps earning interest even when you borrow against it.
          Instead of withdrawing funds, you can borrow from your policy while your money stays
          invested and continues to compound. It's the foundation of the “be your own bank” strategy
          — liquidity without giving up performance.
        </p>
        <h2>
          Growth. <br /> Access.
          <br /> Legacy.
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 items-center max-w-max p-3 lg:p-10">
            <div>
              <Sprout className="w-auto h-[20vw] lg:h-[14vw]" />
            </div>
            <div className="flex flex-col">
              <div className="w-[9vw] text-[8vw] lg:text-[7vw] text-[var(--foreground)] ">
                Growth
              </div>
              <div className="text-[3vw] lg:text-[2vw]">
                Earn interest linked to market performance without the risk of market loss.
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-center max-w-max p-3 lg:p-10">
            <div>
              <Wallet className="w-auto h-[20vw] lg:h-[14vw]" />
            </div>
            <div className="flex flex-col">
              <div className="w-[9vw] text-[8vw] lg:text-[7vw] text-[var(--foreground)] ">
                Access
              </div>
              <div className="text-[3vw] lg:text-[2vw]">
                Use policy loans or withdrawals to supplement income tax-free in retirement.
              </div>
            </div>
          </div>
          <div className="flex gap-10 items-center max-w-max p-3 lg:p-10">
            <div>
              <Users className="w-auto h-[20vw] lg:h-[14vw]" />
            </div>
            <div className="flex flex-col">
              <div className="w-[9vw] text-[8vw] lg:text-[7vw] text-[var(--foreground)] ">
                Legacy
              </div>
              <div className="text-[3vw] lg:text-[2vw]">
                Your loved ones receive an income-tax-free benefit, no matter what happens.
              </div>
            </div>
          </div>
        </div>
        <h2>Borrow from strength — not from weakness.</h2>
        <p className="p-section">
          When markets are down, liquidating investments can lock in losses. With an Indexed
          Universal Life policy, you can access your policy's cash value through loans instead,
          letting your other assets recover while your policy continues earning indexed interest.
        </p>

        <div className="flex flex-col lg:flex-row gap-7">
          <div className="lg:text-[4vh] text-[3vh] flex gap-4 items-center">
            <Banknote className="w-auto h-[10vh] lg:h-[15vh]" /> Access funds anytime
          </div>
          <div className="lg:text-[4vh] text-[3vh] flex gap-4 items-center">
            <TrendingUp className="w-auto h-[10vh] lg:h-[15vh]" />
            Let your investments rebound
          </div>
          <div className="lg:text-[4vh] text-[3vh] flex gap-4 items-center">
            <ShieldCheck className="w-auto h-[10vh] lg:h-[15vh]" />
            Keep protection intact
          </div>
        </div>
        <div className="flex justify-center mt-30 ">
          <Image
            width={612}
            src={taxadv}
            className="w-full max-w-[612px] h-auto"
            alt="It's not what you earn, it's waht you keep. 9% growth from a traditional account will net 6.8%. 9% growth from an IUL will net 9%"
          />
        </div>
        <p className="p-section">
          Most people focus on how much their money earns but what matters even more is how much you
          actually keep. If you earn 9% in a traditional investment account, you might only net
          around 6-7% after federal and state taxes. Over time, that tax drag can cut your long-term
          wealth by 30-40%.
          <br />
          <br />
          Indexed strategies like IULs or tax-free income designs help reduce that drag allowing
          your gains to grow without annual taxation and giving you access to your money later
          without triggering taxable events.
        </p>
        <p className="p-section italic">
          <strong>
            Because smart retirement planning isn't just about chasing returns, it's about building
            tax-efficient wealth.
          </strong>
        </p>
        <h2>Protection you can use while you're alive.</h2>
        <p className="p-section">
          Modern IULs include living benefit riders that let you access part of your death benefit
          early in case of a chronic, critical, or terminal illness. That means you can use your
          policy to cover medical costs, home care, or income replacement without depleting your
          savings or investments.
        </p>
        <h2>Build your own tax-free plan.</h2>
        <p className="p-section mb-25">
          We'll walk you through how an IUL can work for your goals, growth, protection, or
          legacy—without pressure or jargon.
        </p>
        <Link
          href="/#contact-form"
          scroll={true}
          className="  w-[300px] group cursor-pointer mb-[25vh] mt-[10vh] "
        >
          <div className="translate-y-[25%] cursor-pointer absolute left-[50%] translate-x-[-50%] text-[color:var(--foreground)] disabled:opacity-60 text-2xl group-hover:text-[#5C94BF] group-hover:[text-shadow:0_0_6px_rgba(37,99,235,0.45)] duration-400">
            Start my IUL Plan
          </div>
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
