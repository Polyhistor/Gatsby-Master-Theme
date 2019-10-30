import React from "react"

const destinationStarter = ({ title, body, CSSModifier }) => {
  const theme = process.env.GATSBY_THEME

  return (
    <div className="section-destination__starter">
      <div className="destination-starter">
        <h2
          className={
            theme === "ms"
              ? "heading-1 heading-1--ms u-margin-bottom-small"
              : "heading-1 u-margin-bottom-small"
          }
        >
          {title}
        </h2>
        <p className="destination-starter__body">{body}</p>
      </div>
    </div>
  )
}

export default destinationStarter
