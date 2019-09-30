import { useEffect, useState } from "react"

export const useFetchHook = slug => {
  // setting inital state
  const [state, setState] = useState({ data: null, loading: true })

  // loading our data
  setTimeout(
    useEffect(() => {
      fetch(`https://api2.ntstage.com/tours/${slug}`)
        .then(x => x.json())
        .then(y => {
          setState({ data: y, loading: false })
        })
    }, []),
    5000
  )

  return state
}
