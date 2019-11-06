import React, { useContext, useState, useMemo, createContext } from "react"

const featureBoxContext = createContext()

const useFeatureBox = () => {
  const context = useContext(useFeatureBox)

  if (!context) {
    throw new Error("useLogo must be used within a useLogoProvider")
  }

  return context
}

const FeatureBoxProvider = props => {
  const [featureBox, setFeatureBox] = useState("")

  const value = React.useMemo(() => [featureBox, setFeatureBox], [featureBox])

  return (
    <featureBoxContext.Provider
      value={value}
      {...props}
    ></featureBoxContext.Provider>
  )
}

export default { useFeatureBox, FeatureBoxProvider }
