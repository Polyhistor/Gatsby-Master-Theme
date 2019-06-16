import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import InstagramPosts from "../components/instagramPosts"

const Instagram = () => {
  const instaPhotos = useStaticQuery(graphql`
    query {
      instaOne: file(relativePath: { eq: "wild-kiwi-airlie-beach.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      instaTwo: file(relativePath: { eq: "wild-kiwi-groups-wanaka.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      instaThree: file(relativePath: { eq: "wild-kiwi-sky-dive-taupo.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      instaFour: file(
        relativePath: { eq: "wild-kiwi-tamaki-village-rotorua.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      instaFive: file(
        relativePath: { eq: "wild-kiwi-tours- hot-water-beach.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      instaSix: file(
        relativePath: { eq: "wild-kiwi-tours-kayak-byron-bay.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <React.Fragment>
      <div className="trips-header-box u-padding-bottom-medium mobile-no">
        <h2 className="trips-header-box heading-secondary">#WILDKIWITOURS</h2>
      </div>
      <div className="instagram__posts mobile-no">
        <InstagramPosts
          imageData={instaPhotos.instaOne.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={instaPhotos.instaTwo.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={instaPhotos.instaThree.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={instaPhotos.instaFour.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={instaPhotos.instaFive.childImageSharp.fluid}
          name="NameHere"
        />
        <InstagramPosts
          imageData={instaPhotos.instaSix.childImageSharp.fluid}
          name="NameHere"
        />
      </div>
    </React.Fragment>
  )
}

export default Instagram
