import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import useActivityQuery from "../../queries/activityQuery"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"

const ActivityRelated = ({ country }) => {
  const activityQuery = useActivityQuery()
  const themeOptionsQueryData = useThemeRoutesConfigQuery()
  // looping over elements and rendering
  const renderElements = () => {
    return (
      activityQuery
        // showing the tours that are in the same country
        .filter(e => e.node.country.title === country.title)
        .map((acitivity, idx) => {
          // we are interested to show only 4!
          while (idx < 4) {
            return (
              <Link
                to={`${themeOptionsQueryData.activitiesCountryRoutePrefix}${acitivity.node.country.slug}/${acitivity.node.slug}`}
                key={acitivity.node.title}
              >
                <div className="acitivity-box-single">
                  {/* error handling, without this line, the activities with featured images will crash */}
                  {acitivity.node.bannerImages[0] !== null && (
                    <figure className="activity-box-single__image-container">
                      <Img
                        fluid={
                          acitivity.node.bannerImages[0].localFile
                            .childImageSharp.fluid
                        }
                        className="acitivity-box-single__image"
                      />
                    </figure>
                  )}
                  <h3 className="acitivity-box-single__title">
                    {acitivity.node.title}
                  </h3>
                  <h4 className="acitivity-box-single__sub-title">
                    {acitivity.node.subtitle}
                  </h4>
                  <h5
                    className={`${resolveVariationClass(
                      "heading-5"
                    )} heading-5--black`}
                  >
                    {acitivity.node.price}
                  </h5>
                </div>
              </Link>
            )
          }
        })
    )
  }
  return (
    <div className="activity__related">
      <h2 className={resolveVariationClass("heading-1")}>Other Activities</h2>
      {renderElements()}
    </div>
  )
}

export default ActivityRelated
