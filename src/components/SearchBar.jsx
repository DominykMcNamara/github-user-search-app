import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchButton } from "./SearchButton";

export const SearchBar = () => {
  
  const theme = useTheme()
  
  const [user, setUser] = useState();
  const handleUserChange = (e) => {
    setUser(e.target.value);
    console.log(user)
  };

  return (
    <Box>
      <InputBase
        fullWidth={true}
        placeholder="Search GitHub username..."
        value={user}
        onChange={handleUserChange}
        startAdornment={
         <SearchIcon sx={{ mr: "2rem" }} />
        }
        endAdornment={<SearchButton user={user} />}
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
