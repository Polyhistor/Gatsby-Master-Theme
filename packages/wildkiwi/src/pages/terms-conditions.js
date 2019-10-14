import React from "react"
import {
  BLOCKS,
  MARKS,
  INLINES,
  HEADING_1,
  HEADING_2,
  OL_LIST,
  UL_LIST,
  CODE,
  BOLD,
} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// calling our query
import { useTermsQuery, renderSeo, Layout2 } from "@nt-websites/navigate-theme"

const Terms = ({ data }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="activity__paragraph">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="green-title">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <ul className=" blog-single__title">{children}</ul>
      ),
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="u-padding-left-medium">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (node, children) => (
        <ul className="u-padding-left-medium">{children}</ul>
      ),
    },
    renderMark: {
      [MARKS.CODE]: value => value,
    },
  }

  const termsData = useTermsQuery()
  return (
    <Layout2>
      {renderSeo(data)}
      <div className="section-tc">
        <article className="tour-banner__description-details u-margin-top-huge">
          {documentToReactComponents(
            termsData[0].node.description.json,
            options
          )}
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
