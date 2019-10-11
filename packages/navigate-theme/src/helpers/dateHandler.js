/**
 * @function
 * @param {String} - the date that has been fetched from contentful
 * @return {String} - the formatted date
 */

export const dateHandler = date => {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const chunks = date.split("-").slice(0, 2)
  const year = chunks[0]
  const month = chunks[1].split("")
  const monthFormatted = months[month[1] - 1]
  return `${monthFormatted}, ${year}`
}
