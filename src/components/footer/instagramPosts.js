import React from "react"
import Img from "gatsby-image"

const InstagramPosts = ({ imageData, name }) => {
  return (
    <figure className="instagram__posts-box">
      <Img className="instagram__posts-image" fluid={imageData} />
      <figcaption className="instagram__name">{name}</figcaption>
    </figure>
  )
}

export default InstagramPosts
