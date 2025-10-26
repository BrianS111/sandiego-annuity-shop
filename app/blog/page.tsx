import Link from "next/link"
import { posts } from "./_posts"

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => (a.date ?? "") < (b.date ?? "") ? 1 : -1)

  return (
    <main className="mx-auto w-full px-4 pt-28 pb-28">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Blog</h1>

      <div className="space-y-8">
        {sorted.map((p) => (
          <article key={p.slug} className="border-b border-gray-200 pb-6">
            <Link href={`/blog/${p.slug}`} className="group block">
              <h2 className="text-2xl font-semibold text-blue-700 group-hover:underline">
                {p.title}
              </h2>
              {p.date && (
                <div className="mt-1 text-xs text-gray-400">
                  {new Date(p.date).toLocaleDateString()}
                </div>
              )}
              <p className="mt-2 text-gray-700">{p.description}</p>
              <span className="mt-2 inline-block text-sm text-gray-500">Read more →</span>
            </Link>
          </article>
        ))}
      </div>
    </main>
  )
}
