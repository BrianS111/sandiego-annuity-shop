import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

function clean(s: unknown) {
  return typeof s === "string" ? s.trim() : "";
}

const ALLOWED_PRODUCTS = new Set([
  "Not Sure",
  "Annuity",
  "IUL",
  "Private Banking",
  "Life Insurance",
]);

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const name = clean(body?.name);
    const email = clean(body?.email);
    const phone = clean(body?.phone);
    const message = clean(body?.message);
    const company = clean(body?.company); // honeypot
    const productRaw = clean(body?.product);
    const product = ALLOWED_PRODUCTS.has(productRaw) ? productRaw : "Not Sure";

    // Honeypot: if filled, pretend success and do nothing
    if (company) {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Basic email sanity (keep it light; you can strengthen if needed)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.zoho.com",
      port: Number(process.env.SMTP_PORT || 465),
      secure: String(process.env.SMTP_SECURE || "true") === "true",
      auth: {
        user: process.env.SMTP_USER!,
        pass: process.env.SMTP_PASS!,
      },
    });

    const fromAddr =
      process.env.NOTIFY_FROM || `San Diego Annuity Shop <${process.env.SMTP_USER}>`;
    const toAddr = process.env.NOTIFY_TO || process.env.SMTP_USER!;

    await transporter.sendMail({
      from: fromAddr,
      to: toAddr,
      replyTo: email,
      subject: `New website lead (${product}): ${name}`,
      text: [
        `Product: ${product}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      // Optional HTML version (helps readability in email clients)
      html: `
        <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;">
          <p><strong>Product:</strong> ${product}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("CONTACT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}
