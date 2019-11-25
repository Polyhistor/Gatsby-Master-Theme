import React from "react"
import { withPrefix, Link } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useReviewQuery from "../../queries/reviewQuery"
import { splitText } from "../../helpers/formatter"
import Review from "./review"

const Reviews = () => {
  const reviewGeneralInfo = useWebSiteConfigQuery().review

  const reviewData = useReviewQuery()

  const reviewsDisplayBanner = reviewData
    .filter(r => {
      return r.node.showInReviewsBanner === true
    })
    .slice(0, 3)

  const theme = process.env.GATSBY_THEME

  return (
    <section className="section-facebook-reviews">
      <div className="row">
        <div>
          <div className="facebook-reviews">
            <span className={resolveVariationClass("facebook-reviews__rating")}>
              {reviewGeneralInfo.rating}
              <span className="facebook-reviews__rating-decimal">
                /{reviewGeneralInfo.maxRating}
              </span>
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
              based on {reviewGeneralInfo.totalFacebookReviews} reviews
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
        {reviewsDisplayBanner.map((review, idx) => (
          <div key={idx}>
            <Review
              text={splitText(review.node.reviewText.reviewText, 260)}
              author={review.node.name}
              country={review.node.country}
            />
          </div>
        ))}
        {/*
         
        </div>
        <div>
          <Review
            text="I had one of the best weeks of my life with Med Sailors! I had the best crewmates, skipper, cheeky adventures, and food. We have already talked about our next Med Sailor crew reunion! Just do it...you won't regret it!"
            author="Alyson Erickson"
            country="USA"
          />
        </div>
        <div>
          <Review
            text="We loved every minute of it. Incredibly relaxing and so
            much fun. Every single member of staff was incredibly friendly, professional and helpful. I couldn’t recommend MedSailors more."
            author="Cassie Smart"
            country="Australia"
          />
        </div>
         <div>
          <Review
            text="Medsailors was above and beyond my expectations. A great mix of relaxing by the sea, touring the islands then eating, drinking and partying the night away."
            author="Matthew Handy"
            country="UK"
          />
        </div>
          */}

        <div className="mobile-yes u-center-text u-margin-top-tiny u-margin-left-tiny">
          <Link
            aria-current="page"
            className={
              theme === "ms"
                ? "btn btn--ms-teal tablet-green-button"
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
