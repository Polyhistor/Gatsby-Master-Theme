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
  imageQuery,
} from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import { Layout2, renderSeo } from "@nt-websites/navigate-theme"

const Privacy = ({ data }) => {
  const privacyPolicyJsonData = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.privacyPolicy.json

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
      [INLINES.HYPERLINK]: (node, children) => {
        const URL = node.data.uri
        return (
          <a href={URL} className="activity__hyperlink" target="_blank">
            {children}
          </a>
        )
      },
    },
    renderMark: {
      [MARKS.CODE]: value => value,
    },
  }

  return (
    <Layout2>
      {renderSeo(data)}
      <div className="section-tc">
        <article className="tour-banner__description-details u-margin-top-huge">
          {documentToReactComponents(privacyPolicyJsonData, options)}
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
