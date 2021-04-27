module.exports = {
  purge: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      'sans': ["Open Sans", "DejaVu Sans", "Fira Sans", "-apple-system", "BlinkMacSystemFont","Segoe UI", "Roboto","Helvetica Neue", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Zen Hei", "Droid Sans Fallback", "Verdana", "Microsoft YaHei", "sans-serif"],
      'serif': ["Zilla Slab", "Roboto Slab", "Arvo", "Rockwell", "TypoPRO Zilla Slab", "Source Serif Pro", "PT Serif", "Noto Serif", "Droid Serif", "Cambria", "Georgia", "Source Han Serif SC", "Noto Serif CJK SC", 'Times New Roman', "SimSun", "serif"],
      'mono': ["Fira Mono", "DejaVu Sans Mono", "Droid Sans Mono", "Liberation Mono", "Source Han Sans SC", "Noto Sans CJK SC", "WenQuanYi Zen Hei", "Droid Sans Fallback", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Courier New", "monospace", "Microsoft YaHei"],
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
}
