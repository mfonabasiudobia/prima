module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
        backgroundImage : {
          'intro' : "url('/public/images/hero-bg.png')",
          'modal' : "url('/public/images/bg/vibra.png')",
        },
      colors: {
        green : {
          200 : '#00a398'
        },
        orange : {
          500 : '#FF5100'
        }
      }
    },
  },
  plugins: [],
}
