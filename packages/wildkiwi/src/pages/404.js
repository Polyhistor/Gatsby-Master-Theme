import React from "react"

import { Layout2 } from "@nt-websites/navigate-theme"
import { SEO } from "@nt-websites/navigate-theme"

const NotFoundPage = () => (
  <Layout2>
    <SEO title="404: Not found" />
    <section className="page-404">
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout2>
)

export default NotFoundPage
