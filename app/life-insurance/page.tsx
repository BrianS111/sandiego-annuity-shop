import Section from "../components/Section";
import FadeIn from "../components/FadeIn";
import Image from "next/image";
import bracket from "../../public/images/bracketnobg.png";
import ellipse from "../../public/images/ellipse.png";
import Link from "next/link";

export const metadata = {
  title: "Life Insurance in San Diego · Term, Mortgage & Final Expense",
  description:
    "Affordable life insurance solutions for San Diego families — term life, mortgage protection, final expense, and permanent coverage options.",
};

export default function Page() {
  return (
    <main>
      <Section>
        <h1 className="font-bold tracking-tight  text-[4vw] pt-[15vh] text-[var(--foreground)] text-center">
          Life Insurance for San Diego Families and Professionals
        </h1>
        <p className="p-section">
          From simple term coverage to lifelong protection, we help you secure what matters most
          with trusted guidance and local support.
        </p>

        <div className=" flex flex-col items-end gap-[10vh] md:gap-[15vh] lg:gap-[20vh] xl:gap-[25vh]">
          <div className="flex items-start h-[15vw] gap-1">
            <Image src={bracket} alt="bracket" height={500} className="h-[158%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Affordable coverage for 10-30 years — ideal for family income or mortgage
                protection.
              </p>
              <div className="text-var(--foreground)] text-[5vw]  flex items-end">Term Life</div>
            </div>
          </div>

          <div className="flex items-start h-[15vw]  gap-1 mr-[25%]">
            <Image src={bracket} alt="bracket" height={500} className="h-[128%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Tailored plans that cover your home's balance, often with living benefits.
              </p>
              <div className="text-var(--foreground)] text-[5vw] nowrap  flex items-end">
                Mortgage Protection
              </div>
            </div>
          </div>

          <div className="flex items-start h-[15vw]  gap-1">
            <Image src={bracket} alt="bracket" height={500} className="h-[128%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Simple, no-exam plans for funeral and end-of-life costs — easy approval for seniors.
              </p>
              <div className="text-var(--foreground)] text-[5vw]  flex items-end">
                Final Expense
              </div>
            </div>
          </div>
          <div className="flex items-start h-[15vw]  gap-1 mr-[25%]">
            <Image src={bracket} alt="bracket" height={500} className="h-[128%] w-auto pt-[2%]" />
            <div className="flex flex-col">
              <p className="text-var(--foreground)] text-[3vw] w-[40vw]">
                Lifetime protection with potential tax-free growth and cash value access.
              </p>
              <div className="text-var(--foreground)] text-[5vw] nowrap  flex items-end">
                Whole Life & IUL
              </div>
            </div>
          </div>
        </div>
        <p className="p-section mt-[5vh] md:mt-[10vh] lg:mt-[15vh] xl:mt-[20vh]">
          Whether you're starting a family, buying a home, or preparing for retirement, San Diego
          Annuity Shop offers personalized life insurance solutions for every stage of life. Our
          licensed agents help you compare plans, understand your options, and choose coverage that
          fits your goals and budget.
        </p>
        <h2 className="pb-25">
          Get a free quote today — no pressure, no pushy sales. Just honest guidance to help you
          protect what matters most.
        </h2>
        <Link
          href="/#contact-form"
          scroll={true}
          className="  w-[300px] group cursor-pointer mb-[25vh]"
        >
          <button className=" cursor-pointer translate-y-[-15%] absolute left-[50%] translate-x-[-50%] text-[color:var(--foreground)] disabled:opacity-60 text-lg group-hover:text-[#5C94BF] group-hover:[text-shadow:0_0_6px_rgba(37,99,235,0.45)] duration-400">
            Compare Life <br /> Insurance Plans
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
