import pkg from "./package.json";

export default {
  title: "rude-ui",
  description: pkg.description,
  version: pkg.version,
  port: 4000,
  typescript: true,
  codeSandbox: false,
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
