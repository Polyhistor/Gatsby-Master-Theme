import React from "react"
import Img from "gatsby-image"

import useHowItWorksQuery from "../../queries/howItWorksQuery"

const HowItWorks = () => {
  // extracting query out of our custom hook
  const howItWorksData = useHowItWorksQuery()

  const renderHowBoxes = () => {
    return howItWorksData.sort().map((element, idx) => {
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
            <button className="how-it-works__button footer__form-links-item">
              {element.node.buttonText}
            </button>
          )}
        </div>
      )
    })
  }

  return (
    <section className="section-how-it-works">
      <div className="how-it-works__container">{renderHowBoxes()}</div>
    </section>
  )
}

export default HowItWorks
