import React from "react"
import { Link } from "gatsby"

import NavLink from "../components/blog/blogNavLink"
import Layout2 from "../components/layout/layout2"

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  const renderBlogs = () => {
    return group.map(({ node }) => {
      return (
        <div className="blog__main-container" key={node.wordpress_id}>
          <Link to={`blog/` + node.slug}>
            <h3>{node.title}</h3>
          </Link>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })
  }

  return (
    <Layout2>
      <div className="row">
        <div className="blog__main">
          {renderBlogs()}
          <div className="blog__main-pagination">
            <div className="previousLink">
              <NavLink
                test={first}
                url={`/blog/${previousUrl}`}
                text="Go to Previous Page"
              />
            </div>
            <div className="nextLink">
              <NavLink
                test={last}
                url={`/blog/${nextUrl}`}
                text="Go to Next Page"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout2>
  )
}
export default IndexPage
