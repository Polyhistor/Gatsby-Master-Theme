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
    title
    content
    excerpt
    date
    slug
    author {
      name
      avatar_urls {
        wordpress_96
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
