import React, { useState } from "react"
import { withPrefix } from "gatsby"

import resolveVariationClass from "../helpers/theme-variation-style"

import Modal from "react-responsive-modal"
import { Mobile } from "../helpers/conditionalRenders"

const Intro = ({ title, description, popupvideoURL, mobileButton, email }) => {
  const theme = process.env.GATSBY_THEME

  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

  return (
    <section className="intro">
      <div className="row">
        <h2 className={resolveVariationClass("intro__title")}>{title}</h2>
        <p className="intro__description">
          {description}{" "}
          <span className="booking-details__email">
            {email !== null ? email : null}
          </span>
        </p>
        {mobileButton ? (
          <Mobile>
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
                  xlinkHref={withPrefix(
                    "sprite.svg#icon-Play-Button-White-A-1"
                  )}
                />
              </svg>
              <span>view yacht tour</span>
            </a>
          </Mobile>
        ) : null}
      </div>
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
            src={popupvideoURL}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </section>
  )
}

export default Intro
