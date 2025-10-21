import React from "react";
export default function Section({
  id,
  className = "",
  children,
}: React.PropsWithChildren<{ id?: string; className?: string }>) {
  return (
    <section id={id} className={`section-wrap py-16 md:py-24 ${className}`}>
      {children}
    </section>
  );
}
