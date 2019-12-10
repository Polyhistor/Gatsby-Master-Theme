/*Split content using every . until reach the max characters*/

export const splitText = (text, maxLength) => {
  let result = ""
  var split = text.match(/[^\.!\?]+[\.!\?]+/g)

  try {
    for (let sentence of split) {
      if (result.length + sentence.length < maxLength) {
        result += sentence
      }
    }

    // result = result.replace(/\n/g, "")

    return result
  } catch (error) {
    console.error("Split Text error. ")
    return text
  }
}
