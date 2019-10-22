import React from "react"
import { withPrefix } from "gatsby"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featured__container">
        <h2 className="heading-tertiary--inline">featured in</h2>
        <div className="featured__container-image featured__container-image--metro">
          <a
            href="https://metro.co.uk/2019/05/04/terrifying-cliff-jumps-sunrise-mountain-hikes-and-sea-kayaking-an-action-packed-tour-of-new-zealands-magical-south-island-9200094/"
            target="__blank"
          >
            <svg className="svg-icon--logo-metro">
              <use xlinkHref={withPrefix("sprite.svg#icon-Metro")} />
            </svg>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--daily">
          <a
            href="https://www.dailymail.co.uk/travel/travel_news/article-6931413/Experiencing-terror-Shotover-Canyon-Swing-Queenstown-New-Zealand.html"
            target="__blank"
          >
            <svg className="svg-icon--logo-daily">
              <use xlinkHref={withPrefix("sprite.svg#icon-Daily_Mail")} />
            </svg>
          </a>
        </div>
        <h2 className="heading-tertiary--inline">recognised by</h2>
        <div className="featured__container-image featured__container-image--west">
          <a
            href="http://www.westpacchampionawards.co.nz/2018+Finalists.html"
            target="__blank"
          >
            <svg className="svg-icon--logo-westpac">
              <use xlinkHref={withPrefix("sprite.svg#icon-Westpac_Awards")} />
            </svg>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--qual">
          <a href="https://www.qualmark.co.nz/" target="__blank">
            <svg className="svg-icon--logo-qualmark">
              <use xlinkHref={withPrefix("sprite.svg#icon-Qualmark")} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Featured
