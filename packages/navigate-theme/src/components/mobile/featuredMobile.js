import React from "react"
import { withPrefix } from "gatsby"

// extracting our hook
import useFeatureBox from "../../queries/featuredBoxQuery"

const FeaturedMobile = () => {
  const theme = process.env.GATSBY_THEME

  const featuredBoxData = useFeatureBox()

  return (
    <div
      className={
        theme === "ms"
          ? "featured--mobile featured--mobile-ms"
          : "featured--mobile"
      }
    >
      <div
        className={
          theme === "ms"
            ? "featured__container featured__container--ms"
            : "featured__container"
        }
      >
        <h2 className="featured--mobile__heading">featured in</h2>
        <div className="featured__container-image featured__container-image--metro">
          <a href={featuredBoxData[0].node.fIrstLogoUrl} target="__blank">
            <svg className="svg-icon--logo-metro">
              <use
                xlinkHref={withPrefix(
                  `sprite.svg#icon-${featuredBoxData[0].node.firstLogo}`
                )}
              />
            </svg>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--daily u-translateY-medium">
          <a href={featuredBoxData[0].node.secondLogoUrl} target="__blank">
            <svg className="svg-icon--logo-metro">
              <use
                xlinkHref={withPrefix(
                  `sprite.svg#icon-${featuredBoxData[0].node.secondLogo}`
                )}
              />
            </svg>
          </a>
        </div>
        <h2 className="featured--mobile__heading">recognised by</h2>
        <div className="featured__container-image featured__container-image--west">
          <a href={featuredBoxData[0].node.thirdLogoUrl} target="__blank">
            <svg className="svg-icon--logo-metro">
              <use
                xlinkHref={withPrefix(
                  `sprite.svg#icon-${featuredBoxData[0].node.thirdLogo}`
                )}
              />
            </svg>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--qual">
          <a href={featuredBoxData[0].node.fourthLogoUrl} target="__blank">
            <svg className="svg-icon--logo-metro">
              <use
                xlinkHref={withPrefix(
                  `sprite.svg#icon-${featuredBoxData[0].node.fourthLogo}`
                )}
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedMobile
