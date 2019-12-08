import React from "react"
import { withPrefix } from "gatsby"

import resolveVariationClass from "../../helpers/theme-variation-style"

const TextBoxAlt = ({ setModal, buttonSecond, button2Class, titleFirst }) => {
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
          <img
            className="play-button"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHdpZHRoPSIyMC4wMjVweCIgaGVpZ2h0PSIyMC4wODVweCIgdmlld0JveD0iMCAwIDIwLjAyNSAyMC4wODUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwLjAyNSAyMC4wODUiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGcgaWQ9IkxheWVyXzEiPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTQuMjk4LDEwbC02LjMwMSwzLjE1MVY2Ljg0OUwxNC4yOTgsMTB6IE0yMCwxMGMwLTUuNTIzLTQuNDc4LTEwLTEwLTEwQzQuNDc3LDAsMCw0LjQ3NywwLDEwDQoJCQljMCw1LjUyNCw0LjQ3NywxMCwxMCwxMEMxNS41MjMsMjAsMjAsMTUuNTI0LDIwLDEwIi8+DQoJPC9nPg0KPC9nPg0KPGcgaWQ9IkxheWVyXzIiPg0KPC9nPg0KPC9zdmc+DQo="
            alt="play-button"
          ></img>
          <span className="">{buttonSecond}</span>
        </a>
      </div>
    </>
  )
}

export default TextBoxAlt
