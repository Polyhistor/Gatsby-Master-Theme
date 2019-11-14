import React from "react"
import { Link, withPrefix } from "gatsby"

import Triangle from "../header/objects/triangle"
import Circle from "../header/objects/circle"
import Diamond from "../header/objects/diamond"
import Xmark from "../header/objects/xMark"

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
    <div className={`${resolveVariationClass("header__text-box")}`}>
      <div className="header__object-container">
        {shape === "circle" ? (
          <>
            <Circle></Circle>
            <Xmark></Xmark>
            <Circle></Circle>
            <Xmark></Xmark>
          </>
        ) : shape === "diamond" ? (
          <>
            <Diamond></Diamond>
            <Xmark></Xmark>
            <Diamond></Diamond>
            <Xmark></Xmark>
          </>
        ) : (
          <>
            <Triangle></Triangle>
            <Xmark></Xmark>
            <Triangle></Triangle>
            <Xmark></Xmark>
          </>
        )}
      </div>
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
    </div>
  )
}

export default TextBox
