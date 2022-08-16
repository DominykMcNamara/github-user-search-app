import React, { useState, createContext } from "react"

export const AppContext = createContext()

export const AppContextProvider = (props) => {
    const [colorMode, setColorMode] = useState(" ")
    const [user, setUser] = useState([])

    return (
        <AppContext.Provider value={{ colorMode, setColorMode, user, setUser }}>
            { props.children }
        </AppContext.Provider>
    )
}