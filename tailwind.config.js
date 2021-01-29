module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:theme =>({
        'work-at-home1':"url('/public/images/landing_bg1.jpg')",
        'work-at-home':"url('/public/images/landing_bg2.jpg')"
      })
    },
    maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
