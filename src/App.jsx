import React from "react";
import { ThemeContextProvider } from "./context/ThemeContext";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme, darkTheme } from "./styles/styles";
import { Container } from "@mui/system";

export const App = () => {
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline>
          <Container
            sx={{ backgroundColor: lightTheme.palette.secondary.main }}
          >
            <h1>Hello world</h1>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};
