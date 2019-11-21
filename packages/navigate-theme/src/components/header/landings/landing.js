import React, { useState } from "react"
import Modal from "react-responsive-modal"

import BackgroundImage from "gatsby-background-image"

import resolveVariationClass from "../../../helpers/theme-variation-style"

import TextBox from "../textBox"
import TextBoxAlt from "../textBox-alt"
import Triangle from "../../header/objects/triangle"
import Circle from "../../header/objects/circle"
import Diamond from "../../header/objects/diamond"
import Xmark from "../../header/objects/xMark"
import GreenBar from "../../bars/greenBar"

const Header = ({
  imageData,
  titleFirst,
  TitleSecond,
  TitleThird,
  subTitle,
  buttonFirst,
  buttonFirstURL,
  buttonSecond,
  buttonStyles,
  variation,
  popupVideo,
  shape,
  mobileBanner,
}) => {
  const SVGIcon = "wheel"

  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

  let theme = process.env.GATSBY_THEME

  const button1Class = `btn--${buttonStyles[0]}`

  const button2Class = `btn--${buttonStyles[1]}`

  const button1ClassResolved = `btn ${resolveVariationClass(
    button1Class
  )} btn-animated mobile-green-buton`

  const button2ClassResolved = `btn ${resolveVariationClass(
    button2Class
  )} btn-animated`

  const subTitleClass =
    theme === "ms"
      ? "paragraph paragraph--white paragraph--black paragraph--uppercase"
      : "paragraph paragraph--nexaRust-white-capitalized"

  // rendering the contents
  return (
    <>
      {mobileBanner ? (
        <h1 className={`${resolveVariationClass("header__title")} mobile-yes`}>
          {titleFirst}
        </h1>
      ) : null}
      <BackgroundImage
        fluid={imageData}
        className={mobileBanner ? "bannerHero bannerHero--alt" : "bannerHero"}
        id="bannerHero"
      >
        <div className="header">
          <div
            className={
              variation === false
                ? `${resolveVariationClass("header__text-box")}`
                : "header__text-box header__text-box--alt"
            }
          >
            <div className="header__object-container">
              {shape === "circle" ? (
                <>
                  <Circle></Circle>
                  <Xmark></Xmark>
                  <Circle></Circle>
                  <Xmark></Xmark>
                </>
              ) : shape === "diamond" ? (
                <>
                  <Diamond></Diamond>
                  <Xmark></Xmark>
                  <Diamond></Diamond>
                  <Xmark></Xmark>
                </>
              ) : (
                <>
                  <Triangle></Triangle>
                  <Xmark></Xmark>
                  <Triangle></Triangle>
                  <Xmark></Xmark>
                </>
              )}
            </div>
            {variation === false ? (
              <TextBox
                setModal={setModal}
                buttonSecond={buttonSecond}
                button1Class={button1ClassResolved}
                button2Class={button2ClassResolved}
                subtitleClass={subTitleClass}
                titleFirst={titleFirst}
                titleSecond={TitleSecond}
                titleThird={TitleThird}
                subTitle={subTitle}
                buttonFirst={buttonFirst}
                buttonFirstURL={buttonFirstURL}
                shape={shape}
              />
            ) : (
              <TextBoxAlt
                setModal={setModal}
                buttonSecond={buttonSecond}
                button2Class={button2ClassResolved}
                titleFirst={titleFirst}
                titleSecond={TitleSecond}
                titleThird={TitleThird}
                shape={shape}
              />
            )}
          </div>
        </div>
      </BackgroundImage>

      {mobileBanner ? (
        <div className="mobile-yes">
          <GreenBar
            text="Skippered sailing holidays for 20-35 year olds"
            imageData={SVGIcon}
            imageAlt="Wild-Kiwi-Mountaints-Logo"
          />
        </div>
      ) : null}

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
