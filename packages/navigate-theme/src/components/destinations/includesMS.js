import React from "react"
import { withPrefix } from "gatsby"

const IncludesMS = () => {
  return (
    <>
      <section className="includes--ms">
        <h2 className="heading-1 heading-1--ms">What’s included</h2>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Days-01`)} />
          </svg>
          <p>Seven days’ accommodation onboard your own yacht</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Pizza-01`)} />
          </svg>
          <p>Breakfast & lunch made fresh every day</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Tea-01`)} />
          </svg>
          <p>Tea, coffee and drinking water</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Wheel-01`)} />
          </svg>
          <p>Explore & learn to sail with your professional skipper</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-BYO-Drinks-01`)} />
          </svg>
          <p>BYO: bring your own drinks and snacks</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Bed-01`)} />
          </svg>
          <p>Towels, bed linen end of week cleaning fees</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Guest-Leader-01`)} />
          </svg>
          <p>
            Live like a local with the help of your ‘Guest Experience Leader’
          </p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Water-Sports-01`)} />
          </svg>
          <p>Stand Up Paddle Board, dinghy and snorkelling gear</p>
        </div>
        <div>
          <svg className={`svg-icon--MSIncludes`}>
            <use xlinkHref={withPrefix(`sprite.svg#icon-Map-01`)} />
          </svg>
          <p>Transfers to Hvar Old Town (Croatia only)</p>
        </div>
      </section>
    </>
  )
}

export default IncludesMS
