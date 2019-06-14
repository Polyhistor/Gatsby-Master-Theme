import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FooterCopyright = () => {
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
    <>
      <div className="row u-padding-bottom-medium ">
        <div className="col-md-1-of-4">
          © Copyright {data.site.siteMetadata.copyright}{" "}
          {new Date().getFullYear()}
        </div>
        <div className="col-md-1-of-4">
          Privacy and Cookies Policy Terms and Conditions
        </div>
      </div>
    </>
  )
}

export default FooterCopyright
