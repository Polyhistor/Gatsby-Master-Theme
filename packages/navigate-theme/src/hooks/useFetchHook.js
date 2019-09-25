import { useEffect, useState } from "react"

export const useFetchHook = slug => {
  // setting inital state
  const [state, setState] = useState({ data: null, loading: true })

  // loading our data
  useEffect(() => {
    fetch(`https://mtiapi.ntbeta.com/v1/prices/${slug}`)
      .then(x => x.json())
      .then(y => {
        setState({ data: y, loading: false })
      })
  }, [])

  return state
}
