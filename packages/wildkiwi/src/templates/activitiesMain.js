import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import NavLink from "../components/blog/blogNavLink"
import Layout from "../components/layout/layout"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Landing from "../components/header/landings/landing"
import MobileBoxContainer from "../components/mobile/MobileBoxContainer"
import GreenBar from "../components/bars/greenBar"

// the svgs shall later be compiled into one SVG-Sprite
import wildKiwiMountains from "../images/WildKiwi_Mountains.svg"

// utilities
import useImageQuery from "../queries/imageQuery"

const ActivitiesMain = ({ pageContext }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  //pageContext is a react Context props that is globally available, we set it in our Gatsby-Node JS file and use it anywhere
  const { group, index, first, last } = pageContext
  // previous and next page logic
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  // using useState hook for the pourposes of our filter
  const [data, setData] = useState(group)

  // we need another static query to fetch activities
  const activitiesData = useStaticQuery(graphql`
    query {
      allContentfulActivities {
        edges {
          node {
            slug
            title
            subtitle
            price
            country {
              slug
            }
            bannerImages {
              localFile {
                childImageSharp {
                  fluid(quality: 80, maxWidth: 700) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                    originalImg
                    originalName
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
  const ourData = activitiesData.allContentfulActivities.edges

  // handling the filter functionality
  const handleSubmit = e => {
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []

    if (e.target.value === "all") {
      return setData(group)
    }

    return ourData.filter(element => {
      // filter logic
      if (element.node.country.slug === e.target.value) {
        filteredData.push(element)
      }

      // update the state
      setData(filteredData)
      return
    })
  }

  const renderActivities = () => {
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

  return (
    <Layout>
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.breathTakingScenery.childImageSharp.fluid}
          titleFirst="Activities"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Part of the adventure is getting there, so you may as well do it in style."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
        />
      </div>
      <GreenBar
        text="Epic adventure for 18 to 35 year olds"
        imageData={wildKiwiMountains}
        imageAlt="Wild-Kiwi-Mountaints-Logo"
      />
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
              <option value="all">Country</option>
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
          {renderActivities()}
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
    </Layout>
  )
}
export default ActivitiesMain
