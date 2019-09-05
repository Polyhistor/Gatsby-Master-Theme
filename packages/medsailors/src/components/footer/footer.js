import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { FooterCopyright } from "@nt-websites/shared"

import SocialNetowrk from "./socialNetworks"
import FooterContents from "./footerContents"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  return (
    <footer className="footer">
      <div className="row u-border-top-bottom">
        <div className="footer__main-container">
          <SocialNetowrk />
          <FooterContents />
          <FooterCopyright data={data} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
