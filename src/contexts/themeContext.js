import React from "react"
import { createContext, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"

export const Theme = createContext({})

export const ThemeContextProvider = props => {
  const [lightMode, setLightMode] = useState(false)
  const darkTheme = {
    colors: {
      background: "#141D2F",
      themeBtn: "#fff",
      card: "#1E2A47",
      textNorm: "#fff",
      textBolded: "#FFF"
    }
  }
  const lightTheme = {
    colors: {
      background: "#F6F8FF",
      themeBtn: "#4B6A9B",
      card: "#FEFEFE",
      textNorm: "#697C9A",
      textBolded: "#2B3442"
    }
  }

  function changeTheme() {
    setLightMode(prev => !prev)
  }

  useEffect(() => {
    localStorage.getItem("theme") === "light" && setLightMode(true)
  }, [])

  useEffect(() => {
    const mode = lightMode ? "light" : "dark"

    localStorage.setItem("theme", mode)
  })

  return (
    <Theme.Provider value={{ changeTheme, lightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </Theme.Provider>
  )
}
