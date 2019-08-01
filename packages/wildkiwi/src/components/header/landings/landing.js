import React from "react"
import { Link, withPrefix } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = ({
  imageData,
  titleFirst,
  TitleSecond,
  TitleThird,
  subTitle,
  buttonFirst,
  buttonFirstURL,
  buttonSecond,
  buttonSecondURL,
  buttonStyles,
  description,
  optMargin,
  variation,
}) => {
  // rendering the contents
  return (
    <BackgroundImage fluid={imageData} className="bannerHero">
      <div className="header">
        <div className={`header__text-box ${optMargin}`}>
          <h1
            className={
              variation === null
                ? `heading-primary`
                : `heading-primary heading-primary--${variation}`
            }
          >
            <span className="heading-primary--main">
              {titleFirst} <br />
              {TitleSecond && TitleThird !== null ? (
                <>
                  {TitleSecond} <br /> {TitleThird}
                </>
              ) : null}
            </span>
            {subTitle !== null ? (
              <span className="heading-primary--sub">{subTitle}</span>
            ) : null}
          </h1>
          {description !== null ? (
            <p className="heading-primary--description">{description}</p>
          ) : null}
          <div
            className={
              variation === null
                ? `header__button-box`
                : `header__button-box header__button-box--${variation}`
            }
          >
            <Link
              to={buttonFirstURL}
              className={`btn btn--${
                buttonStyles[0]
              } btn-animated mobile-green-buton`}
            >
              {buttonFirst}
            </Link>
            {/* adding one more level of modularity, if the secondbutton text and
            URL is not given, don't show it */}
            {buttonSecond && buttonSecondURL !== null ? (
              <Link
                to={buttonSecondURL}
                className={`btn btn--${buttonStyles[1]} btn-animated`}
              >
                <svg className="svg-icon--play-button">
                  <use xlinkHref={withPrefix("sprite.svg#icon-Play-Button")} />
                </svg>
                <span className="">{buttonSecond}</span>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
