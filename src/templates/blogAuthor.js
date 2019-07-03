import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout2 from "../components/layout/layout2"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }, idx) => {
  return (
    <Layout2>
      <SEO
        title={data.wordpressWpUsers.name}
        description={data.wordpressWpUsers.description}
      />
      <div className="row">
        <div className="blog-author">
          <div className="blog-author__info">
            <Img
              fluid={
                data.wordpressWpUsers.acf.image.localFile.childImageSharp.fluid
              }
              alt={data.wordpressWpUsers.name}
              className="blog-author__avatar"
            />
            <h2 className="blog-author__name">{data.wordpressWpUsers.name}</h2>
            <p className="blog-author__description">
              {data.wordpressWpUsers.acf.description}
            </p>
            <div className="blog-author__social">
              <span className="blog-author__follow">follow</span>

              <a href={data.wordpressWpUsers}>
                <i className="im im-instagram" />
              </a>
              <a>
                <i className="im im-facebook" />
              </a>
            </div>
          </div>
          <div className="blog-author__articles">
            <h2 className="green-title u-margin-top-medium ">articles</h2>
          </div>
        </div>
      </div>
    </Layout2>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressWpUsers(wordpress_id: { eq: $id }) {
      ...BlogAuthor
    }
  }
`
