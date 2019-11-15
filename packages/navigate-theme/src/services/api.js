import axios from "axios"

/*default configs*/
axios.defaults.headers = {
  "Content-Type": "application/json",
}

// if (!process.env.API_URL || !process.env.PRODUCT_ID) {
//   throw new Error(`Please make sure that all environment variable are set. `)
// }

const API_ENDPOINTS = {
  ENQUIRY: `${process.env.GATSBY_API_URL}/enquiry`,
  TOUR_DATES: `${process.env.GATSBY_API_URL}/dates/{TOUR_SLUG}`,
  TOUR: `${process.env.GATSBY_API_URL}/tours/{TOUR_SLUG}`,
  CONTACT: `${process.env.GATSBY_API_URL}/contact`,
}

export const getTourPricesRequest = tourSlug => {
  return axios.get(API_ENDPOINTS.TOUR.replace("{TOUR_SLUG}", tourSlug))
}

export const getTourDatesRequest = tourSlug => {
  return axios.get(API_ENDPOINTS.TOUR_DATES.replace("{TOUR_SLUG}", tourSlug))
}

export const submitEnquiryRequest = data => {
  return axios.post(`${API_ENDPOINTS.ENQUIRY}`, data)
}

export const submitContactRequest = data => {
  return axios.post(`${API_ENDPOINTS.CONTACT}`, data)
}
