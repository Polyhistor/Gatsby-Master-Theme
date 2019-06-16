import React from "react"
import { Link } from "gatsby"

const WatchTrailer = () => {
  return (
    <div className="section-mobile__watch-trailer">
      <p className="u-font-size-medium">
        Itat eritia quam eictempor. Ga dandebis eliqui consedit fugia quiatiis
        consequi as.
      </p>
      <div className="u-margin-top-medium">
        <Link
          to="/s"
          className="btn btn--green btn-animated mobile-green-buton u-margin-top-medium "
        >
          <i className="im im-google-play u-translateY-35 u-font-size-medium u-padding-right-2" />
          <span>watch trailer</span>
        </Link>
      </div>
    </div>
  )
}

export default WatchTrailer
