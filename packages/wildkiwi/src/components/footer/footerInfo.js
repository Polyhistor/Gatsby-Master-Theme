import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import InfoList from "./infoList"
import useImageQuery from "../../queries/imageQuery"

const FooterInfo = () => {
  const imageData = useImageQuery()

  const renderList = InfoList.map(({ section, links }, idx) => {
    return (
      <React.Fragment key={idx}>
        <h6 className="footer__trips-header">{section}</h6>
        <ul className="footer__trips-list">
          <li className="footer__trips-item">
            {links.map((link, idx) => {
              return (
                <Link to="/" key={idx} className="footer__trips-link">
                  {link}
                </Link>
              )
            })}
          </li>
        </ul>
      </React.Fragment>
    )
  })

  return (
    <>
      <div className="footer__trips mobile-no">
        <h6 className="footer__trips-header">our trips</h6>
        {renderList}
      </div>
      <Img
        fluid={imageData.qualmark.childImageSharp.fluid}
        className="footer__logo-literal"
      />
    </>
  )
}

export default FooterInfo
