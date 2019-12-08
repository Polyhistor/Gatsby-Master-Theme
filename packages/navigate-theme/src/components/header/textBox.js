import React from "react"
import { Link } from "gatsby"

import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

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
}) => {
  const playIcon = useWebSiteConfigQuery().sitePlugin.pluginOptions.config
    .playIcon

  return (
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
        <span className={subtitleClass}>
          <span className="header__subtitle">{subTitle}</span>
        </span>
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
          <img className="play-button" src={playIcon} alt="play-button"></img>
          <span className="">{buttonSecond}</span>
        </a>
      </div>
    </>
  )
}

export default TextBox
