import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { useStaticQuery } from "gatsby"

import NavLink from "../components/blog/blogNavLink"
import Layout2 from "../components/layout/layout2"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"

// utilities
import useHomePageQuery from "../queries/homePageQuery"

// we retrieve node data through the context system, the obj is called pageContext
const BlogSearch = ({ pageContext }) => {
  // implementing pagination logic
  const { group, index, first, last } = pageContext
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  // extracting our custom hook
  const homeQuery = useHomePageQuery()

  // setting the inital set
  const [data, setData] = useState(group)

  // we need another static query to fetch categories
  const CategoriesData = useStaticQuery(graphql`
    query {
      allWordpressCategory(limit: 5) {
        edges {
          node {
            name
            count
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            title
            categories {
              name
            }
            fields {
              featured_media {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  // embracing the variables
  const ourData = CategoriesData.allWordpressPost.edges

  // a function to handle clicks on buttons
  const handleChange = e => {
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []

    return ourData.filter(element => {
      // filter logic
      if (element.node.categories[0].name === e) {
        filteredData.push(element)
      }

      //update the state
      setData(filteredData)
      return
    })
  }

  // a function responsible for handling clicks on dropdown
  const handleDropDown = e => {
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []

    return ourData.filter(element => {
      // filter logic
      if (element.node.categories[0].name === e.target.value) {
        filteredData.push(element)
      }

      //update the state
      setData(filteredData)
      return
    })
  }

  // rendering blogs
  const renderBlogs = () => {
    return data.map(({ node }) => {
      const blogMainCategory =
        node.categories.length > 0 ? node.categories[0].name : "Uncategorised"

      return (
        <div className="blog__categorized-container" key={node.wordpress_id}>
          <Link
            className="blog__main-link"
            to={`blog/${node.categories[0].slug}/${node.slug}`}
          >
            {node.fields.featured_media !== null && (
              <Img
                fluid={
                  node.fields.featured_media.localFile.childImageSharp.fluid
                }
                alt={node.title}
              />
            )}
            <h3 className="blog__main-title">{node.title}</h3>
            <h4 className="blog__main-category">{blogMainCategory}</h4>
          </Link>
        </div>
      )
    })
  }

  // rendering categories
  const renderCategories = () => {
    return CategoriesData.allWordpressCategory.edges.map(element => {
      return (
        <button
          onClick={() => handleChange(element.node.name)}
          key={element.node.name}
          className="FAQ__button"
        >
          {element.node.name}
          <span className="blog__categorized-count">
            &thinsp;-&thinsp;{element.node.count}{" "}
          </span>
        </button>
      )
    })
  }

  // rendering categories for mobile dropdown
  const renderCategoriesMobile = () => {
    return CategoriesData.allWordpressCategory.edges.map(element => {
      return (
        <option
          value={element.node.name}
          key={element.node.name}
          className="FAQ__button"
        >
          {element.node.name}
          &nbsp; &ndash; &nbsp;
          {element.node.count} posts
        </option>
      )
    })
  }

  return (
    <Layout2>
      <div className="row">
        <h2 className="blog__categorized-header green-title u-margin-bottom-small u-margin-top-huge">
          What stories interest you ?
        </h2>
        <div className="mobile-tablet u-margin-bottom-medium">
          <div className="activity__selector">
            <select
              onChange={handleDropDown}
              className="activity__dropdown"
              id="country"
            >
              {renderCategoriesMobile()}
            </select>
          </div>
        </div>
        <div className="u-margin-bottom-medium mobile-no tablet-no">
          {renderCategories()}
        </div>
        <div className="blog__categorized">
          {renderBlogs()}
          <div className="blog__main-pagination">
            <div className="blog__main-previousLink">
              <NavLink
                test={first}
                url={`/blog/categorized/${previousUrl}`}
                text="Previous"
              />
            </div>
            <div className="blog__main-nextLink">
              <NavLink
                test={last}
                url={`/blog/categorized/${nextUrl}`}
                text="More"
              />
            </div>
          </div>
        </div>
        <Banner
          header="How it works"
          subHeaderFirst="everything you need to"
          subHeaderSecond="know about our tours"
          buttonText="continue"
          link="/how-it-works"
        />
      </div>
      <Reviews />
      <div className="row">
        <Trips data={homeQuery[0].node.popularTours} />
      </div>
    </Layout2>
  )
}
export default BlogSearch
