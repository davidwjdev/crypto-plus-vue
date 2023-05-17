/** @type {import('tailwindcss').Config} */

export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                sm: "320px",
                md: "640px",
                lg: "1200px"
            }
        }
    },
    plugins: []
};
