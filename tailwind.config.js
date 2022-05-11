module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      'xs': {'min':'120px','max':'639px'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {      
        backgroundImage : {
          'intro' : "url('/public/images/hero-bg.png')",
          'modal' : "url('/public/images/bg/vibra.png')",
        },
      fontFamily: {
          fsemeric: ["Fs Emeric", "sans-serif"],
          fsemeric: ["Calibri", "sans-serif"],
        },
       
      colors: {
        green : {
          200 : '#00a398'
        },
        orange : {
          500 : '#FF5100'
        },
        grey : {
          500 : '#696158'
        }
      },
      fontSize: {
        sm: ['14px', '16px'],
        base: ['16px', '20px'],
        baseEx: ['19px', '22px'],
        lg: ['20px', '22px'],
        lgEx: ['22px', '24px'],
        xl: ['28px', '30px'],
      },
      
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
  }
  ],
}
