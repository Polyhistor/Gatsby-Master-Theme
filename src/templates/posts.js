import React from "react"
import Link from "gatsby-link"

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>
  } else {
    return <span>{props.text}</span>
  }
}

const IndexPage = ({ pageContext }) => {
  const { group, index, first, last, pageCount } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  return (
    <div>
      <h4>{pageCount} Pages</h4>

      {group.map(({ node }, idx) => (
        <>
          <div key={idx}>
            <Link to={`post/` + node.slug}>
              <h3>{node.title}</h3>
            </Link>

            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />

            {/* {node.acf !== null && (
              <>
                <h2> Facebook </h2>
                {node.acf.facebook}

                <h2> twitter </h2>
                {node.acf.twitter}
              </>
            )} */}
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
        <NavLink test={last} url={`/posts/${nextUrl}`} text="Go to Next Page" />
      </div>
    </div>
  )
}
export default IndexPage
