import { graphql, useStaticQuery } from "gatsby"

const useFeatureBox = () => {
  const featureBoxData = useStaticQuery(graphql`
    query {
      allContentfulFeaturedBannerLogos {
        edges {
          node {
            ...FeaturedBox
          }
        }
      }
    }
  `)
  return featureBoxData.allContentfulFeaturedBannerLogos.edges
}

export default useFeatureBox
