const plugin = require('tailwindcss/plugin')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  content: ["./_includes/*", "index.html", "index.js"],
  theme: {
    fontFamily: {
      midnight: ["midnight", "sans-serif"],
      twoam: ["twoam", "sans-serif"],
      fira: ["fira-sans", "sans-serif"],
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none'
            },
            'ol > li': {
              paddingLeft: 0
            },
            //The below styles are copied from the typography plugin styles. Is there no way to reuse typography styles to
            //customize itself?
            // 'ol > li::marker': {
            //   fontSize: em(24, 16),
            //   fontWeight: theme("fontWeight.bold")
            // },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addVariant }) {
       addVariant('children', '& > *')
    })
  ],
}
