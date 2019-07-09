import React from "react"

import useImageQuery from "../../queries/imageQuery"

const useItineraryData = () => {
  // extracting our query from our custom hook
  const imageData = useImageQuery()
  const ItineraryList = [
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Auckland to Raglan",
      description:
        "First stop on the North Island, is Raglan. The stunnin rugged landscape and black sand beach of Raglan is home to one of the world’s longest left-hand break with its laidback, hippie attitude – there’s nothing like it.",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Auckland to Raglan",
      description:
        "First stop on the North Island, is Raglan. The stunnin rugged landscape and black sand beach of Raglan is home to one of the world’s longest left-hand break with its laidback, hippie attitude – there’s nothing like it.",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Auckland to Raglan",
      description:
        "First stop on the North Island, is Raglan. The stunnin rugged landscape and black sand beach of Raglan is home to one of the world’s longest left-hand break with its laidback, hippie attitude – there’s nothing like it.",
    },
  ]

  return ItineraryList
}

export default useItineraryData
