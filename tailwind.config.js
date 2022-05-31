module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        container: {
            padding: {
                DEFAULT: "2rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        extend: {
            colors: {
                primary: "#243c5a",
                title: "#0e2258",
                paragraph: "#7A7A7A",
                link: "#243c5a",
                secondary: "#f35a38",
            },
        },
    },
    plugins: [],
};
