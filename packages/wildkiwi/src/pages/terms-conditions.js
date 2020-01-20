import React from "react"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// calling our query
import {
  renderSeo,
  Layout2,
  resolveVariationClass,
  useWebSiteConfigQuery,
} from "@nt-websites/navigate-theme"

const Terms = ({ data }) => {
  const termsJsonData = useWebSiteConfigQuery().contentfulWebsiteConfiguration
    .termsConditions.json
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
          <a
            href={URL}
            className={resolveVariationClass("activity__hyperlink")}
            target="_blank"
          >
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
          {documentToReactComponents(termsJsonData, options)}
        </article>
      </div>
    </Layout2>
  )
}

export default Terms

export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "terms-conditions" } }
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
