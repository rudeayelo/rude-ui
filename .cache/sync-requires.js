const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---docs-color-mdx": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/docs/color.mdx"))),
  "component---docs-index-mdx": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/docs/index.mdx"))),
  "component---src-card-card-mdx": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/src/Card/Card.mdx"))),
  "component---src-button-button-mdx": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/src/Button/Button.mdx"))),
  "component---src-input-input-mdx": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/src/Input/Input.mdx"))),
  "component---src-text-text-mdx": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/src/Text/Text.mdx"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/rude.ayelo/Projects/rude-ui/.cache/dev-404-page.js")))
}

