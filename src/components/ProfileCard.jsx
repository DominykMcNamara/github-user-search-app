import React, { useContext } from "react";
import { Avatar, Icon, Link, Typography, useTheme } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { Box } from "@mui/system";

import PlaceIcon from "@mui/icons-material/Place";
import LinkIcon from "@mui/icons-material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import BusinessIcon from "@mui/icons-material/Business";

export const ProfileCard = () => {
  const { profile } = useContext(AppContext);

  const theme = useTheme();

  return (
    <>
      {profile && (
        <Box
          sx={{
            width: "45rem",
            height: "26rem",
            backgroundColor: theme.palette.common.white,
            borderRadius: "1rem",
            boxShadow: " 0rem 1rem 2rem -1rem rgba(70, 96, 187, 0.198567);",
            margin: "1rem auto",
            pt: "3rem",
            pb: "2rem",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {profile.avatar_url && (
              <Avatar
                alt="Profile Avatar"
                src={profile.avatar_url}
                sx={{ height: "7rem", width: "7rem", ml: "3rem" }}
              />
            )}
            <Box sx={{ ml: "2rem" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                }}
              >
                <Typography variant="h1" component="h1">
                  {profile.login}
                </Typography>
                <Typography variant="body1" component="p" sx={{ ml: "8rem" }}>
                  {profile.created_at
                    ? `Joined ${new Date(profile.created_at).toDateString()}`
                    : " "}
                </Typography>
              </Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mt: "0.5rem", color: theme.palette.action.main }}
              >
                {profile.company ? profile.company : " "}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{ mt: "1rem", color: theme.palette.primary.main }}
              >
                {profile.bio ? profile.bio : "This profile has no bio"}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              borderRadius: "1rem",
              pt: "1rem",
              pb: "1rem",
              width: "30rem",
              ml: "11.5rem",
              mt: "2rem",
              backgroundColor: theme.palette.secondary.main,
            }}
          >
            <Box>
              <Typography variant="body1" component="p">
                Repos
              </Typography>
              <Typography variant="h2" component="h2">
                {profile.public_repos ? profile.public_repos : "0"}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" component="p">
                Followers
              </Typography>
              <Typography variant="h2" component="h2">
                {profile.followers ? profile.followers : "0"}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" component="p">
                Following
              </Typography>
              <Typography variant="h2" component="h2">
                {profile.following ? profile.following : "0"}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: "2rem",
              ml: "4rem",
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: theme.palette.primary.main
                }}
              >
                <Icon sx={{ mr: "1rem" }}>
                  <PlaceIcon />
                </Icon>

                {profile.location ? profile.location : "Not Available"}
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: theme.palette.primary.main
                }}
              >
                <Icon sx={{ mr: "1rem" }}>
                  <LinkIcon />
                </Icon>
                <Link underline="none" href={profile.blog ? profile.blog : '#'}>
                {profile.blog ? profile.blog : "Not Available"}
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: theme.palette.primary.main
                }}
              >
                <Icon sx={{ mr: 1 }}>
                  <TwitterIcon />
                </Icon>

                {profile.twitter_username
                  ? profile.twitter_username
                  : "Not Available"}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: theme.palette.primary.main
                }}
              >
                <Icon sx={{ mr: 1 }}>
                  <BusinessIcon />
                </Icon>

                {profile.company ? profile.company : "Not Available"}
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};
