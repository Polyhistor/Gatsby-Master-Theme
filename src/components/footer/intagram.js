import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstagramPosts from "./instagramPosts"
import useImageQuery from "../../queries/ImageQuery"

const Instagram = () => {
  //extracting query from our custom hook
  const imageQuery = useImageQuery()

  return (
    <React.Fragment>
      <div className="trips-header-box u-padding-bottom-medium">
        <h2 className="green-title">#WILDKIWITOURS</h2>
      </div>
      <div className="instagram__posts">
        <InstagramPosts
          imageData={imageQuery.instaOne.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={imageQuery.instaTwo.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={imageQuery.instaThree.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={imageQuery.instaFour.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={imageQuery.instaFive.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={imageQuery.instaSix.childImageSharp.fluid}
          name="NameHere"
        />
      </div>
    </React.Fragment>
  )
}

export default Instagram
