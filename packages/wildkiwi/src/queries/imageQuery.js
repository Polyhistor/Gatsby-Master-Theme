import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for images utlizing predefined fragment
const useImageQuery = () => {
  const ImageData = useStaticQuery(graphql`
    query {
      newVehicleDesk: file(relativePath: { eq: "wild-kiwi-new-vehicles.jpg" }) {
        ...FluidImage
      }
    }
  `)
  return ImageData.newVehicleDesk.childImageSharp.fluid
}

export default useImageQuery
