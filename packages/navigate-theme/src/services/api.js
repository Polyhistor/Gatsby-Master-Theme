import axios from "axios"

/*default configs*/
axios.defaults.headers = {
  "Content-Type": "application/json",
}

// if (!process.env.API_URL || !process.env.PRODUCT_ID) {
//   throw new Error(`Please make sure that all environment variable are set. `)
// }

const API_ENDPOINTS = {
  ENQUIRY: `https://api2.ntstage.com/enquiry`,
  TOUR: `https://api2.ntstage.com/tours/{TOUR_SLUG}`,
  CONTACT: `https://api2.ntstage.com/contact`,
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
