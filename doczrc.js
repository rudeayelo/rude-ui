import pkg from "./package.json";

export default {
  codeSandbox: false,
  description: pkg.description,
  dest: "/dist",
  port: 4000,
  title: "rude-ui",
  typescript: true,
  version: pkg.version,
  wrapper: "docs/Docs.tsx",
  themeConfig: {
    styles: {
      body: {
        fontFamily:
          '"SF UI Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        background: "white",
        lineHeight: 1.5,
      },
      h1: {
        fontFamily: "inherit",
      },
      h2: {
        fontFamily: "inherit",
      },
    },
  },
};
