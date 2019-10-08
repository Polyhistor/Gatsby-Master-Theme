import { graphql, useStaticQuery } from "gatsby"

const useFAQVideoQuery = () => {
  const FAQVideoData = useStaticQuery(graphql`
    query {
      allContentfulFaqVideos {
        edges {
          node {
            title
            videoUrl
          }
        }
      }
    }
  `)
  return FAQVideoData.allContentfulFaqVideos.edges
}

export default useFAQVideoQuery
