import React, { useState, createContext } from "react"

export const ThemeContext = createContext()

export const ThemeContextProvider = (props) => {
    const [colorMode, setColorMode] = useState(" ")

    return (
        <ThemeContext.Provider value={{ colorMode, setColorMode }}>
            { props.children }
        </ThemeContext.Provider>
    )
}