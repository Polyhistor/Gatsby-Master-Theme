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

// for fluid images that we use on landing, big banners
export const FluidImageFragmentBig = graphql`
  fragment FluidImageBig on File {
    childImageSharp {
      fluid(quality: 80, maxWidth: 2160) {
        ...GatsbyImageSharpFluid_withWebp
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
              fluid(quality: 70, maxWidth: 770) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    categories {
      slug
      name
    }
    featured_media {
      localFile {
        childImageSharp {
          resolutions(width: 1500, height: 770) {
            src
            srcSet
            width
            height
          }
          fluid(quality: 70, maxWidth: 770) {
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
            fluid(quality: 80, maxWidth: 770) {
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
            fluid(quality: 80, maxWidth: 770) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// for activities that has been fetched from Contetnful
export const ActivitiesFragment = graphql`
  fragment Activities on ContentfulActivities {
    slug
    title
    subtitle
    price
    country {
      title
    }
    svgMap {
      localFile {
        publicURL
      }
    }
    description {
      json
    }
    bannerImages {
      localFile {
        childImageSharp {
          fluid(quality: 80, maxWidth: 770) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// for countries that has been fetched from Contetnful
export const CountriesFragment = graphql`
  fragment Country on ContentfulCountry {
    contentfulid
    slug
    title
    banner {
      localFile {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4070) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    days
    departure
    description
    bannerDescription
    price
    svgMap {
      localFile {
        publicURL
      }
    }
    destinations {
      title
      route
      priceFrom
      pricePerDay
      slug
      destinationCountry
      duration
      bannerImages {
        localFile {
          childImageSharp {
            fluid(quality: 80, maxWidth: 770) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// for destinations that has been fetched from Contetnful
export const DestinationsFragment = graphql`
  fragment Destination on ContentfulDestinations {
    slug
    filterTag
    title
    destinationCountry
    duration
    descriptionLong {
      descriptionLong
    }
    activity {
      title
      subtitle
      slug
      price
      status
      bannerImages {
        localFile {
          childImageSharp {
            fluid(quality: 80, maxWidth: 1100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    highlightsTitles
    highlightsDescriptions
    highlightsImages {
      localFile {
        childImageSharp {
          fluid(quality: 70, maxWidth: 720) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    svgMap {
      localFile {
        publicURL
      }
    }
    route
    priceFrom
    pricePerDay
    included
    numberOfCountries
    itinerary {
      itineraryTitles
      itineraryImages {
        localFile {
          childImageSharp {
            fluid(quality: 80, maxWidth: 770) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      itineraryDescription {
        itineraryDescription
      }
      days {
        title
        description {
          description
        }
      }
    }
    country {
      title
    }
    bannerImages {
      localFile {
        childImageSharp {
          fluid(quality: 80, maxWidth: 770) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    gettingThere {
      description {
        description
      }
      international
      internationalLinks
      domestic
      domesticLinks
    }
  }
`

// for how-it-works boxes that has been fetched from Contetnful
export const HowItWorksFragment = graphql`
  fragment HowItWorks on ContentfulHowItWorks {
    contentfulid
    title
    description {
      description
    }
    buttonText
    featureList
    bannerImage {
      localFile {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// for FAQ lists that has been fetched from Contetnful
export const FAQFragment = graphql`
  fragment FAQ on ContentfulFaq {
    questions
    answers
    category
  }
`

// for aboutUs boxes that has been fetched from Contentful
export const AboutUsFragment = graphql`
  fragment AboutUs on ContentfulAboutUs {
    title
    content {
      content
    }
    order
    banner {
      localFile {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// for Our Team section that has been fetched from Contetnful
export const TeamFragment = graphql`
  fragment Team on ContentfulTeam {
    name
    title
    image {
      localFile {
        childImageSharp {
          fluid(maxWidth: 770) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

// for why wild kiwi section that has been fetched from Contentful
export const HomePageFragment = graphql`
  fragment HomePage on ContentfulHomePage {
    whyWildKiwi {
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
      titleMobile
      description {
        description
      }
      descriptionMobile {
        descriptionMobile
      }
    }
    popularTours {
      slug
      destinationCountry
      title
      route
      priceFrom
      pricePerDay
      duration
      bannerImages {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

// for why wild kiwi section on itinerary page
export const WhyWildFragment = graphql`
  fragment WhyWildSection on ContentfulWhyWildSectionDestinations {
    title
    description {
      description
    }
    banner {
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

// for reviews section
export const ReviewsFragment = graphql`
  fragment Reviews on ContentfulReviews {
    contentful_id
    title
    country
    reccomended
    name
    reviewText
    date
  }
`
