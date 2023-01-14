import React, { useContext, useState } from "react"

const AppContext = React.createContext()

export const AppProvider = ({ children }) => {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const openNav = () => {
    setNavIsOpen(true)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <AppContext.Provider value={{ navIsOpen, openNav, closeNav }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
