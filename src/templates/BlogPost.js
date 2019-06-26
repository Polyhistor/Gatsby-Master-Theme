import React from "react"
import Layout2 from "../components/layout/layout2"
import { graphql } from "gatsby"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }, idx) => {
  return (
    <Layout2>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <article className="blog-single">
        <div className="row-blog">
          <h1 className="blog-single__header" key={idx}>
            {data.wordpressPost.title}
          </h1>

          {data.wordpressPost.acf !== null && (
            <h2 key={idx + 1}>
              {
                <img
                  alt={data.wordpress.title}
                  src={data.wordpressPost.acf.img}
                />
              }
            </h2>
          )}
          <h4 key={idx + 2}>
            Written by {data.wordpressPost.author.name} on{" "}
            {data.wordpressPost.date}
          </h4>
          <div
            dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }}
          />
        </div>
      </article>
    </Layout2>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      author {
        name
      }
      acf {
        img
      }
    }
  }
`
