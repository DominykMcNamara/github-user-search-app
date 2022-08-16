import React from "react";
import { Button } from "@mui/material";
export const SearchButton = () => {
  return (
    <>
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
    </>
  );
};
