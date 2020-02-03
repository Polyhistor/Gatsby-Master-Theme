import React, { useState } from "react"
import Img from "gatsby-image"
import Modal from "react-responsive-modal"
import { Mobile } from "../../helpers/conditionalRenders"
import { withPrefix } from "gatsby"

import Intro from "../../components/intro"

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
      <Intro
        title="Our luxury vehicles raise the bar"
        description="Part of the adventure is getting there, so you may as well do it in style! Cruise around in our luxury tour vehicles and experience the ultimate in comfort and style on your road trip."
      />

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
            <Mobile>
              <a
                href="#"
                class="btn btn--med-blue btn--med-blue--wk btn-animated"
              >
                <img
                  class="play-button"
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyMC4wMjVweCIgaGVpZ2h0PSIyMC4wODVweCIgdmlld0JveD0iMCAwIDIwLjAyNSAyMC4wODUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwLjAyNSAyMC4wODUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuMjk4LDEwbC02LjMwMSwzLjE1MVY2Ljg0OUwxNC4yOTgsMTB6IE0yMCwxMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwQzQuNDc3LDAsMCw0LjQ3NywwLDEwDQoJCQljMCw1LjUyNCw0LjQ3NywxMCwxMCwxMEMxNS41MjMsMjAsMjAsMTUuNTI0LDIwLDEwIi8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KPC9nPg0KPC9zdmc+DQo="
                  alt="play-button"
                ></img>
                <span class="">watch trailer</span>
              </a>
            </Mobile>
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
