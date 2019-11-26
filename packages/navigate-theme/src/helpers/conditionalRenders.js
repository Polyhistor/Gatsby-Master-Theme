import { useMediaQuery } from "react-responsive"

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    query: `(min-width: 90em)`,
  })

  return isDesktop ? children : null
}

export const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({
    query: `(min-width: 75em) and (max-width: 90em)`,
  })

  return isLaptop ? children : null
}

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({
    query: `(min-width: 47.5em) and (max-width: 75em)`,
  })

  return isTablet ? children : null
}

export const TabletAndMobile = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({
    query: `(max-width: 75em)`,
  })

  return isTabletOrMobile ? children : null
}

export const Mobile = ({ children }) => {
  const isPhone = useMediaQuery({
    query: `(max-width: 47.5em)`,
  })

  return isPhone ? children : null
}

export const DefaultRender = ({ children }) => {
  return children
}
