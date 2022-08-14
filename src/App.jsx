import React from 'react'
import { ThemeContextProvider } from './context/ThemeContext'

export const App = () => {
  return (
   <ThemeContextProvider>
    <div>
      <h1>Hello World</h1>
    </div>
   </ThemeContextProvider>
  )
}

