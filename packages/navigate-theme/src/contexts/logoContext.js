import React, { useContext, useState, createContext } from "react"

const logoContext = createContext()

const useLogo = () => {
  const context = useContext(logoContext)

  if (!context) {
    throw new Error("useLogo must be used within a useLogoProvider")
  }

  return context
}

const LogoProvider = props => {
  const [logo, setLogo] = useState("")

  const value = React.useMemo(() => [logo, setLogo], [logo])

  return <logoContext.Provider value={value} {...props}></logoContext.Provider>
}

export default { useLogo, LogoProvider }
