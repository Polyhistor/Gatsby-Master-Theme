export const YachtFragment = graphql`
  fragment Yacht on ContentfulOurYachts {
    title
    subtitle
    order
    description {
      description
    }
    yachtMap {
      localFile {
        publicURL
      }
    }
    keyFeatures
    images {
      localFile {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export const WorkingForUsFragment = graphql`
  fragment WorkingForUs on ContentfulWorkingForUs {
    title1
    description1 {
      description1
    }
    description1SecondParagraph {
      description1SecondParagraph
    }
    links
    urLs
    title2
    description2 {
      description2
    }
    title3
    description3 {
      description3
    }
    title4
    description4 {
      description4
    }
    links2
    urLs2
    image1 {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    image2 {
      localFile {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
