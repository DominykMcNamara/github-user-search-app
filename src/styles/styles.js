import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "light",
    common: {
      white: "#FEFEFE",
      black: "#2B3442",
    },
    primary: {
      main: "#4B6A9B",
    },
    secondary: {
      main: "#F6F8FF",
    },
    action: {
      main: "#0079FF",
    },
    info: {
      main: "#697C9A",
    },
  },
  typography: {
    fontFamily: "'Space Mono', monospace",
    h1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: "1.6rem",
      lineHeight: "2.3rem",
    },
    h2: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: "1.3rem",
      lineHeight: "2rem",
    },
    h3: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    h4: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: "0.8rem",
      lineHeight: "1.2rem",
    },
    body1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: "1.5rem",
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          fontWeight: 400,
          fontSize: "1.1rem",
          lineHeight: "1.5rem",
          borderRadius: "0.9rem",
          boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
          backgroundColor: "#FEFEFE",
        },
      },
      defaultProps: {
        color: "#222731",
        disableUnderline: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          lineHeight: "1.3rem",
        },
      },
      defaultProps: {
        color: "primary",
        underline: "hover",
        variant: "body1",
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100vh",
        },
      },

      defaultProps: {
        disableGutters: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        size: "small",
      },
    },
  },
});

export const darkTheme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  palette: {
    mode: "dark",
    common: {
      white: "#2B3442",
      black: "#FEFEFE",
    },
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#141D2F",
    },
    action: {
      main: "#0079FF",
    },
    info: {
      main: "#1E2A47",
    },
  },
  typography: {
    fontFamily: "'Space Mono', monospace",
    h1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: "1.6rem",
      lineHeight: "2.3rem",
    },
    h2: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 700,
      fontSize: "1.3rem",
      lineHeight: "2rem",
    },
    h3: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    h4: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: "0.8rem",
      lineHeight: "1.2rem",
    },
    body1: {
      fontFamily: "'Space Mono', monospace",
      fontWeight: 400,
      fontSize: "0.9rem",
      lineHeight: "1.5rem",
    },
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          fontFamily: "'Space Mono', monospace",
          fontWeight: 400,
          fontSize: "1.1rem",
          lineHeight: "1.5rem",
          borderRadius: "0.9rem",
          boxShadow: "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)",
          backgroundColor: "info",
        },
      },
      defaultProps: {
        color: "primary",
        disableUnderline: true,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          lineHeight: "1.3rem",
        },
      },
      defaultProps: {
        color: "primary",
        underline: "hover",
        variant: "body1",
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          height: "100vh",
        },
      },
      defaultProps: {
        disableGutters: true,
      },
    },
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true,
        disableRipple: true,
        size: "small",
      },
    },
  },
});
