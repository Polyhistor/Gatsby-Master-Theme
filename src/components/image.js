import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "Wild-Kiwi-Logo.png" }) {
          childImageSharp {
            fixed(width: 145, height: 140) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => <Img fixed={data.logo.childImageSharp.fixed} />}
  />
)
export default Image
