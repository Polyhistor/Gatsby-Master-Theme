import useImageQuery from "../../queries/imageQuery"

const useActivitiesData = () => {
  // extracting our query from our custom hook
  const imageData = useImageQuery()
  const ActivityList = [
    {
      imageData: imageData.localGuids.childImageSharp.fluid,
      title: "Our vehicle",
      subtitle: "This new, luxury cruiser makes travelling a pleasure.",
      description:
        "Our vehicles get wolf whistles wherever they go – and for good reason, with massive windows to give you an incredible view (they’re tinted too, to protect you from baking in the sun), USB ports and enough leg room to stretch out. There’s also unlimited WIFI available – Talk about the high life!",
    },
    {
      imageData: imageData.smallGroups.childImageSharp.fluid,
      title: "Guides",
      subtitle: "We don’t hire bus drivers –we hire guides.",
      description:
        "We find epic humans with a love for NZ, a fondness for creating good times, and the gift of the gab when we put them behind the wheel, tasked with giving you the EXPERIENCE of a lifetime. Our experienced guides pride themselves on finding places a little off the beaten track to ensure your trip is a memorable one.",
    },
    {
      imageData: imageData.localGuids.childImageSharp.fluid,
      title: "Guides",
      subtitle: "We limit the size of our groups to 18.",
      description:
        "Our adventure tours are for small groups of 18-35 year olds. Despite what people say, we think small is best – when it comes to travelling, that is. It means you don’t get lost or left out in the chaos of a large group and you really get to know your fellow Wild Kiwis.Be prepared to make some awesome friendships with people from around the globe – we tend to get tight on our tours!",
    },
  ]

  return ActivityList
}

export default useActivitiesData
