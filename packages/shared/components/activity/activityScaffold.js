import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ActivityScaffold = ({ title, subtitle, price, svgMap, description }) => {
  // this allows us to render specific node types
  // const options = {
  //   renderNode: {
  //     "embedded-asset-block": node => {
  //       return
  //     }
  //   }
  // }

  return (
    <div className="activity activity--single">
      <h1 className="activity__title">{title}</h1>
      <h3 className="activity__subtitle">{subtitle}</h3>
      <h4 className="activity__price">{price}</h4>
      {description !== null && (
        <p className="activity__body">
          {documentToReactComponents(description)}
        </p>
      )}
      <img className="activity__svg-map" src={svgMap} alt={title} />
      <div className="activity__button-box">
        <Link to="/activities" className="acitivity-box-button">
          All Activities
        </Link>
      </div>
    </div>
  )
}

export default ActivityScaffold
