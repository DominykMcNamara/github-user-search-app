import React, { useState, createContext } from "react"

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [colorMode, setColorMode] = useState(" ")
    const [profile, setProfile] = useState()

    return (
        <AppContext.Provider value={{ colorMode, setColorMode, profile, setProfile }}>
            { props.children }
        </AppContext.Provider>
    )
}