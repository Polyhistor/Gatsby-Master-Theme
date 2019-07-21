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
      country: "newzealand",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Rotorua Canopy Tour",
      subtitle: "ABEL TASMAN",
      price: "from $140",
      caption: null,
      country: "australia",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Skydive Abel Tasman",
      subtitle: "ROTORUA",
      price: "from $140",
      caption: "top",
      country: "europe",
    },
    {
      imageData: imageData.newVehicles.childImageSharp.fluid,
      title: "Rotorua Canopy Tour",
      subtitle: "ABEL TASMAN",
      price: "from $140",
      caption: null,
      country: "newzealand",
    },
  ]

  return ActivityList
}

export default useActivitiesData
