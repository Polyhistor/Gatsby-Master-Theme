/**
 * Page Identification for Contentful SEO Page Meta content
 */

const MIN_AGE = 18
const MAX_AGE = 90

export const getPaxAges = () => {
  const ages = []

  for (let i = MIN_AGE; i <= MAX_AGE; i++) {
    ages.push(i)
  }

  return ages
}
