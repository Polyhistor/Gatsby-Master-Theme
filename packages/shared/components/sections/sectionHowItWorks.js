import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const SectionHowItWorks = ({ data }) => {
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
            <h3 className="how-it-works__header activity__title">
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
              <Link className="how-it-works__button footer__form-links-item">
                {element.node.buttonText}
              </Link>
            )}
          </div>
        )
      })
  }

  return (
    <section className="section-how-it-works">
      <div className="mobile-yes">
        <h2 className="bold-green u-margin-bottom-small ">
          Part of the adventure is getting there, so you may as well do it in
          style.
        </h2>
      </div>
      <div className="how-it-works__container">
        {renderHowBoxes()}
        <h2 className="green-title u-margin-bottom-small">
          Our travel experiences
        </h2>
      </div>
    </section>
  )
}

export default SectionHowItWorks
