import React, { useState } from "react"
import { Link, withPrefix } from "gatsby"
import Modal from "react-responsive-modal"

import Box from "../boxes/box"

const WhyWildKiwi = ({ data, popupVideo }) => {
  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

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
        <h2 className="green-title bold-green u-margin-bottom-small">
          Why Wild Kiwi ?
        </h2>
        <div className="whywild">
          <div className="whywild__container">{renderData()}</div>
          <a
            onClick={() => setModal({ open: true })}
            href="#"
            className="btn btn--green btn-animated  u-margin-top-medium "
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
            className="btn btn--white  u-margin-top-medium"
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
