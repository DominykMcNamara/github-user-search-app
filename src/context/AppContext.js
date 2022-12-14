import React, { useState, createContext } from "react";
import { lightTheme, darkTheme } from "../styles/styles";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
 
  const [profile, setProfile] = useState(null);
  const [err, setErr] = useState(false)

  return (
    <AppContext.Provider
      value={{ profile, setProfile }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
