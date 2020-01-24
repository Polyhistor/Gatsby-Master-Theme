import React from "react"
import ReviewCard from "./reviewCard"

const ReviewBoard = ({ children }) => {
  return (
    <section id="reviews" className="review__board">
      <div className="row">{children}</div>
    </section>
  )
}

export default ReviewBoard
