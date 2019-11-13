import React from "react"
import { withPrefix, Link } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"
import Review from "./review"

const Reviews = () => {
  const theme = process.env.GATSBY_THEME

  return (
    <section className="section-facebook-reviews">
      <div className="row">
        <div className="col-1-of-4">
          <div className="facebook-reviews">
            <span className={resolveVariationClass("facebook-reviews__rating")}>
              4.9<span className="facebook-reviews__rating-decimal">/5</span>
            </span>
            <center className="facebook-reviews__stars-box">
              <svg className="svg-icon--star-big">
                <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
              </svg>
              <svg className="svg-icon--star-big">
                <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
              </svg>
              <svg className="svg-icon--star-big">
                <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
              </svg>
              <svg className="svg-icon--star-big">
                <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
              </svg>
              <svg className="svg-icon--star-big">
                <use xlinkHref={withPrefix("sprite.svg#icon-Star")} />
              </svg>
            </center>
            <center className="facebook-reviews__title">Facebook Review</center>
            <center className="facebook-reviews__subtitle">
              based on 151 reviews
            </center>
            <Link
              aria-current="page"
              className={`btn ${resolveVariationClass("btn--primary")}`}
              to="/reviews"
            >
              more reviews
            </Link>
          </div>
        </div>
        <div className="col-1-of-4">
          <Review
            text="Medsailors was above and beyond my expectations. A great mix of relaxing by the sea, touring the islands then eating, drinking and partying the night away."
            author="Matthew Handy"
            country="UK"
          />
        </div>
        <div className="col-1-of-4">
          <Review
            text="I had one of the best weeks of my life with Med Sailors! I had the best crewmates, skipper, cheeky adventures, and food. We have already talked about our next Med Sailor crew reunion! Just do it...you won't regret it!"
            author="Alyson Erickson"
            country="USA"
          />
        </div>
        <div className="col-1-of-4">
          <Review
            text="We loved every minute of it. Incredibly relaxing and so
            much fun. Every single member of staff was incredibly friendly, professional and helpful. I couldn’t recommend MedSailors more."
            author="Cassie Smart"
            country="Australia"
          />
        </div>
        <div className="mobile-yes u-center-text u-margin-top-tiny u-margin-left-tiny">
          <Link
            aria-current="page"
            className={
              theme === "ms"
                ? "btn btn--ms-mobile tablet-green-button"
                : "btn btn--green tablet-green-button"
            }
            to="/reviews"
          >
            more reviews
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Reviews
