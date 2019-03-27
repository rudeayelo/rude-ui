// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---docs-color-mdx": () => import("/Users/rude.ayelo/Projects/rude-ui/docs/color.mdx" /* webpackChunkName: "component---docs-color-mdx" */),
  "component---docs-index-mdx": () => import("/Users/rude.ayelo/Projects/rude-ui/docs/index.mdx" /* webpackChunkName: "component---docs-index-mdx" */),
  "component---src-card-card-mdx": () => import("/Users/rude.ayelo/Projects/rude-ui/src/Card/Card.mdx" /* webpackChunkName: "component---src-card-card-mdx" */),
  "component---src-button-button-mdx": () => import("/Users/rude.ayelo/Projects/rude-ui/src/Button/Button.mdx" /* webpackChunkName: "component---src-button-button-mdx" */),
  "component---src-input-input-mdx": () => import("/Users/rude.ayelo/Projects/rude-ui/src/Input/Input.mdx" /* webpackChunkName: "component---src-input-input-mdx" */),
  "component---src-text-text-mdx": () => import("/Users/rude.ayelo/Projects/rude-ui/src/Text/Text.mdx" /* webpackChunkName: "component---src-text-text-mdx" */),
  "component---cache-dev-404-page-js": () => import("/Users/rude.ayelo/Projects/rude-ui/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/rude.ayelo/Projects/rude-ui/.cache/data.json")

