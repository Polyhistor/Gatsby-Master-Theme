import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"

const ActivitiesBox = ({ activityData }) => {
  const theme = process.env.GATSBY_THEME

  const themeOptionsQueryData = useThemeRoutesConfigQuery()

  const renderActivities = () => {
    return activityData.map(
      (
        { status, bannerImages, title, subtitle, price, slug, country },
        idx
      ) => {
        return (
          <Link
            to={`${themeOptionsQueryData.activitiesCountryRoutePrefix}${country.slug}/${slug}`}
            key={idx}
          >
            <div key={idx} className="acitivity-box-single">
              <figure className="acitivity-box-single__image-container">
                <Img
                  className="acitivity-box-single__image"
                  alt={title}
                  fluid={bannerImages[0].localFile.childImageSharp.fluid}
                />
                {status !== null && (
                  <figcaption
                    className={`acitivity-box-single__caption ${
                      status === "null"
                        ? "acitivity-box-single__caption--null"
                        : "Free"
                        ? "acitivity-box-single__caption--free"
                        : "acitivity-box-single__caption--top"
                    }`}
                  >
                    <span>{status}</span>
                  </figcaption>
                )}
              </figure>
              <h3 className="acitivity-box-single__title">{title}</h3>
              <h4 className="acitivity-box-single__sub-title">{subtitle}</h4>
              <span
                className={
                  theme === "ms" ? "heading-5 heading-5--ms" : "heading-5"
                }
              >
                {price}
              </span>
            </div>
          </Link>
        )
      }
    )
  }
  return (
    <div className="section-destination__activities">
      <h2
        className={
          theme === "ms"
            ? "heading-1 heading-1--ms u-padding-bottom-sedium"
            : "heading-1 u-padding-bottom-sedium"
        }
      >
        Activities
      </h2>
      <div className="acitivity-box">{renderActivities()}</div>
      <Link
        to={`${themeOptionsQueryData.activitiesRoute}`}
        className={
          theme === "ms"
            ? "acitivity-box-button acitivity-box-button--ms"
            : "acitivity-box-button"
        }
      >
        All Activities
      </Link>
    </div>
  )
}

export default ActivitiesBox
