/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                mobile: "320px", // Mobile devices
                tablet: "481px", // iPads, Tablets
                laptop: "769px", // Small screens, laptops
                desktop: "1025px", // Desktops, large screens
                tv: "1201px", // Extra large screens, TV
            },
        },
    },
    plugins: [],
};
