import React, { useState } from "react";

import { ThemeContextProvider } from "./context/ThemeContext";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./styles/styles";

import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { Container } from "@mui/system";
import { Box, IconButton, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

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
            <Box sx={{ width: "36rem", margin: "0 auto", pt: "9rem" }}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignContent="center"
                alignItems="center"
              >
                <Grid item>
                  <Typography
                    variant="h1"
                    component="h1"
                    sx={{ color: theme.palette.common.black }}
                  >
                    devfinder
                  </Typography>
                </Grid>

                <Grid item>
                  <Box sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography variant="body1" component="p">
                      {darkMode ? "LIGHT" : "DARK"}
                    </Typography>

                    <IconButton onClick={handleModeChange}>
                      {darkMode ? <LightModeSharpIcon /> : <DarkModeIcon />}
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </ThemeContextProvider>
  );
};
