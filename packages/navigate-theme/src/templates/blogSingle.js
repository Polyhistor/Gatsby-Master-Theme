import React from "react"
import { graphql, Link } from "gatsby"
import moment from "moment"
import Img from "gatsby-image"
import { FacebookProvider, Comments } from "react-facebook"
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share"

import useBlogQuery from "../queries/blogQuery"

import Layout2 from "../components/layout/layout2"
import BlogRelated from "../components/blog/blogRelated"
import SEO from "../components/seo/seo"

const BlogPostTemplate = ({ data }, idx) => {
  const shareUrl = `${process.env.GATSBY_SITE_URL}/blog/${data.wordpressPost.slug}`

  // taking out our custom hook
  const blogQuery = useBlogQuery()

  return (
    <Layout2>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <article className="blog-single">
        {/* error handling */}
        {data.wordpressPost.featured_media !== null && (
          <div className="blog-single__banner-container">
            <Img
              className="blog-single__banner"
              alt={data.wordpressPost.title}
              fluid={
                data.wordpressPost.featured_media.localFile.childImageSharp
                  .fluid
              }
            />
          </div>
        )}

        <div className="row-blog">
          <Link
            className="blog-single__categories"
            to={`blog/category/${data.wordpressPost.categories[0].slug}`}
          >
            {/* // getting only the first element of the categories array, because in this we do only need one category */}
            {data.wordpressPost.categories.name !== null &&
              data.wordpressPost.categories[0].name}
          </Link>
          {data.wordpressPost.data !== null && (
            <h1 className="blog-single__title" key={idx}>
              {data.wordpressPost.title}
            </h1>
          )}
          <div className="blog-single__author-container">
            {/* some error checking */}
            {data.wordpressPost.author.acf !== null && (
              <Link to={`blog/author/${data.wordpressPost.author.slug}`}>
                <Img
                  fluid={
                    data.wordpressPost.author.acf.image.localFile
                      .childImageSharp.fluid
                  }
                  alt={data.wordpressPost.author.name}
                  className="blog-single__avatar"
                />
              </Link>
            )}
            <Link to={`blog/author/${data.wordpressPost.author.slug}`}>
              <span className="blog-single__author" key={idx + 2}>
                By {data.wordpressPost.author.name}
              </span>
            </Link>
            <br />
            <span className="blog-single__date">
              on &nbsp;
              {/* date formatting */}
              {moment(data.wordpressPost.date)
                .local()
                .format("MMMM DD, YYYY")}
            </span>
          </div>
          <div
            className="blog-single__content"
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
          />
          <div className="blog-single__sidebar">
            <BlogRelated blogQuery={blogQuery} />
          </div>
          <div className="blog-single__facebook">
            <input type="checkbox" className="read-more-state" id="post-1" />
            <label htmlFor="post-1" className="read-more-trigger" />

            <div className="read-more-target">
              <FacebookProvider appId="457654345055752">
                <Comments
                  href="
                http://www.facebook.com"
                />
              </FacebookProvider>
            </div>
          </div>
          {/* <h1>tags on footer</h1>
          {data.wordpressPost.tags.map(t => {
            return (
              <p>
                <Link to={`blog/tag/${t.slug}`}>{t.name}</Link>
              </p>
            )
          })} */}
          <div className="blog-single__share">
            <span className="blog-single__share-heading">
              Share this article on
            </span>

            <>
              <FacebookShareButton size={10} round={true} url={shareUrl}>
                <FacebookIcon
                  size={32}
                  borderRadius={8}
                  iconBgStyle={{ fill: "white", border: "#aeaeae" }}
                  logoFillColor={"#aeaeae"}
                />
              </FacebookShareButton>
              <TwitterShareButton
                title={data.wordpressPost.title}
                url={shareUrl}
              >
                <TwitterIcon
                  size={32}
                  borderRadius={8}
                  iconBgStyle={{ fill: "white", border: "#aeaeae" }}
                  logoFillColor={"#aeaeae"}
                />
              </TwitterShareButton>
              <WhatsappShareButton
                title={data.wordpressPost.title}
                url={shareUrl}
              >
                <WhatsappIcon
                  size={32}
                  borderRadius={8}
                  iconBgStyle={{ fill: "white", border: "#aeaeae" }}
                  logoFillColor={"#aeaeae"}
                />
              </WhatsappShareButton>
              <EmailShareButton
                url={shareUrl}
                subject={data.wordpressPost.title}
                body={shareUrl}
              >
                <EmailIcon
                  size={32}
                  borderRadius={8}
                  iconBgStyle={{ fill: "white", border: "#aeaeae" }}
                  logoFillColor={"#aeaeae"}
                />
              </EmailShareButton>
            </>
          </div>
        </div>
        <h2 className="green-title u-margin-top-big mobile-yes">
          Related stories
        </h2>
        <div className="blog-single__related">
          <BlogRelated blogQuery={blogQuery} />
        </div>
      </article>
    </Layout2>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      ...BlogPost
    }
  }
`
