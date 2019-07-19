import React from "react"
import Img from "gatsby-image"

const SectionVehicles = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  title,
  paragraph,
  listHeader,
  listItems,
  paragraphSecond,
}) => {
  const renderList = () => {
    return listItems.map(({ label }, idx) => {
      return <li key={idx}>{label}</li>
    })
  }

  return (
    <div className="section-vehicles">
      <div className="vehicles__container">
        <div className="vehicles__images">
          <Img fluid={imageOne} alt="vehicles-wildkiwi-1" />
          <Img fluid={imageTwo} alt="vehicles-wildkiwi-2" />
          <Img fluid={imageThree} alt="vehicles-wildkiwi-3" />
          <Img fluid={imageFour} alt="vehicles-wildkiwi-4" />
        </div>
        <div className="vehicles__text">
          <h2 className="">{title}</h2>
          <p>{paragraph}</p>
          <ul>
            <b>{listHeader}</b>
            {renderList()}
          </ul>
          <p>{paragraphSecond}</p>
          <a
            className="btn btn--green btn-animated mobile-green-buton"
            href="/blog"
          >
            Watch Vehicles Tour
          </a>
        </div>
      </div>
    </div>
  )
}

export default SectionVehicles
