import React, { Fragment } from "react"
import { Link } from "gatsby"

const GreenBarAlt = ({ textList }) => {
  // consuming the process environment variable
  let theme = process.env.GATSBY_THEME

  // rendering our banner elements
  const renderElements = () => {
    return textList.map(({ label, link }, idx) => {
      return (
        <Fragment key={idx}>
          <Link
            to={link}
            className={
              theme === "ms"
                ? "green-bar__title green-bar__title--ms"
                : "green-bar__title"
            }
          >
            {label}
          </Link>
        </Fragment>
      )
    })
  }

  return (
    <section
      className={theme === "ms" ? "green-bar green-bar--ms" : "green-bar"}
    >
      <div className="green-bar__alt">{renderElements()}</div>
    </section>
  )
}

export default GreenBarAlt
