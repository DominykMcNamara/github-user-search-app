import React, { useState } from "react";

import { Box } from "@mui/system";
import { Button, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({ theme }) => {
  return (
    <Box>
      <InputBase
        fullWidth={true}
        placeholder="Search GitHub username..."
        startAdornment={
          <IconButton>
            <SearchIcon sx={{ mr: "2rem" }} />
          </IconButton>
        }
        endAdornment={
          <Button
            size="small"
            variant="contained"
            sx={{
              mr: "1rem",
              ml: "7rem",
              p: "1rem",
              width: "6rem",
              height: "3rem",
              borderRadius: "1rem",
            }}
          >
            Search
          </Button>
        }
        sx={{
          backgroundColor: theme.palette.common.white,
          height: "4rem",
          borderRadius: "1rem",
          mt: "2rem",
          pl: "2rem",
        }}
      />
    </Box>
  );
};
