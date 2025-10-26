// scripts/new-post.cjs
const fs = require("fs");
const path = require("path");

// Get the slug from the command line: npm run new:post my-new-article
const slug = process.argv[2];
if (!slug) {
  console.error("❌  Usage: npm run new:post <slug>");
  process.exit(1);
}

// Paths
const tplDir = path.join(process.cwd(), "app", "blog", "_template");
const newDir = path.join(process.cwd(), "app", "blog", slug);

// Safety checks
if (!fs.existsSync(tplDir)) {
  console.error("❌  Missing app/blog/_template folder.");
  process.exit(1);
}

if (fs.existsSync(newDir)) {
  console.error(`❌  Folder already exists: ${newDir}`);
  process.exit(1);
}

// Make new folder
fs.mkdirSync(newDir);
for (const file of ["content.mdx", "page.tsx"]) {
  const src = path.join(tplDir, file);
  const dest = path.join(newDir, file);
  fs.copyFileSync(src, dest);
}

console.log(`✅ Created new post folder: app/blog/${slug}/`);
console.log("💡 Don't forget to add it to app/blog/_posts.ts");
