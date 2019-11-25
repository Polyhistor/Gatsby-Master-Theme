import React from "react"

import { Layout2 } from "@nt-websites/navigate-theme"
import { SEO } from "@nt-websites/navigate-theme"
import { useImageQuery } from "@nt-websites/navigate-theme"

const NotFoundPage = () => {
  const imageQuery = useImageQuery()
  return (
    <Layout2>
      <SEO title="404: Not found" />
      <section className="page-404">
        <h3 className="feature-box__text">Whoops!</h3>
        <h1 className="green-title">404</h1>
        <p className="tour-banner__description-details">
          The page you're looking for does not exist
        </p>
      </section>
    </Layout2>
  )
}

export default NotFoundPage
