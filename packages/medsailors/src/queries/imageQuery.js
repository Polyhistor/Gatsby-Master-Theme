import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for images utlizing predefined fragment
const useImageQuery = () => {
  const ImageData = useStaticQuery(graphql`
    query {
      newVehicles: file(relativePath: { eq: "wild-kiwi-new-vehicles.jpg" }) {
        ...FluidImage
      }

      localGuids: file(relativePath: { eq: "wild-kiwi-local-guides.jpg" }) {
        ...FluidImage
      }

      smallGroups: file(relativePath: { eq: "wild-kiwi-small-groups.jpg" }) {
        ...FluidImage
      }

      breathTakingScenery: file(
        relativePath: { eq: "wild-kiwi-breathtaking-scenary.jpg" }
      ) {
        ...FluidImage
      }

      newzealand: file(
        relativePath: { eq: "wild-kiwi-destinations-newzealand.jpg" }
      ) {
        ...FluidImage
      }

      australia: file(
        relativePath: { eq: "wild-kiwi-destinations-australia.jpg" }
      ) {
        ...FluidImage
      }

      europe: file(relativePath: { eq: "the-colliseum-rome-italy.jpg" }) {
        ...FluidImage
      }

      landing: file(relativePath: { eq: "Medsailors-Landing-Banner.jpg" }) {
        ...FluidImageBig
      }

      banner: file(relativePath: { eq: "wild-kiwi-how-it-works.jpg" }) {
        ...FluidImageBig
      }

      bannerHero: file(
        relativePath: {
          eq: "wild-kiwi-adventure-tours-flashpacking-new-zealand-australia-small-groups.jpg"
        }
      ) {
        ...FluidImageBig
      }

      bigSouth: file(relativePath: { eq: "wild-kiwi-tours-big-south.jpg" }) {
        ...FluidImage
      }

      northernVoyage: file(
        relativePath: { eq: "wild-kiwi-tours-northern-voyager.jpg" }
      ) {
        ...FluidImage
      }

      NZDiscovery: file(
        relativePath: { eq: "wild-kiwi-tours-nz-discovery.jpg" }
      ) {
        ...FluidImage
      }

      nzExplorer: file(
        relativePath: { eq: "wild-kiwi-tours-nz-explorer.jpg" }
      ) {
        ...FluidImage
      }

      queensland: file(relativePath: { eq: "wild-kiwi-tours-queensland.jpg" }) {
        ...FluidImage
      }

      southernLoop: file(
        relativePath: { eq: "wild-kiwi-tours-southern-loop.jpg" }
      ) {
        ...FluidImage
      }

      instaOne: file(relativePath: { eq: "wild-kiwi-airlie-beach.jpg" }) {
        ...FluidImage
      }

      instaTwo: file(relativePath: { eq: "wild-kiwi-groups-wanaka.jpg" }) {
        ...FluidImage
      }

      instaThree: file(relativePath: { eq: "wild-kiwi-sky-dive-taupo.jpg" }) {
        ...FluidImage
      }

      instaFour: file(
        relativePath: { eq: "wild-kiwi-tamaki-village-rotorua.jpg" }
      ) {
        ...FluidImage
      }

      instaFive: file(
        relativePath: { eq: "wild-kiwi-tours- hot-water-beach.jpg" }
      ) {
        ...FluidImage
      }

      instaSix: file(
        relativePath: { eq: "wild-kiwi-tours-kayak-byron-bay.jpg" }
      ) {
        ...FluidImage
      }

      destinationNewZealand: file(
        relativePath: { eq: "Wild Kiwi Homepage - 16-9 Imagery2.jpg" }
      ) {
        ...FluidImage
      }

      qualmark: file(relativePath: { eq: "QualMark_Footer.png" }) {
        ...FluidImage
      }

      logoMetro: file(relativePath: { eq: "Metro.png" }) {
        ...FluidImage
      }

      logoDaily: file(relativePath: { eq: "Daily_Mail.png" }) {
        ...FluidImage
      }

      logoWestpac: file(relativePath: { eq: "Westpac_Awards.png" }) {
        ...FluidImage
      }

      logoQual: file(relativePath: { eq: "QualMark.png" }) {
        ...FluidImage
      }

      logo: file(relativePath: { eq: "WildKiwi.png" }) {
        ...FluidImage
      }

      vehiclesLady: file(relativePath: { eq: "WildKiwi-1866.jpg" }) {
        ...FluidImage
      }

      vehicleAdventure: file(
        relativePath: {
          eq: "wild-kiwi-adventure-holidays-new-zealand-south-island-holiday-packages-kiwi-bus-tour.jpg"
        }
      ) {
        ...FluidImage
      }

      vehicleInterior: file(
        relativePath: {
          eq: "wild-kiwi-backpacking-new-zealand-south-island-road-trip-kiwi-bus-tour-interior.jpg"
        }
      ) {
        ...FluidImage
      }

      vehicleSouth: file(
        relativePath: {
          eq: "wild-kiwi-tour-new-zealand-south-island-road-trip-kiwi-bus-tour-solo-travel.jpg"
        }
      ) {
        ...FluidImage
      }

      reviews: file(relativePath: { eq: "wild-kiwi-tours-reviews.jpg" }) {
        ...FluidImage
      }
    }
  `)
  return ImageData
}

export default useImageQuery