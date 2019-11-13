import React, { useState } from "react"
import { Link, withPrefix } from "gatsby"
import Modal from "react-responsive-modal"
import resolveVariationClass from "../../helpers/theme-variation-style"
import Box from "../boxes/box"

const WhyWildKiwi = ({ data, popupVideo }) => {
  const theme = process.env.GATSBY_THEME

  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })
  const brandName = process.env.GATSBY_BRAND_NAME

  // rendering data
  const renderData = () =>
    data.map((box, idx) => (
      <Box
        key={idx}
        imageData={box.banner.localFile.childImageSharp.fluid}
        title={box.titleMobile}
        description={box.descriptionMobile.descriptionMobile}
      />
    ))

  return (
    <>
      <div className="section-mobile__why-wild">
        <h2
          className={
            theme === "ms"
              ? "heading-1 heading-1--ms  u-margin-bottom-small"
              : "heading-1 u-margin-bottom-small"
          }
        >
          Why {brandName}?
        </h2>
        <div className="whywild">
          <div className="whywild__container">{renderData()}</div>
          <a
            onClick={() => setModal({ open: true })}
            href="#"
            className={
              theme === "ms"
                ? "btn btn--med-blue btn-animated  u-margin-top-medium"
                : "btn btn--green btn-animated  u-margin-top-medium"
            }
          >
            <svg className="svg-icon--play-button svg-icon--play-button--mobile">
              <use
                xlinkHref={withPrefix("sprite.svg#icon-Play-Button-White-A-1")}
              />
            </svg>
            <span>watch trailer</span>
          </a>
          <Link
            to="/how-it-works"
            className={`btn ${resolveVariationClass(
              "btn--white"
            )} u-margin-top-medium`}
          >
            <span>How it works</span>
          </Link>
        </div>
      </div>
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

export default WhyWildKiwi
