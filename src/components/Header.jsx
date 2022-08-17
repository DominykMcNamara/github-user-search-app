import React from 'react'
import { useTheme } from "@mui/material";
import { Grid, Typography } from '@mui/material'

export const Header = () => {
    const theme = useTheme()
  return (
        <Grid item>
            <Typography variant="h1" component="h1" sx={{ color: theme.palette.common.black}}>
                devfinder
            </Typography>
        </Grid>
  )
}
