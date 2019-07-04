import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout2 from "../components/layout/layout2"
import SEO from "../components/seo"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

const BlogPostTemplate = ({ data }) => {
  // rendering articles
  const renderArticles = () => {
    return data.wordpressWpUsers.authored_wordpress__POST.map(
      ({ id, title, slug, categories, featured_media }, idx) => {
        // since our wordpress source plugin did not support limit method on the query, we use the index trick
        while (idx < 12) {
          return (
            <Link to={`/blog/${slug}`} key={id} className="article-single">
              {featured_media !== null && (
                <Img
                  className="article-single__thumb"
                  fluid={featured_media.localFile.childImageSharp.fluid}
                  alt={title}
                  href={slug}
                />
              )}
              <h2 className="article-single__title">{title}</h2>
              <h3 className="article-single__sub-title">
                {categories[0].name}
              </h3>
            </Link>
          )
        }
      }
    )
  }

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
              <a href="#">
                <i className="im im-facebook" />
              </a>
            </div>
          </div>
          <h2 className="green-title u-margin-top-medium "> articles</h2>
          <div className="blog-author__article">{renderArticles()}</div>
        </div>
        <Banner
          header="How it works"
          subHeaderFirst="everything you need to"
          subHeaderSecond="know about our tours"
          buttonText="continue"
        />
      </div>
      <div className="mobile-no">
        <Reviews />
      </div>
      <div className="row">
        <Trips />
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
