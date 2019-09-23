import React, { useState } from "react"
import Modal from "react-responsive-modal"
import { Link, withPrefix } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Header = ({
  imageData,
  titleFirst,
  TitleSecond,
  TitleThird,
  subTitle,
  description,
  buttonFirst,
  buttonFirstURL,
  buttonSecond,
  buttonSecondURL,
  buttonStyles,
  optMargin,
  variation,
  popupVideo,
}) => {
  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

  // rendering the contents
  return (
    <>
      <BackgroundImage fluid={imageData} className="bannerHero" id="bannerHero">
        <div className="header">
          <div className={`header__text-box header__text-box--${variation}`}>
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
              {description !== undefined ? (
                <p className="heading-primary--description">{description}</p>
              ) : null}
              {subTitle !== null ? (
                <span className="heading-primary--sub">{subTitle}</span>
              ) : null}
            </h1>
            <div
              className={
                variation === null
                  ? `header__button-box`
                  : `header__button-box header__button-box--${variation}`
              }
            >
              {buttonFirst && buttonFirst !== null ? (
                <Link
                  to={buttonFirstURL}
                  className={`btn btn--${
                    buttonStyles[0]
                  } btn-animated mobile-green-buton`}
                >
                  {buttonFirst}
                </Link>
              ) : null}
              {/* adding one more level of modularity, if the secondbutton text and
            URL is not given, don't show it */}
              {buttonSecond && buttonSecondURL !== null ? (
                <a
                  href="#"
                  onClick={() => setModal({ open: true })}
                  className={`btn btn--${buttonStyles[1]} btn-animated`}
                >
                  <svg className="svg-icon--play-button">
                    <use
                      xlinkHref={withPrefix("sprite.svg#icon-Play-Button")}
                    />
                  </svg>
                  <span className="">{buttonSecond}</span>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </BackgroundImage>

      {/* setting modal values */}
      <Modal
        open={open}
        onClose={() => setModal({ open: false })}
        className={{ overlay: "overlay", modal: "popup" }}
        center
      >
        <div className="popup">
          <iframe
            title="Wild kiwi"
            width="95%"
            height="95%"
            src={popupVideo}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  )
}

export default Header
