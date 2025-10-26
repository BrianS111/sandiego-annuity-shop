"use client"

import { MDXProvider } from "@mdx-js/react"
import React from "react"

export default function MDXClient({ children }: { children: React.ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>
}
