import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const FooterCopyright = ({ data }) => {
  return (
    <>
      <div className="row">
        <div className="footer__copyright">
          <div className="col-md-1-of-4">
            © Copyright {data.site.siteMetadata.copyright}{" "}
            {new Date().getFullYear()}
          </div>
          <div className="col-md-1-of-4">
            Privacy and Cookies Policy Terms and Conditions
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterCopyright