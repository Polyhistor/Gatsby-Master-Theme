import { useEffect, useState } from "react"
import { getTourPricesRequest } from "../services/api"

export const useFetchHook = slug => {
  // setting inital state
  const [state, setState] = useState({ data: null, loading: true })

  // loading our data
  useEffect(() => {
    getTourPricesRequest(slug).then(response => {
      setState({ data: response.data, loading: false })
    })
  }, [])

  return state
}
