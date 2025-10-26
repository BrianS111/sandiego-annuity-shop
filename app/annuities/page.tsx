import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import { Activity } from "lucide-react";
import { Snail } from "lucide-react";
import { ChartNoAxesColumnIncreasing } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { TrainTrack } from "lucide-react";
import { Users } from "lucide-react";
import { Hourglass } from "lucide-react";
import { ShieldUser } from "lucide-react";
import bracket from "../../public/images/bracketnobg.png";
import Image from "next/image";
import { MessageCircleQuestionMark } from "lucide-react";
import { Check } from "lucide-react";
import ellipse from "../../public/images/ellipse.png";
import Link from "next/link";
export const metadata = {
  title: "Fixed Annuities & CD Alternatives · San Diego Annuity Shop",
  description:
    "Compare fixed annuities, MYGAs, and income options to protect your savings and earn guaranteed returns in San Diego.",
};

export default function Page() {
  return (
    <main>
      <Section>
       

        <h1 className="font-bold tracking-tight  text-[4vw] pt-[10vh] lg:pt-[15vh] text-[var(--foreground)] text-center">
          Fixed & Indexed Annuities
        </h1>

        <h2 className="mt-4 text-[7vw] pt-[1vh] font-playfair text-[var(--foreground)]">
          Annuities have evolved. These arent the ones your grandfather bought.
        </h2>
        <p className="p-section">
          Today's fixed and indexed annuities combine guaranteed protection with market-linked
          growth helping you grow your savings safely and predictably.
        </p>
        <h2 className="mt-4 text-[7vw] pt-[15vh] font-playfair text-[var(--foreground)] mb-[3vh]">
          The rules of retirement have changed.
        </h2>
        <div className="flex gap-4">
          <div className="border-2 rounded border-[var(--foreground) p-4 w-[50%]">
            <div className="flex items-center w-full justify-center">
              <Activity className="h-[7vw] lg:h-[5vw] w-[auto] " />
            </div>
            <p className="pt-5 text-[3vw] text-center">
              Traditional portfolios ride the ups and downs of the market.
            </p>
          </div>
          <div className="border-2 rounded border-[var(--foreground) p-4 w-[50%]">
            <div className="flex items-center w-full justify-center">
              <Snail className="h-[7vw] lg:h-[5vw]  w-[auto]  " />
            </div>
            <p className="pt-5 text-[3vw] text-center">CDs and bonds barely outpace inflation.</p>
          </div>
        </div>
        <p className="p-section">
          Modern annuities are designed to fill that gap giving you upside potential with protection
          from loss.
        </p>
        <h2 className="mt-[3vh] text-[7vw] pt-[10vh] font-playfair text-[var(--foreground)] mb-[3vh]">
          Growth.
          <br />
          Protection.
          <br />
          Flexaility.
          <br />
        </h2>
        <div className="flex flex-col lg:flex-row gap-5 justify-stretch items-stretch lg:items-ev">
          <div className="flex items-center lg:block border-2 rounded p-7 flex-1 gap-5 xl:pb-10 ">
            <div className="lg:flex lg:justify-center">
              <ChartNoAxesColumnIncreasing className="w-auto h-[12vw] lg:h-[5vw]" />
            </div>
            <div>
              <div className="lg:text-center  text-[5vw] lg:text-[3vw] lg:py-5">Growth</div>
              <p className="lg:text-[2vw] lg:text-center">
                Earn interest based on stock-market performance without owning stocks.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:block border-2 rounded p-7 xl:pb-10 flex-1 gap-5">
            <div className="lg:flex lg:justify-center">
              <ShieldCheck className="w-auto  h-[12vw] lg:h-[5vw]" />
            </div>
            <div>
              <div className="lg:text-center text-[5vw] lg:text-[3vw] lg:py-5">Protection</div>
              <p className="lg:text-[2vw] lg:text-center">
                When markets fall, your gains stay locked in.
              </p>
            </div>
          </div>
          <div className="flex items-center lg:block border-2 rounded p-7 flex-1 gap-5 xl:pb-10">
            <div className="lg:flex lg:justify-center">
              <TrainTrack className="w-auto h-[12vw] lg:h-[5vw]" />
            </div>
            <div>
              <div className="lg:text-center  text-[5vw] lg:text-[3vw] py- lg:py-5 ">
                Predictability
              </div>
              <p className="lg:text-[2vw] lg:text-center">
                Know that your money is safe, your income is secure, and your plan stays on track.
              </p>
            </div>
          </div>
        </div>
        <h2 className="mt-[3vh] text-[7vw] pt-[15vh] font-playfair text-[var(--foreground)] mb-[3vh]">
          Modern Indexing prevents withdrawing during market downturns
        </h2>
        <p className="p-section">
          <strong>Sequence of returns risk</strong> is the danger of taking withdrawals while the
          market is down — early losses can compound and make it difficult to recover. With{" "}
          <strong>modern indexing</strong>, your gains lock in annually, so even if the market
          falls, your next year starts from your last high, not a new low. That helps protect your
          income stream when timing matters most.
        </p>

        <div className="flex justify-center ">
          <div className="border rounded-xl  shadow-lg  text-left lg:w-[75vw] relative bg-neutral-50">
            <h3 className="font-semibold text-[5vw] lg:text-[4vw]  text-center rounded-t-xl py-4 px-2 lg:py-8 bg-[#ededed] border-b-1">
              Why sequence risk matters
            </h3>
            <ul className=" text-slate-600 flex">
              <li className="text-center bg-[#d4d3d3] rounded-bl-xl p-3 lg:p-6 text-[var(--foreground)] text-[3vw] lg:text-[2vw]  flex-1 flex flex-col items-center gap-3">
                <Users className="w-auto h-[7vw] lg:h-[3vw]" />
                Two investors can earn the same average return yet end with very different results.
              </li>
              <li className="text-center p-3 lg:p-6  text-[var(--foreground)] text-[3vw] lg:text-[2vw]  flex-1 flex flex-col items-center  gap-3">
                <Hourglass className="w-auto h-[7vw] lg:h-[3vw]" />
                Losses early in retirement hurt more than losses later.
              </li>
              <li className="text-center bg-[#d4d3d3] text-[3vw] lg:text-[2vw] rounded-br-xl p-3 lg:p-6  text-[var(--foreground)] flex-1 flex flex-col items-center  gap-3">
                <ShieldUser className="w-auto h-[7.5vw] lg:h-[3.5vw]" />
                Indexed strategies help keep your income on track even after market dips.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="mt-[3vh] text-[7vw] pt-[15vh] font-playfair text-[var(--foreground)] mb-[3vh]">
          Who uses Annuities Today?
        </h2>
        <div className=" flex flex-col items-end gap-[10vw] lg:gap-[5vw]">
          <div className="flex items-start h-[15vw] gap-1">
            <Image src={bracket} alt="bracket" height={500} className="h-[98%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Lock in gains before you start income withdrawals.
              </p>
              <div className="text-var(--foreground)] text-[5vw]  flex items-end">Pre-Retirees</div>
            </div>
          </div>

          <div className="flex items-start h-[15vw]  gap-1 mr-[25%]">
            <Image src={bracket} alt="bracket" height={500} className="h-[98%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Earn more without sacrificing safety.
              </p>
              <div className="text-var(--foreground)] text-[5vw] nowrap  flex items-end">
                CD or Bond holders
              </div>
            </div>
          </div>

          <div className="flex items-start h-[15vw]  gap-1">
            <Image src={bracket} alt="bracket" height={500} className="h-[98%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Turn your savings into guaranteed lifetime income.
              </p>
              <div className="text-var(--foreground)] text-[5vw]  flex items-end">Retirees</div>
            </div>
          </div>
        </div>
        <h2 className="mt-[3vh] text-[7vw] font-playfair text-[var(--foreground)] mb-[3vh]">
          You've heard the rumors. Today's annuities are built differently.
        </h2>

        <div>
          <ul className="flex flex-col gap-8 lg:items-center lg:gap-20">
            <li className="flex flex-col gap-5 ">
              <div className="flex items-center gap-3">
                <MessageCircleQuestionMark className="min-w-[4vw] min-h-[4vw] lg:h-[2vw]" />
                <span className="text-[4vw] lg:text-[2vw]">Myth: “Annuities have huge fees.”</span>
              </div>
              <div className="flex gap-3">
                <Check className="min-w-[5.5vw] min-h-[5.5vw] lg:min-w-[4vw] lg:min-h-[4vw]" />
                <span className="text-[4vw] lg:text-[2vw]">
                  Reality: Many modern annuities have no annual fees and include optional benefits
                  only when you need them.
                </span>
              </div>
            </li>
            <li className="flex flex-col lg:ml-[25%] gap-5">
              <div className="flex items-center gap-3">
                <MessageCircleQuestionMark className="min-w-[4vw] min-h-[4vw] lg:h-[2vw]" />
                <span className="text-[4vw] lg:text-[2vw]">
                  Myth:“You lose access to your money.”
                </span>
              </div>
              <div className="flex  gap-3">
                <Check className="min-w-[5.5vw] min-h-[5.5vw] lg:min-w-[4vw] lg:min-h-[4vw]" />
                <span className="text-[4vw] lg:text-[2vw]">
                  Reality: Most contracts include free annual withdrawals and flexible terms. You're
                  not locked in forever.
                </span>
              </div>
            </li>
            <li className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <MessageCircleQuestionMark className="min-w-[4vw] min-h-[4vw] lg:min-h-[4vw] " />
                <span className="text-[4vw] lg:text-[2vw]">Myth:“Returns are low”</span>
              </div>
              <div className="flex gap-3">
                <Check className="min-w-[5.5vw] min-h-[5.5vw] lg:min-w-[4vw] lg:min-h-[4vw] " />
                <span className="text-[4vw] lg:text-[2vw]">
                  Reality: Index strategies can track global markets with participation rates that
                  share in the upside while keeping your principal protected.
                </span>
              </div>
            </li>
          </ul>
        </div>
        <h2>Ready to see what a modern annuity could do for you?</h2>
        <p className="p-section mb-25">
          We'll walk you through how these products really work with no pressure and no jargon.
        </p>
        <Link
          href="/#contact-form"
          scroll={true}
          className="w-[300px] group cursor-pointer mt-[10vh]"
        >
          <button className="translate-y-[25%] cursor-pointer absolute left-[50%] translate-x-[-50%] text-[color:var(--foreground)] disabled:opacity-60 text-2xl group-hover:text-[#5C94BF] group-hover:[text-shadow:0_0_6px_rgba(37,99,235,0.45)] duration-400">
            Contact
          </button>
          <div className="cursor-pointer w-[300px] absolute  left-[50%] translate-y-[-25%] translate-x-[-50%] rotate-[18deg] group-hover:rotate-0 duration-400">
            <Image src={ellipse} width={300} alt="click to submit form" className="w-[300px]" />
          </div>
          <div className="w-[300px] absolute  left-[50%] translate-x-[-50%] translate-y-[-25%]">
            <Image
              src={ellipse}
              width={300}
              alt="click to submit form"
              className="w-[300px] rotate-[-18deg] group-hover:rotate-0 duration-400"
            />
          </div>
        </Link>
        <div className="mb-[25vh]"></div>
      </Section>
    </main>
  );
}
