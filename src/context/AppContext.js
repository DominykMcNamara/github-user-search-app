import React, { useState, createContext } from "react"

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [theme, setTheme] = useState(" ")
    const [profile, setProfile] = useState(null)

    return (
        <AppContext.Provider value={{ theme, setTheme, profile, setProfile }}>
            { props.children }
        </AppContext.Provider>
    )
}