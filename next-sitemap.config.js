/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://www.sandiegoannuityshop.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/api", "/admin"] },
    ],
  },
};
