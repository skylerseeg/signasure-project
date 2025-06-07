// postcss.config.js
export default {
  plugins: [
    "postcss-import",      // for handling those @import rules
    "@tailwindcss/postcss" // v4’s engine
  ]
}
