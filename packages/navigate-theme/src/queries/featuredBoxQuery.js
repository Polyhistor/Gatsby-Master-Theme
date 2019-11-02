import { graphql, useStaticQuery } from "gatsby"

const useFeatureBox = () => {
  const featureBoxData = useStaticQuery(graphql`
    query {
      allContentfulFeaturedBannerContents {
        edges {
          node {
            ...FeaturedBox
          }
        }
      }
    }
  `)
  return featureBoxData.allContentfulFeaturedBannerContents.edges
}

export default useFeatureBox
