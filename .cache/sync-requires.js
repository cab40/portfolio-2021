const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/pages/blog.js"))),
  "component---src-pages-goodies-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/pages/goodies.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/pages/index.js"))),
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/templates/blog-post.js"))),
  "component---src-templates-case-study-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/templates/case-study.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/catherineburns/Documents/Personal/portfolio-2021/src/templates/tags.js")))
}

