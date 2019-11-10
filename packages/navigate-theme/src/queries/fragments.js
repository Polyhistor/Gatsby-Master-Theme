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
      fields {
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
    # tags {
    #   slug
    #   name
    # }
    categories {
      slug
      name
    }
    fields {
      featured_media {
        localFile {
          childImageSharp {
            # resolutions(width: 1500, height: 770) {
            #  src
            # srcSet
            # width
            # height
            #}
            fluid(quality: 70, maxWidth: 770) {
              ...GatsbyImageSharpFluid
            }
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
    fields {
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
    acf {
      title
      facebook
      instagram
      description
      #image {
      # localFile {
      # childImageSharp {
      #  fluid(quality: 80, maxWidth: 770) {
      #...GatsbyImageSharpFluid
      # }
      #}
      #}
      #}
    }
    authored_wordpress__POST {
      id
      title
      slug
      categories {
        slug
        name
      }
      fields {
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
  }
`

// for activities that has been fetched from Contetnful
export const ActivitiesFragment = graphql`
  fragment Activities on ContentfulActivities {
    slug
    title
    subtitle
    price
    status
    country {
      title
      slug
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
          fluid(quality: 80, maxWidth: 2770) {
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
    trailer
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
      url
      title
      route
      priceFrom
      pricePerDay
      slug
      destinationCountry
      duration
      description
      duration
      svgMap {
        localFile {
          publicURL
        }
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
  }
`

// for destinations that has been fetched from Contetnful
export const DestinationsFragment = graphql`
  fragment Destination on ContentfulDestinations {
    url
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
      country {
        slug
      }
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
    buttonUrlRelativeUrl
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
    contentfulid
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
      url
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
    reviewText {
      reviewText
    }
    date
  }
`

// for working for us section
export const WorkingForUsFragment = graphql`
  fragment WorkingForUs on ContentfulWorkingForUs {
    title1
    description1 {
      description1
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

// our yachts secetion
export const YachtFragment = graphql`
  fragment Yacht on ContentfulOurYachts {
    title
    subtitle
    description {
      description
    }
    keyFeatures
    excluded
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

// featured banner
export const FeaturedBoxFragment = graphql`
  fragment FeaturedBox on ContentfulFeaturedBannerContents {
    firstLogo
    fIrstLogoUrl
    secondLogo
    secondLogoUrl
    thirdLogo
    thirdLogoUrl
    fourthLogo
    fourthLogoUrl
  }
`
