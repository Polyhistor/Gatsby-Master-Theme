import React from "react"
import Review from "./review"

const Reviews = () => {
  return (
    <section className="section-facebook-reviews">
      <div className="row u-background-teal">
        <div className="col-1-of-4">
          <div className="facebook-reviews">
            <span className="facebook-reviews__rating">
              4.9<span className="facebook-reviews__rating-decimal">/5</span>
            </span>
            <center className="facebook-reviews__stars-box">
              <i className="im im-star" />
              <i className="im im-star" />
              <i className="im im-star" />
              <i className="im im-star" />
              <i className="im im-star" />
            </center>
            <center className="facebook-reviews__title">Facebook Review</center>
            <center className="facebook-reviews__subtitle">
              based on 650 reviews
            </center>
          </div>
        </div>
        <div className="col-1-of-4">
          <Review
            text="Wild Kiwi also has the luxury that larger tour groups don’t have of being flexible on itinerary and being able to stop at places that are little more “off the beaten track.”"
            author="Sam Kelly"
            country="Australia"
          />
        </div>
        <div className="col-1-of-4 mobile-no">
          <Review
            text="Wild Kiwi also has the luxury that larger tour groups don’t have of being flexible on itinerary and being able to stop at places that are little more “off the beaten track.”"
            author="Chris Freimuth"
            country="United States"
          />
        </div>
        <div className="col-1-of-4 mobile-no">
          <Review
            text="Wild Kiwi also has the luxury that larger tour groups don’t have of being flexible on itinerary and being able to stop at places that are little more “off the beaten track.”"
            author="Sophora Cliff"
            country="United Kingdom"
          />
        </div>
      </div>
    </section>
  )
}

export default Reviews
