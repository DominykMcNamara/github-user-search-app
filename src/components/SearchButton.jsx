import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import GithubApi from "../api/GithubApi";
import { Button } from "@mui/material";
export const SearchButton = ({ user }) => {

    const { profile, setProfile } = useContext(AppContext)
    
    const searchUsers = async (e) => {
        try {
        e.preventDefault()
        const userProfile = await GithubApi.get(`/${user}`)
        await setProfile(userProfile.data)
        console.log(profile)
        } catch (err) {
            console.log(err)
        }
    }
  return (
    <>
      <Button
       onClick={(e) => searchUsers(e)}
        disabled={user ? false : true }
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
