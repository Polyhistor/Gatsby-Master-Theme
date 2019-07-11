import useImageQuery from "../../queries/imageQuery"

const useActivitiesData = () => {
  // extracting our query from our custom hook
  const imageData = useImageQuery()
  const ActivityList = [
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Skydive Abel Tasman",
      subtitle: "ROTORUA",
      price: "from $140",
      caption: "free",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Rotorua Canopy Tour",
      subtitle: "ABEL TASMAN",
      price: "from $140",
      caption: null,
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Skydive Abel Tasman",
      subtitle: "ROTORUA",
      price: "from $140",
      caption: "top",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Rotorua Canopy Tour",
      subtitle: "ABEL TASMAN",
      price: "from $140",
      caption: null,
    },
  ]

  return ActivityList
}

export default useActivitiesData
