import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// calling our query
import { useTermsQuery, renderSeo, Layout2 } from "@nt-websites/navigate-theme"

const Terms = ({ data }) => {
  const termsData = useTermsQuery()
  return (
    <Layout2>
      {renderSeo(data)}
      <div className="section-tc">
        <article className="tour-banner__description-details u-margin-top-huge">
          {documentToReactComponents(termsData[0].node.description.json)}
        </article>
      </div>
    </Layout2>
  )
}

export default Terms

export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "terms-condition" } }
    ) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
