import SEO from "../components/seo/seo"
import React from "react"

const extractSeoData = data => {
  const seoPageMeta =
    data.allContentfulSeoPageMeta &&
    data.allContentfulSeoPageMeta.edges.length > 0
      ? data.allContentfulSeoPageMeta.edges[0].node
      : {}

  /**
   * Is not possible to identify which page we did not found the seo for.
   * Add an extra parameter to indentify the page for tracking purposes.
   */
  if (seoPageMeta === {} && process.env.NODE_ENV !== "production") {
    console.warn(`SEO not found ${data}`)
  }

  return seoPageMeta
}

const extractSeoFromContext = pageContext => {
  const metadata = pageContext.metadata || {}

  /**
   * Is not possible to identify which page we did not found the seo for.
   * Add an extra parameter to indentify the page for tracking purposes.
   
  if (metadata === {} && process.env.NODE_ENV !== "production") {
    console.error(`SEO not found ${pageContext}`)
  }
  */

  return metadata
}

/*Public exportable methods*/
/**
 * Render seo component based on component graphQL query data
 * @param {*} data
 * Data resolved from graphQL query in component page at build time
 */
export const renderSeo = data => {
  const metadata = extractSeoData(data)
  return <SEO title={metadata.title} description={metadata.description} />
}

/**
 * Render seo component based on component page context
 * @param {*} pageContext
 * Page context
 */
export const renderSeoFromContext = pageContext => {
  const metadata = extractSeoFromContext(pageContext)
  return <SEO title={metadata.title} description={metadata.description} />
}

/**
 * Extract metadata from contentful SEOPageMetaData entries
 * @param {*} pageIdentifier
 * Unique page identifier - should be one of const PAGE_SEO_IDENTIFIERS value
 * @param {*} allContentfulData
 * All Page MetaData extracted from GraphQL
 */

export const extractMetadataFromContentfulData = (
  pageIdentifier,
  allContentfulData
) => {
  const metadata = allContentfulData.find(
    x => x.node.referencedPageIdentifier === pageIdentifier
  )

  if (!metadata) {
    return {}
  }

  return {
    title: metadata.node.title,
    description: metadata.node.description,
  }
}
