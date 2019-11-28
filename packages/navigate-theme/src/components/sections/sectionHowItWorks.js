import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"
const HowItWorks = ({ data }) => {
  const theme = process.env.GATSBY_THEME

  const footerFormLinksItem = resolveVariationClass("footer__form-links-item")

  const renderHowBoxes = () => {
    return data
      .sort((a, b) => a.node.contentfulid - b.node.contentfulid)
      .map((element, idx) => {
        return (
          <div className="how-it-works__box" key={idx}>
            <div className="how-it-works__image">
              <Img
                fluid={element.node.bannerImage.localFile.childImageSharp.fluid}
                alt={element.node.title}
              />
            </div>
            <h3 className="how-it-works__header feature-box__text">
              {element.node.title}
            </h3>
            {element.node.featureList !== null && (
              <ul className="how-it-works__list">
                {element.node.featureList.map(list => {
                  return <li key={list}>{list}</li>
                })}
              </ul>
            )}
            <p className="how-it-works__description">
              {element.node.description.description}
            </p>
            {element.node.buttonText !== null && (
              <Link
                to={element.node.buttonUrlRelativeUrl}
                className={`how-it-works__button ${footerFormLinksItem}`}
              >
                {element.node.buttonText}
              </Link>
            )}
          </div>
        )
      })
  }

  return (
    <section className="section-how-it-works">
      <div className="how-it-works__container">
        {renderHowBoxes()}
        {/*TODO: old wk - heading-1 u-margin-bottom-small"*/}
        <h2 className={resolveVariationClass("heading-1")}>
          Our travel experiences
        </h2>
      </div>
    </section>
  )
}

export default HowItWorks
