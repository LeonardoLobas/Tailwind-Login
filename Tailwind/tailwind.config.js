/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            animation: {
                grow: "grow 3s forwards",
            },
            keyframes: {
                grow: {
                    "0%": { transform: "scale(1)" },
                    "100%": { transform: "scale(4)" },
                },
            },
        },
    },
    plugins: [],
};
