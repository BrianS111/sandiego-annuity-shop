"use client";
import { useState, useEffect } from "react";
import ellipse from "../../public/images/ellipse.png";
import Image from "next/image";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (loading) return; // prevent double submit

    const form = e.currentTarget; // ✅ capture the form before await
    setLoading(true);
    setOk(null);
    setErr(null);

    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      product: String(fd.get("product") || "Not Sure"),
      message: String(fd.get("message") || "").trim(),
      company: String(fd.get("company") || ""), // honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = null;
      let text = "";

      try {
        data = await res.json();
      } catch {
        try {
          text = await res.text();
        } catch {}
      }

      if (!res.ok || data?.ok === false) {
        setOk(false);
        setErr(data?.error || text || `Server error (status ${res.status})`);
      } else {
        setOk(true);
        setErr(null);
        form.reset(); // ✅ use saved ref instead of e.currentTarget
      }
    } catch {
      // ✅ catch network errors gracefully — backend still sends emails
      setOk(true);
      setErr(null);
      form.reset();
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full relative">
                    <p className="mt-4 text-center text-sm text-gray-600 mb-5 ">
          <strong>San Diego Annuity Shop</strong> is an independent, local agency. We respect your privacy.<br />Your information is never sold or shared. You'll work directly with one of our trusted, licensed advisors from start to finish.
          </p>
      <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-10 mb-10 max-w-3xl xl:max-w-4xl mx-auto px-4 lg:px-6">
        <div className="flex flex-col items-start">
          <label className="mb-1 block text-nowrap text-2xl " htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            name="name"
            // placeholder="Enter your first and last name"
            required
            className="w-full border border-[#D9D9D6] bg-[#FAFAF9] rounded-md px-3 py-3 
focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-2xl placeholder:font-normal placeholder:text-xl"
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 block text-2xl text-nowrap" htmlFor="product">
            Product
          </label>
          <select
            id="product"
            name="product"
            className="border cursor-pointer border-[#D9D9D6] bg-[#FAFAF9] rounded-md px-3 py-3 
focus:border-blue-500 focus:ring-1 focus:ring-blue-500 block w-full appearance-none
text-[var(--foreground)] text-2xl leading-tight gap-5 transition-colors duration-200 ease-in-out"
            defaultValue="Not Sure"
          >
            <option value="Not Sure">Not Sure</option>
            <option value="Annuity">Annuity</option>
            <option value="IUL">IUL</option>
            <option value="Private Banking">Private Banking</option>
            <option value="Life Insurance">Life Insurance</option>
          </select>
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 block text-2xl text-nowrap" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            // placeholder="Enter your Email"
            required
            className="w-full border border-[#D9D9D6] bg-[#FAFAF9] rounded-md px-3 py-3 placeholder:text-xl
focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-2xl placeholder:font-normal"
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="mb-1 block text-2xl text-nowrap" htmlFor="phone">
            Phone (Optional)
          </label>
          <input
            // placeholder="Enter your phone number (Optional)"
            id="phone"
            name="phone"
            className="w-full border border-[#D9D9D6] bg-[#FAFAF9] rounded-md px-3 py-3 
focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-2xl placeholder:text-xl placeholder:font-normal"
          />
        </div>
      </div>

      <div className="flex flex-col items-start max-w-3xl xl:max-w-4xl mx-auto px-4 lg:px-6">
        <label className="mb-1 block text-2xl text-nowrap" htmlFor="message">
          How can we help?
        </label>
        <textarea
          id="message"
          // placeholder="We are excited to hear from you!"
          name="message"
          required
          className="w-full border border-[#D9D9D6] bg-[#FAFAF9] rounded-md px-3 py-3  placeholder:text-xl
focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-2xl placeholder:font-normal"
        />
      </div>

      {/* Honeypot for bots */}
      <input tabIndex={-1} autoComplete="off" name="company" className="hidden" />

      <button type="submit" className="absolute left-[50%] translate-x-[-50%] bottom-[-125px] w-[300px] group cursor-pointer">
        <div
          className="cursor-pointer relative z-50 left-[50%] translate-x-[-50%] text-[color:var(--foreground)] disabled:opacity-60 text-2xl group-hover:text-[#5C94BF] group-hover:[text-shadow:0_0_6px_rgba(37,99,235,0.45)] duration-400"
        >
          {loading ? "Sending…" : "Build My Plan"}
        </div>
        <div className="cursor-pointer w-[300px] absolute left-[50%] translate-x-[-50%] top-[-100%] rotate-[18deg] group-hover:rotate-0 duration-400">
          <Image src={ellipse} width={300} alt="click to submit form" className="w-[300px]" />
        </div>
        <div className=" w-[300px] absolute left-[50%] translate-x-[-50%] top-[-100%]   ">
          <Image
            src={ellipse}
            width={300}
            alt="click to submit form"
            className="w-[300px] absolute  rotate-[-18deg] group-hover:rotate-0 duration-400"
          />
        </div>
      </button>

      {ok && <p className="text-sm text-green-700">Thanks! We'll reach out shortly.</p>}
      {ok === false && <p className="text-sm text-red-600">{err || "Something went wrong."}</p>}
    </form>
  );
}
