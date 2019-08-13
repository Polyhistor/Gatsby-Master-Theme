import React from "react"

const Popup = () => {
  return (
    <div className="popup" id="popup">
      <div className="popup__container" />
      <div className="popup__video">
        <a className="popup__close" href="#bannerHero">
          &times;
        </a>
        <iframe
          width="90%"
          height="90%"
          src="https://www.youtube.com/embed/19GIN9tj-NY"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export default Popup
