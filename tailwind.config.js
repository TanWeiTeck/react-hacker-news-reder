/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                custom: '0px 0px 10px 20px rgb(255, 255, 255, 1)',
            },
            colors: {
                primary: '#ff6600',
                secondary: '#ffdfc9',
            },
        },
    },
    plugins: [],
};

// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
