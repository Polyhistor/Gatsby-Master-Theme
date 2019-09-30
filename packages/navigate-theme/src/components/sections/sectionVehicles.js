import React, { useState } from "react"
import Img from "gatsby-image"
import Modal from "react-responsive-modal"
import { withPrefix } from "gatsby"

const SectionVehicles = ({
  imageOne,
  imageTwo,
  imageThree,
  imageFour,
  title,
  paragraph,
  listHeader,
  listItems,
  paragraphSecond,
}) => {
  // rendeering the list
  const renderList = () => {
    return listItems.map(({ label }, idx) => {
      return <li key={idx}>{label}</li>
    })
  }

  // setting the initial state for the modal
  const [{ open }, setModal] = useState({ open: false })

  return (
    <>
      <section className="section-vehicles">
        <div className="vehicles__container">
          <div className="vehicles__images">
            <Img fluid={imageOne} alt="vehicles-wildkiwi-1" />
            <Img fluid={imageTwo} alt="vehicles-wildkiwi-2" />
            <Img fluid={imageThree} alt="vehicles-wildkiwi-3" />
            <Img fluid={imageFour} alt="vehicles-wildkiwi-4" />
          </div>
          <div className="vehicles__text">
            <h2 className="">{title}</h2>
            <p>{paragraph}</p>
            <ul>
              <b>{listHeader}</b>
              {renderList()}
            </ul>
            <p>{paragraphSecond}</p>
            {/* <a
            className="btn btn--green btn-animated mobile-green-buton"
            href="/blog"
          >
            Watch Vehicles Tour
          </a> */}

            <a
              href="#"
              onClick={() => setModal({ open: true })}
              className="btn btn--green btn-animated  u-margin-top-sedium"
            >
              <svg className="svg-icon--play-button svg-icon--play-button--mobile">
                <use
                  xlinkHref={withPrefix(
                    "sprite.svg#icon-Play-Button-White-A-1"
                  )}
                />
              </svg>
              <span>VEHICLE TOUR</span>
            </a>
          </div>
        </div>
      </section>

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
            src="https://www.youtube.com/embed/IbUC6Mc6sjQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  )
}

export default SectionVehicles
