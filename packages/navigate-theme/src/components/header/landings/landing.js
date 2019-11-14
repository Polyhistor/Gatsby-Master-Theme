import React, { useState } from "react"
import Modal from "react-responsive-modal"

import BackgroundImage from "gatsby-background-image"

import resolveVariationClass from "../../../helpers/theme-variation-style"

import TextBox from "../textBox"
import TextBoxAlt from "../textBox-alt"

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
}) => {
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
      <BackgroundImage fluid={imageData} className="bannerHero" id="bannerHero">
        <div className="header">
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
