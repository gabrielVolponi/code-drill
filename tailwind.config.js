/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Ajuste os caminhos conforme necessário
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C88DF', // Exemplo de cor personalizada
        secondary: '#013EA6',
      },
    },
  },
  plugins: [],
};