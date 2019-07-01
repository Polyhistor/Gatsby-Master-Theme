import React from "react"
import { Link } from "gatsby"

import NavLink from "../components/blog/navLink"
import Layout2 from "../components/layout/layout2"

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <Layout2>
      <div>
        <h4>{pageCount} Pages</h4>

        {group.map(({ node }, idx) => (
          <>
            <div className="blog" key={idx}>
              <Link to={`posts/` + node.slug}>
                <h3>{node.title}</h3>
              </Link>
              <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          </>
        ))}

        <div className="previousLink">
          <NavLink
            test={first}
            url={`/posts/${previousUrl}`}
            text="Go to Previous Page"
          />
        </div>
        <div className="nextLink">
          <NavLink
            test={last}
            url={`/posts/${nextUrl}`}
            text="Go to Next Page"
          />
        </div>
      </div>
    </Layout2>
  )
}
export default IndexPage
