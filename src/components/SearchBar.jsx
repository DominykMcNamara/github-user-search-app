import React, { useState, useContext } from "react";
import { useTheme } from "@mui/material";
import { Box } from "@mui/system";
import { InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchButton } from "./SearchButton";
import { AppContext } from "../context/AppContext";

export const SearchBar = () => {
  
  const theme = useTheme()
  
  const { err } = useContext(AppContext)

  const [user, setUser] = useState();
  const handleUserChange = (e) => {
    setUser(e.target.value);
    console.log(user)
  };

  return (
    <Box sx={{width: {desktop: "45rem", tablet: "35rem", mobile: "20rem"}, margin: "0 auto"}}>
      <InputBase
        fullWidth={true}
        placeholder="Search GitHub username..."
        value={user}
        onChange={handleUserChange}
        startAdornment={
         <SearchIcon sx={{ mr: "2rem", color: theme.palette.action.main}} />
        }
        endAdornment={<SearchButton user={user} />}
        sx={{
          backgroundColor: theme.palette.common.white,
          height: "4rem",
          borderRadius: "1rem",
          mt: "2rem",
          pl: "2rem",
          boxShadow: "0rem 1rem 2rem -1rem rgba(70, 96, 187, 0.198567)"
        }}
      />
    </Box>
  );
};