import React from "react"
import { Link } from "gatsby"

const FooterCopyright = () => {
  const data = {
    site: {
      siteMetadata: {
        copyright: "Navigate Travel",
      },
    },
  }

  /*const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)*/
  return (
    <>
      <div className="row">
        <div className="footer__copyright">
          <div className="col-md-1-of-4">
            © Copyright {data.site.siteMetadata.copyright}{" "}
          </div>
          <div className="col-md-1-of-4">
            <Link to="/privacy-policy">
              Privacy and Cookies Policy &nbsp;&nbsp;
            </Link>
            <Link to="/terms-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FooterCopyright
