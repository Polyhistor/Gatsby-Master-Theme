import React from "react"

import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

const TextBoxAlt = ({ setModal, buttonSecond, button2Class, titleFirst }) => {
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
      </h1>
      <div className={resolveVariationClass("header__button-box")}>
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

export default TextBoxAlt
