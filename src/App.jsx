import React from "react";
import { ThemeContextProvider } from "./context/ThemeContext";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { lightTheme } from "./styles/styles";

export const App = () => {
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline>
          <div>
            <h1>Hello World</h1>
          </div>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};
