import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 768,
            laptop: 1024,
            desktop: 1200
        },
    },
    palette: {
        mode: "light",
        common: {
            white: "#FEFEFE",
            black: "#2B3442"
        },
        primary: {
            main: "#4B6A9B"
        },
        secondary: {
            main: "#F6F8FF"
        },
        action: {
            main: "#0079FF"
        },
        info: {
            main: "#697C9A"
        }
    },
    typography: {
        fontFamily: '"Space Mono", "Helvetica", sans-serif',
        h1: {
            fontFamily: '"Space Mono", "Helvetica", sans-serif',
            fontWeight: 700,
            fontSize: "1.6rem",
            lineHeight: "2.3rem"
        },
        h2: {
            fontFamily: '"Space Mono", "Helvetica", sans-serif',
            fontWeight: 700,
            fontSize: "1.3rem",
            lineHeight: "2rem"
        },
        h3: {
            fontFamily: '"Space Mono", "Helvetica", sans-serif',
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "1.5rem"
        },
        h4: {
            fontFamily: '"Space Mono", "Helvetica", sans-serif',
            fontWeight: 400,
            fontSize: "0.8rem",
            lineHeight: "1.2rem"
        },
        body1: {
            fontFamily: '"Space Mono", "Helvetica", sans-serif',
            fontWeight: 400,
            fontSize: "0.9rem",
            lineHeight: "1.5rem"
        }
    },
    components: {
       MuiInput: {
        styleOverrides: {
            root: {
               fontFamily:  '"Space Mono", "Helvetica", sans-serif',
               fontWeight: 400,
               fontSize: "1.1rem",
               lineHeight: "1.5rem",
            }
        },
        defaultProps: {
            color: "#222731",
            disableUnderline: true,
        }
       } 
    }
})