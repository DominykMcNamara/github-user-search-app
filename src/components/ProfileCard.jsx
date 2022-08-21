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
            width: { desktop: "45rem", tablet: "35rem", mobile: "20rem" },
            height: { desktop: "26rem", tablet: "30rem", mobile: "32rem" },
            backgroundColor: theme.palette.common.white,
            borderRadius: "1rem",
            boxShadow: " 0rem 1rem 2rem -1rem rgba(70, 96, 187, 0.198567);",
            margin: "1rem auto",
            pt: "3rem",
            pb: "2rem",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            {profile.avatar_url && (
              <Avatar
                alt="Profile Avatar"
                src={profile.avatar_url}
                sx={{
                  height: { desktop: "7rem", mobile: "4rem" },
                  width: { desktop: "7rem", mobile: "4rem" },
                  ml: { desktop: "3rem", tablet: "5rem", mobile: "1rem", laptop: "4rem" },
                }}
              />
            )}
            <Box
              sx={{ ml: "2rem", width: { tablet: "15rem", desktop: "35rem" } }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant={"h1"}
                  component="h1"
                  sx={{ fontSize: { mobile: "1rem" } }}
                >
                  {profile.login}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  sx={{ ml: { desktop: "8rem" }, fontSize: { mobile: "1rem" } }}
                >
                  {profile.created_at
                    ? `Joined ${new Date(profile.created_at).toDateString()}`
                    : " "}
                </Typography>
              </Box>
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  mt: "0.5rem",
                  color: theme.palette.action.main,
                  fontSize: { mobile: "1rem" },
                }}
              >
                {profile.company ? profile.company : " "}
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  mt: { desktop: "1rem", tablet: "2rem" },
                  fontSize: { mobile: "1rem" },
                  color: theme.palette.primary.main,
                }}
              >
                {profile.bio ? profile.bio : "This profile has no bio"}
              </Typography>
            </Box>
          </Box>

          {/* Profile Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              borderRadius: "1rem",
              pt: "1rem",
              pb: "1rem",
              padding: {mobile: "1rem"},
              width: {desktop: "30rem", mobile: "17rem"},
              ml: { desktop: "11.5rem", tablet: "8rem", laptop: "8rem" },
              mt: "2rem",
              margin: { mobile: "2rem auto"},
              textAlign: {mobile: "center"},
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

          {/* Social Info*/}
          <Box
            sx={{
              mt: "2rem",
              ml: { desktop: "4rem", tablet: "0rem", mobile: "1.5rem" },
              display: "flex",
              flexDirection: {desktop: "row", mobile: "column", tablet: "row", laptop: "row"},
              alignContent: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: theme.palette.primary.main,
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
                  color: theme.palette.primary.main,
                }}
              >
                <Icon sx={{ mr: "1rem" }}>
                  <LinkIcon />
                </Icon>
                <Link underline="none" href={profile.blog ? profile.blog : "#"}>
                  {profile.blog ? profile.blog : "Not Available"}
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: theme.palette.primary.main,
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
                  color: theme.palette.primary.main,
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
