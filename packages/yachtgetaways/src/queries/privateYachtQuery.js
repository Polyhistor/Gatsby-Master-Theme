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

            whyCharterPrivateYacht {
              banner {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 90) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }

              title
              description {
                description
              }
              descriptionMobile {
                descriptionMobile
              }
            }
            privateYachtDestinations {
              slug
              title
              titleForEnquiryForm
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
