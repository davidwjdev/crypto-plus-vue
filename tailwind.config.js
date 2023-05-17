/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "320px",
                md: "640px",
                lg: "1200px"
            },
            colors: {
                gray: {
                    500: "#1E1E1E",
                    900: "#0F0F0F"
                },
                black: "#000000",
                white: "#F7F7F7",
                blue: "#1B82FF",
                red: "#D70024",
                yellow: "#FFD221",
                green: "#4BFF13"
            }
        }
    },
    plugins: []
};
