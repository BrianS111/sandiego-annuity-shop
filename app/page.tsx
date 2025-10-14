import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <section className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          San Diego Annuity Shop
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          Independent, local annuity and CD-alternative specialists helping San Diego
          retirees protect savings and create guaranteed income.
        </p>

        <div className="mt-8 space-y-2 text-slate-700">
          <p>
            <strong>Call:</strong>{" "}
            <a
              href="tel:+16193576823"
              className="text-blue-600 hover:underline"
            >
              (619) 357-6823
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:brian@sandiegoannuityshop.com"
              className="text-blue-600 hover:underline"
            >
              brian@sandiegoannuityshop.com
            </a>
          </p>
          <p>
            <strong>Service Area:</strong> Greater San Diego County
          </p>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          <p>Brian Schafer CA Insurance License #0G93445</p>
          <p>Insurance-only — Not investment advice.</p>
        </div>
      </section>
    </main>
  );
}
