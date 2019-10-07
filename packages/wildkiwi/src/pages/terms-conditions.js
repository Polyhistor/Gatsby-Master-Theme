import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// calling our query
import { useTermsQuery } from "@nt-websites/navigate-theme"
import { Layout2, SEO } from "@nt-websites/navigate-theme"

const Terms = () => {
  const termsData = useTermsQuery()
  return (
    <Layout2>
      <SEO />
      <div className="section-vehicles">
        <article className="tour-banner__description-details u-margin-top-huge">
          {documentToReactComponents(termsData[0].node.description.json)}
        </article>
      </div>
    </Layout2>
  )
}

export default Terms
