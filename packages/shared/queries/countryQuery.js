import { graphql, useStaticQuery } from "gatsby"

// our reusable graphql Query for blogs utlizing predefined fragment
const useCountryQuery = () => {
  const countryData = useStaticQuery(graphql`
    query {
      allContentfulCountry {
        edges {
          node {
            ...Country
          }
        }
      }
    }
  `)
  return countryData.allContentfulCountry.edges
}

export default useCountryQuery
