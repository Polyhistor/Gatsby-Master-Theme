import React from "react"
import { useFooterQuery } from "@nt-websites/navigate-theme"

const FooterLogoContainer = () => {
  const footerQuery = useFooterQuery()

  console.log(footerQuery[0].node)

  const renderLogos = () =>
    footerQuery[0].node.logos.map((e, idx) => (
      <div key={idx}>
        <img src={e.localFile.publicURL}></img>
      </div>
    ))

  return <section className="footer__logo-container">{renderLogos()}</section>
}

export default FooterLogoContainer
