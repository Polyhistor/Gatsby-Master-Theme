import React, { useState } from "react"
import { withPrefix } from "gatsby"
import Modal from "react-responsive-modal"
import resolveVariationClass from "../../helpers/theme-variation-style"
import Box from "../boxes/box"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const WhyWildKiwi = ({ data, popupVideo, title }) => {
  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

  const playIcon = useWebSiteConfigQuery().sitePlugin.pluginOptions.config
    .playIcon

  // rendering data
  const renderData = () =>
    data.whyWildKiwi.map((box, idx) => (
      <Box
        key={idx}
        imageData={box.banner.localFile.childImageSharp.fluid}
        title={box.title}
        description={box.descriptionMobile.descriptionMobile}
      />
    ))

  return (
    <>
      <div className="section-mobile__why-wild">
        <div className="row">
          {title !== null ? (
            <>
              <h2
                className={`${resolveVariationClass(
                  "heading-2"
                )} heading-2--black`}
              >
                {data.mobileIntroTitle}
              </h2>
              <p>{data.mobileIntroDescription}</p>
            </>
          ) : null}

          <div className="whywild">
            <div className="whywild__container">{renderData()}</div>
            <a
              onClick={() => setModal({ open: true })}
              href="#"
              className={`btn ${resolveVariationClass("btn--trailer-button")}`}
            >
              {/* <svg className="svg-icon--play-button svg-icon--play-button--mobile">
                <use
                  xlinkHref={withPrefix(
                    "sprite.svg#icon-Play-Button-White-A-1"
                  )}
                />
              </svg> */}
              <img
                className="play-button"
                src={playIcon}
                alt="play-button"
              ></img>
              <span>watch trailer</span>
            </a>
            {/* <Link
            to="/how-it-works"
            className={`btn ${resolveVariationClass(
              "btn--white"
            )} u-margin-top-medium`}
          >
            <span>How it works</span>
          </Link> */}
          </div>
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
