import React from "react"

import resolveVariationClass from "../helpers/theme-variation-style"

const Intro = ({ title, description }) => {
  return (
    <section className="intro">
      <div className="row">
        <h2 className={resolveVariationClass("intro__title")}>{title}</h2>
        <p className="intro__description">{description}</p>
      </div>
    </section>
  )
}

export default Intro
