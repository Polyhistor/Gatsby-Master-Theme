import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, author, lang, imageLink }) {
  /*The default SEO comes from homePage*/

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const globalMetadata = {
    title: title || site.siteMetadata.title,
    imageUrl: imageLink,
    description: description || site.siteMetadata.description,
    lang,
  }

  /**
   *
   * replace default props using site metadata
   */

  const buildTwitterMeta = (metadata, type = "website") => {
    const metas = []

    metas.push({
      name: `og:type`,
      content: type,
    })

    metas.push({
      name: `og:title`,
      content: metadata.title,
    })

    metas.push({
      name: `og:description`,
      content: metadata.description,
    })
    if (metadata.imageUrl) {
      metas.push({
        name: `og:image`,
        content: metadata.imageUrl,
      })
    }

    return metas
  }

  const buildOpenGraphMeta = (metadata, cardType = "summary_large_image") => {
    const metas = []

    metas.push({
      name: `twitter:card`,
      content: cardType,
    })

    metas.push({
      name: `twitter:description`,
      content: metadata.description,
    })

    metas.push({
      name: `twitter:title`,
      content: metadata.title,
    })

    if (metadata.imageUrl) {
      metas.push({
        name: `twitter:image`,
        content: metadata.imageUrl,
      })
    }

    return metas
  }

  /**
   * Build Metatags based on metadata props
   */
  const buildMetaTags = metaData => {
    const metaTags = []

    metaTags.push({
      name: `description`,
      content: metaData.description,
    })

    metaTags.push(...buildOpenGraphMeta(metaData))

    metaTags.push(...buildTwitterMeta(metaData))

    return metaTags
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: globalMetadata.lang,
      }}
      title={globalMetadata.title}
      meta={buildMetaTags(globalMetadata)}
    ></Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
  author: undefined,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  //remove the warning
  //title: PropTypes.string.isRequired,
}

export default SEO
