import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, author, lang }) {
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
    description: description || site.siteMetadata.description,
    lang,
  }

  /**
   *
   * replace default props using site metadata
   */

  const buildTwitterMeta = (
    metadata,
    type = "website",
    imageUrl = undefined
  ) => {
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
    if (imageUrl) {
      metas.push({
        name: `og:image`,
        content: imageUrl,
      })
    }

    return metas
  }

  const buildOpenGraphMeta = (
    metadata,
    cardType = "summary_large_image",
    imageUrl = undefined
  ) => {
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
      name: `twiiter:title`,
      content: metadata.title,
    })

    if (imageUrl) {
      metas.push({
        name: `twitter:image`,
        content: imageUrl,
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
      //   <script
      //   src="https://navigatetravel9905.activehosted.com/f/embed.php?id=6"
      //   type="text/javascript"
      //   charset="utf-8"
      // />

      // <script src="https://navigatetravel9905.activehosted.com/f/embed.php?id=6" type="text/javascript" charset="utf-8"></script>

      meta={buildMetaTags(globalMetadata)}
    >
      {/* <script
        src="https://navigatetravel9905.activehosted.com/f/embed.php?id=6"
        type="text/javascript"
        charset="utf-8"
      /> */}
    </Helmet>
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
