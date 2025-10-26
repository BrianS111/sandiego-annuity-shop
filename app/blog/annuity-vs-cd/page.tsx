"use client"

import Content from "./content.mdx"

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 pt-[35vh] pb-28 text-gray-900 leading-relaxed">
      <article className="prose prose-lg  max-w-none">
        <Content />
      </article>
    </main>
  )
}
