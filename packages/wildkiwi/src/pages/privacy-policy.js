import React from "react"
import {
  BLOCKS,
  INLINES,
  HEADING_1,
  HEADING_2,
  OL_LIST,
  UL_LIST,
  CODE,
  BOLD,
} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import {
  Layout2,
  usePrivacyQuery,
  renderSeo,
} from "@nt-websites/navigate-theme"

const Privacy = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="activity__paragraph">{children}</p>
      ),
    },
  }
  // calling our hook
  const privacyData = usePrivacyQuery()
  return (
    <Layout2>
      {renderSeo(data)}
      <div className="section-tc">
        <article className="tour-banner__description-details u-margin-top-huge">
          {documentToReactComponents(
            privacyData[0].node.description.json,
            options
          )}
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
