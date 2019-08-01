import React from "react"
import { withPrefix } from "gatsby"

const SocialNetowrk = () => {
  return (
    <div className="u-margin-bottom-medium u-padding-top-huge ">
      <div className="footer__social-networks">
        <div className="footer__social-networks-box">
          <svg className="svg-icon--Facebook">
            <use xlinkHref={withPrefix("sprite.svg#icon-Facebook")} />
          </svg>
          <svg className="svg-icon--Instagram">
            <use xlinkHref={withPrefix("sprite.svg#icon-Instagram")} />
          </svg>
          <svg className="svg-icon--Youtube">
            <use xlinkHref={withPrefix("sprite.svg#icon-Youtube")} />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SocialNetowrk
