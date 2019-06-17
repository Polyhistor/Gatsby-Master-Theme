import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import InfoList from "./infoList"

const FooterInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      qualmark: file(relativePath: { eq: "QualMark_Footer.png" }) {
        childImageSharp {
          fluid(maxWidth: 300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

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
      <div className="footer__trips mobile-no">{renderList}</div>
      <Img
        fluid={data.qualmark.childImageSharp.fluid}
        style={{ width: "6rem" }}
        className="mobile-no"
      />
    </>
  )
}

export default FooterInfo
