import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ActivityRelated = ({ activityQuery }) => {
  // looping over elements and rendering
  const renderElements = () => {
    return activityQuery.map(acitivity => {
      return (
        <Link
          to={`/activities/${acitivity.node.slug}`}
          key={acitivity.node.title}
        >
          {/* error handling, without this line, the activities with featured images will crash */}
          {acitivity.node.bannerImages[0] !== null && (
            <Img
              fluid={
                acitivity.node.bannerImages[0].localFile.childImageSharp.fluid
              }
            />
          )}
          <h3 className="activity__title">{acitivity.node.title}</h3>
          <h4 className="activity__subtitle"> {acitivity.node.subtitle}</h4>
          <h5 className="activity__price">{acitivity.node.price}</h5>
        </Link>
      )
    })
  }
  return (
    <div className="activity__related">
      <h2 className="green-title">Other Activities</h2>
      {renderElements()}
    </div>
  )
}

export default ActivityRelated
