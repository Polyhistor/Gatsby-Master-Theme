import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, author, lang }) {
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

  /**
   * replace default props using site metadata
   */
  const metaData = {
    title: title || site.siteMetadata.title,
    description: description || site.siteMetadata.description,
    author: author || site.siteMetadata.author,
    lang,
  }
  /**
   * Build Metatags based on metadata props
   */
  const buildMetaTags = () => {
    const metaTags = []

    metaTags.push({
      property: `og:title`,
      content: metaData.title,
    })

    metaTags.push({
      property: `og:description`,
      content: metaData.description,
    })
    metaTags.push({
      property: `og:type`,
      content: `website`,
    })

    return metaTags
    /*
    Later: 
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: metaData.author,
    },
    {
      name: `twitter:title`,
      content: metaData.title,
    },
    {
      name: `twitter:description`,
      content: metaData.description,
    },*/
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: metaData.lang,
      }}
      title={metaData.title}
      //   <script
      //   src="https://navigatetravel9905.activehosted.com/f/embed.php?id=6"
      //   type="text/javascript"
      //   charset="utf-8"
      // />

      // <script src="https://navigatetravel9905.activehosted.com/f/embed.php?id=6" type="text/javascript" charset="utf-8"></script>

      meta={buildMetaTags()}
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
  title: PropTypes.string.isRequired,
}

export default SEO
