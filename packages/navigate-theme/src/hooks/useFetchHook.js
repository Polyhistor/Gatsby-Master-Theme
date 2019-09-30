import { useEffect, useState } from "react"
import { api as ApiService } from "../services/api"

export const useFetchHook = slug => {
  // setting inital state
  const [state, setState] = useState({ data: null, loading: true })

  // loading our data
  useEffect(() => {
    ApiService.getTourPrices(slug).then(response => {
      setState({ data: response.data, loading: false })
    })
  }, [])

  return state
}
