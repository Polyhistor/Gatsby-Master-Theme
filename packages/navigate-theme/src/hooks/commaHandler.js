// this is certainly not a hook and just a javascript function.
export const commaHandler = price => {
  if (price.toString().length < 4) {
    return price
  }

  const priceArray = price.toString().split("")
  const beforeComma = priceArray.slice(0, 1).join("")
  const afterComma = priceArray.slice(1, 4).join("")
  return `${beforeComma},${afterComma}`
}
