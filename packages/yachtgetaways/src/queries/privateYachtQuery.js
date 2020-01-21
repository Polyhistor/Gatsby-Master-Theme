import { graphql, useStaticQuery } from "gatsby"

const usePrivateYachtQuery = () => {
  const YachtData = useStaticQuery(graphql`
    query {
      allContentfulPrivateYachtCharter {
        edges {
          node {
            privateYachtCountries {
              ...Country
            }
            privateYachtDestinations {
              slug
              title
              country {
                ...Country
              }

              departureCity
              duration
              description
              svgMap {
                localFile {
                  publicURL
                }
              }

              bannerImage {
                localFile {
                  childImageSharp {
                    fluid(quality: 80, maxWidth: 770) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }

            introTitle
            introText

            ourCatamarans {
              ...Yacht
              familyPage
            }
            ourYachts {
              ...Yacht
              familyPage
            }

            ourCrewBoxes {
              items
              header
              description
            }

            ourCrewBoxImages {
              localFile {
                ...FluidImage
              }
            }

            bannerImage {
              localFile {
                ...FluidImage
              }
            }

            optionalExtras {
              icon
              text
            }

            whatIsIncluded {
              icon
              text
            }
          }
        }
      }
    }
  `)
  return YachtData.allContentfulPrivateYachtCharter.edges
}

export default usePrivateYachtQuery
