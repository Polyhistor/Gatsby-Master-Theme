import React from "react"
import Img from "gatsby-image"

import useActivitiesData from "./activitiesData"

const ActivitiesBox = () => {
  // taking data out of our custom hook
  const ActivitiesData = useActivitiesData()

  const renderActivities = () => {
    return ActivitiesData.map((activitiy, idx) => {
      return (
        <div key={idx} className="acitivity-box-single">
          <figure className="acitivity-box-single__image-container">
            <Img
              className="acitivity-box-single__image"
              alt={activitiy.title}
              fluid={activitiy.imageData}
            />
            {activitiy.caption !== null && (
              <figcaption
                className={`acitivity-box-single__caption ${
                  activitiy.caption === "free"
                    ? "acitivity-box-single__caption--free"
                    : "acitivity-box-single__caption--top"
                }`}
              >
                <span>{activitiy.caption}</span>
              </figcaption>
            )}
          </figure>
          <h3 className="acitivity-box-single__title">{activitiy.title}</h3>
          <h4 className="acitivity-box-single__sub-title">
            {activitiy.subtitle}
          </h4>
          <span className="acitivity-box-single__price">{activitiy.price}</span>
        </div>
      )
    })
  }
  return (
    <div className="section-destination__activities">
      <h2 className="green-title u-padding-bottom-sedium">Activities</h2>
      <div className="acitivity-box">{renderActivities()}</div>
      <a href="wildkiwi.com" className="acitivity-box-button">
        All Activities
      </a>
    </div>
  )
}

export default ActivitiesBox
