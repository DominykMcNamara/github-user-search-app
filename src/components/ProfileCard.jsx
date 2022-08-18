import React, { useState, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { Box } from '@mui/system'
export const ProfileCard = () => {
    const { profile } = useContext(AppContext)
  return (
    <>
     <h1> {profile ? 'Hello world' : "Cannot find profile"} </h1>  
    </>
  )
}