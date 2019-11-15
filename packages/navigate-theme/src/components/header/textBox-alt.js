import React from "react"
import { withPrefix } from "gatsby"

import resolveVariationClass from "../../helpers/theme-variation-style"

const TextBoxAlt = ({ setModal, buttonSecond, button2Class, titleFirst }) => {
  const button2ClassResolved = `btn ${resolveVariationClass(
    button2Class
  )} btn-animated`

  return (
    <>
      <h1
        className={`header-title ${resolveVariationClass(
          "header-title__main"
        )}`}
      >
        {titleFirst}
      </h1>
      <div className={resolveVariationClass("header__button-box")}>
        <a
          href="#"
          onClick={() => setModal({ open: true })}
          className={button2ClassResolved}
        >
          <svg className="svg-icon--play-button">
            <use xlinkHref={withPrefix("sprite.svg#icon-Play-Button")} />
          </svg>
          <span className="">{buttonSecond}</span>
        </a>
      </div>
    </>
  )
}

export default TextBoxAlt
