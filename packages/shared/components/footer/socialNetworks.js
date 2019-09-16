import React from "react"
import { withPrefix } from "gatsby"

const SocialNetowrk = () => {
  return (
    <div className="u-margin-bottom-medium u-padding-top-huge ">
      <div className="footer__social-networks">
        <div className="footer__social-networks-box">
          <a
            href="https://www.facebook.com/wildkiwitours"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="svg-icon--Facebook">
              <use xlinkHref={withPrefix("sprite.svg#icon-Facebook")} />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/wildkiwitours/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="svg-icon--Instagram">
              <use xlinkHref={withPrefix("sprite.svg#icon-Instagram")} />
            </svg>
          </a>
          <a
            href="https://www.youtube.com/c/WildkiwiTours"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="svg-icon--Youtube">
              <use xlinkHref={withPrefix("sprite.svg#icon-Youtube")} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialNetowrk
