export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://softsolution-web.vercel.app/sitemap.xml",
  };
}
