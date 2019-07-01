import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

import useBlogQuery from "../../queries/blogQuery"

const BlogRelated = () => {
  // taking out our custom hook
  const blogQuery = useBlogQuery()

  // looping over elements and rendering
  const renderElements = () => {
    return blogQuery.map(element => {
      return (
        <Link id="show" to={`/posts/${element.node.slug}`}>
          {/* error handling, without this line, the posts with featured images will crash */}
          {element.node.featured_media !== null && (
            <Img
              className=""
              fluid={
                element.node.featured_media.localFile.childImageSharp.fluid
              }
            />
          )}
          <h3 className="blog-single__title blog-single__title--side">
            {element.node.title}
          </h3>
          <h4>{element.node.categories[0].name}</h4>
          <h5>{element.node.author.name}</h5>
        </Link>
      )
    })
  }

  return <>{renderElements()}</>
}

export default BlogRelated
