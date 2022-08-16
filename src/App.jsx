import React, { useState } from "react";

import { ThemeContextProvider } from "./context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./styles/styles";

import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Container } from "@mui/system";
import { Box, IconButton, Typography } from "@mui/material";

export const App = () => {
  const [darkMode, setDarkMode] = useState();
  const theme = darkMode ? darkTheme : lightTheme;

  const handleModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container sx={{ backgroundColor: theme.palette.secondary.main }}>
            <Box
              component="header"
              
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{ color: theme.palette.common.black }}
              >
                devfinder
              </Typography>
              <Box>
                <Typography variant="body1" component="p">
                  {darkMode ? "LIGHT" : "DARK"}
                </Typography>
                <IconButton onClick={handleModeChange}>
                  {darkMode ? <LightModeSharpIcon /> : <DarkModeIcon />}
                </IconButton>
              </Box>
            </Box>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};
