export const useCurrencySymbol = country => {
  let currency

  return country === "newzealand"
    ? (currency = ["NZD", "$"])
    : country === "australia"
    ? (currency = ["AUD", "$"])
    : (currency = ["EUR", "€"])
}
