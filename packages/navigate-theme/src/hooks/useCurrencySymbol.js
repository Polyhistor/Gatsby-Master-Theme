export const useCurrencySymbol = country => {
  let currency

  // TODO - changing the slug to come from contentful
  return country === "new-zealand"
    ? (currency = ["NZD", "$"])
    : country === "australia"
    ? (currency = ["AUD", "$"])
    : (currency = ["EUR", "€"])
}
