import React, { useState } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import NavLink from "../components/blog/blogNavLink"
import Layout2 from "../components/layout/layout2"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import MobileBoxContainer from "../components/mobile/MobileBoxContainer"

const ActivitiesMain = ({ pageContext }) => {
  //pageContext is a react Context props that is globally available, we set it in our Gatsby-Node JS file and use it anywhere
  const { group, index, first, last } = pageContext
  // previous and next page logic
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  // using useState hook for the pourposes of our filter
  const [data, setData] = useState(group)

  const renderBlogs = () => {
    return data.map(({ node }, idx) => {
      return (
        <div className="activity__main-container" key={idx}>
          <Link className="activity__main-link" to={`activities/` + node.slug}>
            {node.featured_media !== null && (
              <Img
                fluid={node.bannerImages[0].localFile.childImageSharp.fluid}
                alt={node.title}
              />
            )}
            <h3 className="activity__title">{node.title}</h3>
            <h4 className="activity__subtitle">{node.subtitle}</h4>
            <h5 className="activity__price">{node.price}</h5>
          </Link>
        </div>
      )
    })
  }

  // handling the filter functionality

  const handleSubmit = e => {
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []

    return group.filter(element => {
      // filter logic
      if (element.node.country === e.target.value) {
        filteredData.push(element)
      }

      console.log(filteredData)
      // update the state
      setData(filteredData)
      return
    })
  }

  return (
    <Layout2>
      <div className="row">
        <div className="activity__filter">
          <h1 className="green-title u-padding-bottom-medium">
            Add-on Activities
          </h1>
          <div className="activity__selector">
            <select
              className="activity__dropdown"
              id="country"
              onChange={handleSubmit}
            >
              <option value="newzealand">Country</option>
              <option value="newzealand">New Zealand</option>
              <option value="australia"> Australia </option>
              <option value="europe"> Europe</option>
            </select>
          </div>
          <div className="activity__selector">
            <select
              className="activity__dropdown"
              id="country"
              onChange={handleSubmit}
            >
              <option value="newzealand">Tour</option>
              <option value="newzealand">New Zealand</option>
              <option value="australia"> Australia </option>
              <option value="europe"> Europe</option>
            </select>
          </div>
        </div>
        <div className="activity__main">
          {renderBlogs()}
          <div className="blog__main-pagination">
            <div className="blog__main-previousLink">
              <NavLink
                test={first}
                url={`/activities/${previousUrl}`}
                text="Previous"
              />
            </div>
            <div className="blog__main-nextLink">
              <NavLink test={last} url={`/activities/${nextUrl}`} text="More" />
            </div>
          </div>
        </div>
        <Banner
          header="How it works"
          subHeaderFirst="everything you need to"
          subHeaderSecond="know about our tours"
          buttonText="continue"
        />
      </div>

      <MobileBoxContainer />

      <Reviews />
      <div className="row">
        <Trips />
      </div>
    </Layout2>
  )
}
export default ActivitiesMain
