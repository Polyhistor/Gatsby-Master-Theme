const resolveVariationClass = className => {
  const theme = process.env.GATSBY_THEME

  let finalClass = `${className} ${className}--${theme}`
  /*let finalClass = `${className}`
  if (theme === "ms" || theme === "yg") {
    finalClass = `${className} ${className}--${theme}`
  }
  */
  return finalClass
}

export default resolveVariationClass
