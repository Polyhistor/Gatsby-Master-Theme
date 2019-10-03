import React from "react"

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

// calling our query
import { usePrivacyQuery } from "@nt-websites/navigate-theme"
import { Layout2, SEO } from "@nt-websites/navigate-theme"

const Privacy = () => {
  const privacyData = usePrivacyQuery()
  return (
    <Layout2>
      <SEO />
      <div className="section-vehicles">
        <article className="tour-banner__description-details u-margin-bottom-small">
          {documentToReactComponents(privacyData[0].node.description.json)}
        </article>
      </div>
    </Layout2>
  )
}

export default Privacy
