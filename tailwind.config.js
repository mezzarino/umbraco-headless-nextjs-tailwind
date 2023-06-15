/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  plugins: [
    require('tailwindcss-themer')({
      defaultTheme: {
        extend: {
          colors: {
            primary: 'darkblue'
          },
          fontFamily: {
            title: 'Helvetica',
            componentbody: 'Helvetica',
          }
        }
      },
      themes: [
        {
          name: 'tesco',
          selectors: ['[data-theme="tesco"]'],
          extend: {
            colors: {
              primary: 'red'
            },
            fontFamily: {
              title: 'var(--font-mont)',
              componentbody: 'Verdana',
            }
          }
        },
        {
          name: 'sainsburys',
          selectors: ['[data-theme="sainsburys"]'],
          extend: {
            colors: {
              primary: 'orange'
            },
            fontFamily: {
              title: 'var(--font-opensans)',
              componentbody: 'TimesNewRoman',
            }
          }
        }
      ]
    })
  ]
}

