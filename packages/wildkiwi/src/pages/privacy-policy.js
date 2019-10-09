import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import {
  Layout2,
  usePrivacyQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

const Privacy = ({ data }) => {
  const privacyData = usePrivacyQuery()
  return (
    <Layout2>
      {renderSeo(data)}
      <div className="section-vehicles">
        <article className="tour-banner__description-details u-margin-top-huge">
          {documentToReactComponents(privacyData[0].node.description.json)}
        </article>
      </div>
    </Layout2>
  )
}

export default Privacy

export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "privacy-policy" } }
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
