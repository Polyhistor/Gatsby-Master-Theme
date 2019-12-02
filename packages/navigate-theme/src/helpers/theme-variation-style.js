const resolveVariationClass = className => {
  const theme = process.env.GATSBY_THEME

  let finalClass = `${className} ${className}--${theme}`

  return finalClass
}

export default resolveVariationClass
