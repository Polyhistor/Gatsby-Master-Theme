import axios from "axios"

/*default configs*/
axios.defaults.headers = {
  "Content-Type": "application/json",
}

// if (!process.env.API_URL || !process.env.PRODUCT_ID) {
//   throw new Error(`Please make sure that all environment variable are set. `)
// }

const API_ENDPOINTS = {
  ENQUIRY: `${process.env.API_URL}/enquiry`,
  TOUR: `${process.env.API_URL}/tours/{TOUR_SLUG}`,
  CONTACT: `${process.env.API_URL}/contact`,
}

export const api = {
  getTourPrices(tourSlug) {
    return axios.get(API_ENDPOINTS.TOUR.replace("{TOUR_SLUG}", tourSlug))
  },

  enquiry(data) {
    return axios.post(`${API_ENDPOINTS.ENQUIRY}`, data)
  },

  contact(data) {
    return axios.post(`${API_ENDPOINTS.ENQUIRY}`, data)
  },
}
