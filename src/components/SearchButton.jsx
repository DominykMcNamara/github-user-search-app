import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import GithubApi from "../api/GithubApi";
import { Button, Typography } from "@mui/material";
export const SearchButton = ({ user }) => {
  const { profile, setProfile } = useContext(AppContext);
  const [err, setErr] = useState(false);
  const searchUsers = async (e) => {
    try {
      e.preventDefault();
      const userProfile = await GithubApi.get(`/${user}`);
        await setProfile(userProfile.data);
        setErr(false);
        console.log(profile);
    } catch (err) {
      setErr(true)
      console.log(err);
    }
  };
  return (
    <>
      {err ? <Typography variant="body1" component="p" sx={{color: "#F74646",  mr: "1rem"}}>No Results</Typography> : " "}
      <Button
        onClick={(e) => searchUsers(e)}
        disabled={user ? false : true}
        size="small"
        variant="contained"
        sx={{
          mr: "1rem",
          ml: "1rem",
          p: "1rem",
          width: {desktop: "8rem"} ,
          height: "3rem",
          borderRadius: "1rem",
         '&:hover': {
          backgroundColor: "#60ABFF"
         }


        }}
      >
        Search
      </Button>
    </>
  );
};
