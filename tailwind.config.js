/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Ajuste os caminhos conforme necessário
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Exemplo de cor personalizada
        secondary: '#9333EA',
      },
    },
  },
  plugins: [],
};