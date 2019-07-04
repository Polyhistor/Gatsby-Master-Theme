import { graphql } from "gatsby"

// for fluid images that we use on boxes, tours banners, etc
export const FluidImageFragment = graphql`
  fragment FluidImage on File {
    childImageSharp {
      fluid(quality: 70, maxWidth: 1160) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
// for wordporess posts that has been fetched
export const BlogPostFragment = graphql`
  fragment BlogPost on wordpress__POST {
    id
    title
    content
    excerpt
    date
    slug
    author {
      slug
      name
      acf {
        image {
          localFile {
            childImageSharp {
              fluid(quality: 70, maxWidth: 210) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    categories {
      name
    }
    featured_media {
      localFile {
        childImageSharp {
          resolutions(width: 1500, height: 600) {
            src
            srcSet
            width
            height
          }
          fluid(quality: 70, maxWidth: 210) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// for authors that has been fetched
export const BlogAuthorFragment = graphql`
  fragment BlogAuthor on wordpress__wp_users {
    id
    name
    description
    slug
    acf {
      facebook
      instagram
      description
      image {
        localFile {
          childImageSharp {
            fluid(quality: 80, maxWidth: 510) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    authored_wordpress__POST {
      id
      title
      slug
      categories {
        name
      }
      featured_media {
        localFile {
          childImageSharp {
            fluid(quality: 80, maxWidth: 510) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
