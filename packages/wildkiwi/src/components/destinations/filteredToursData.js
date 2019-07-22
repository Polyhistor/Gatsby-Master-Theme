import useImageQuery from "../../queries/imageQuery"
import newzealandMap from "../../images/Wild_Kiwi_NZ_Discovery_Map.svg"

const useActivitiesData = () => {
  // extracting our query from our custom hook
  const imageData = useImageQuery()
  const ActivityList = [
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      days: 3,
      title: "New Zealand",
      subtitle: "CHRISTCHURCH RETURN ",
      description:
        "Hit all the key spots in the upper South Island. Wind along coastal roads, wine country. See NZ’s best beaches and epic mountain scenery, travelling the South Island has never looked so good! ",
      price: "From $140",
      svgMap: newzealandMap,
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      days: 5,
      title: "New Zealand",
      subtitle: "AUCKLAND RETURN",
      description:
        "Hit all the key spots in the upper South Island. Wind along coastal roads, wine country. See NZ’s best beaches and epic mountain scenery, travelling the South Island has never looked so good! ",
      price: "From $140",
      svgMap: newzealandMap,
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      days: 7,
      title: "Skydive Abel Tasman",
      subtitle: "ROTORUA",
      description:
        "Hit all the key spots in the upper South Island. Wind along coastal roads, wine country. See NZ’s best beaches and epic mountain scenery, travelling the South Island has never looked so good! ",
      price: "From $140",
      svgMap: newzealandMap,
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      days: 7,
      title: "Rotorua Canopy Tour",
      subtitle: "ABEL TASMAN",
      description:
        "Hit all the key spots in the upper South Island. Wind along coastal roads, wine country. See NZ’s best beaches and epic mountain scenery, travelling the South Island has never looked so good! ",
      price: "From $140",
      svgMap: newzealandMap,
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      days: 3,
      title: "Rotorua Canopy Tour",
      subtitle: "ABEL TASMAN",
      description:
        "Hit all the key spots in the upper South Island. Wind along coastal roads, wine country. See NZ’s best beaches and epic mountain scenery, travelling the South Island has never looked so good! ",
      price: "From $140",
      svgMap: newzealandMap,
    },
  ]

  return ActivityList
}

export default useActivitiesData
