import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.wordpressPost.title}
        description={data.wordpressPost.excerpt}
      />
      <h1>{data.wordpressPost.title}</h1>
      <h4>
        Written by {data.wordpressPost.author.name} on {data.wordpressPost.date}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query($id: Int!) {
    wordpressPost(wordpress_id: { eq: $id }) {
      title
      content
      excerpt
      date(formatString: "MMMM DD, YYYY")
      author {
        name
      }
    }
  }
`
