import React from "react"
import { Link, withPrefix } from "gatsby"

import resolveVariationClass from "../../helpers/theme-variation-style"

const TextBox = ({
  setModal,
  buttonSecond,
  button1Class,
  button2Class,
  subtitleClass,
  titleFirst,
  titleSecond,
  titleThird,
  subTitle,
  buttonFirst,
  buttonFirstURL,
  shape,
}) => {
  return (
    // <div className={`${resolveVariationClass("header__text-box")}`}>
    <>
      <h1
        className={`header-title ${resolveVariationClass(
          "header-title__main"
        )}`}
      >
        {titleFirst}
        <br></br>
        {titleSecond}
        <br></br>
        {titleThird}
        <span className={subtitleClass}>{subTitle}</span>
      </h1>
      <div className={resolveVariationClass("header__button-box")}>
        <Link to={buttonFirstURL} className={button1Class}>
          {buttonFirst}
        </Link>
        <a
          href="#"
          onClick={() => setModal({ open: true })}
          className={button2Class}
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

export default TextBox
