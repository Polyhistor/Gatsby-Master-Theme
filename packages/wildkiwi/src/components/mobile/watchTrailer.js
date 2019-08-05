import React from "react"
import { Link, withPrefix } from "gatsby"

const WatchTrailer = () => {
  return (
    <div className="section-mobile__watch-trailer">
      <h2 className="bold-green u-margin-bottom-small ">
        Ga dandebis eliqui consedit fugia quiatiis consequi doluptusam.
      </h2>
      <p className="u-font-size-medium">
        Itat eritia quam eictempor. Ga dandebis eliqui consedit fugia quiatiis
        consequi as.Itat eritia quam eictempor. Ga dandebis eliqui consedit
        fugia quiatiis consequi as.Itat eritia quam eictempor. Ga dandebis
        eliqui consedit fugia quiatiis consequi as.
      </p>
      <Link
        to="/s"
        className="btn btn--green btn-animated mobile-green-buton u-margin-top-medium "
      >
        <svg className="svg-icon--play-button">
          <use xlinkHref={withPrefix("sprite.svg#icon-Play-Button")} />
        </svg>
        <span>watch trailer</span>
      </Link>
    </div>
  )
}

export default WatchTrailer
