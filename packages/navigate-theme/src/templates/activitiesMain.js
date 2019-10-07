import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

// main components
import NavLink from "../components/blog/blogNavLink"
import Layout from "../components/layout/layout"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"

import { renderSeoFromContext } from "../helpers/seo-helper"
// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"

const ActivitiesMain = ({ pageContext }) => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  //pageContext is a react Context props that is globally available, we set it in our Gatsby-Node JS file and use it anywhere
  const { group, index, first, last } = pageContext

  // previous and next page logic
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()
  const nextUrl = (index + 1).toString()

  // using useState hook for the pourposes of our filter
  const [data, setData] = useState(group)
  const [CountryData, setCountryData] = useState(null)
  const [filter, setFilter] = useState(null)

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
            status
            country {
              slug
            }
            Destinations {
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
      allContentfulDestinations {
        edges {
          node {
            slug
            title
            destinationCountry
          }
        }
      }
    }
  `)

  // embracing the variables
  const ourData = activitiesData.allContentfulActivities.edges
  const ourFilter = activitiesData.allContentfulDestinations.edges

  // handling the filter functionality
  const handleSubmit = ({ target }) => {
    // to avoid mutating the state, we create a temporary variable, we populate it and then we use it to update the state
    const filteredData = []
    const filteredData2 = []

    if (target.value === "all") {
      return setData(group)
    }

    ourData.filter(element => {
      // filter logic
      if (element.node.country.slug === target.value) {
        filteredData.push(element)
      }

      setCountryData(filteredData)

      // update the state
      return setData(filteredData)
    })

    ourFilter.filter(element => {
      // filter logic for our second filter
      if (element.node.destinationCountry === target.value) {
        filteredData2.push(element)
      }

      // update the state
      return setFilter(filteredData2)
    })
  }

  const handleFilter = ({ target }) => {
    const filteredData3 = []

    if (target.value === "all") {
      return setData(filter)
    }

    CountryData.filter(e =>
      e.node.Destinations.forEach(s => {
        if (s.slug === target.value) {
          filteredData3.push(e)
        }
      })
    )

    // update the state
    return setData(filteredData3)
  }

  const renderActivities = () => {
    return data.map(({ node }, idx) => {
      return (
        <div className="activity__main-container" key={idx}>
          <Link
            className="activity__main-link"
            to={`activities/${node.country.slug}/` + node.slug}
          >
            {node.featured_media !== null && (
              <figure className="acitivity__image-container">
                <Img
                  fluid={node.bannerImages[0].localFile.childImageSharp.fluid}
                  alt={node.title}
                />
                {node.status !== null && (
                  <figcaption
                    className={`acitivity-box-single__caption ${
                      node.status === "null"
                        ? "acitivity-box-single__caption--null"
                        : "Free"
                        ? "acitivity-box-single__caption--free"
                        : "acitivity-box-single__caption--top"
                    }`}
                  >
                    <span>{node.status}</span>
                  </figcaption>
                )}
              </figure>
            )}
            <h3 className="activity__title">{node.title}</h3>
            <h4 className="activity__subtitle">{node.subtitle}</h4>
            <h5 className="activity__price">
              {node.price === "free"
                ? "free"
                : node.price === "included"
                ? "included"
                : `${node.price}`}
            </h5>
          </Link>
        </div>
      )
    })
  }

  return (
    <Layout>
      {renderSeoFromContext(pageContext)}
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={imageQuery.activitiesBanner.childImageSharp.fluid}
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
        text="Epic adventure tours for 18 to 35 year olds"
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
              <option value="new-zealand">New Zealand</option>
              <option value="australia"> Australia </option>
              <option value="europe"> Europe</option>
            </select>
          </div>
          <div
            className={
              filter === null
                ? "activity__selector activity__selector--hidden"
                : "activity__selector"
            }
          >
            <select
              className="activity__dropdown"
              id="country"
              onChange={handleFilter}
            >
              <option value="all">Tour</option>
              {filter !== null
                ? filter.map(e => (
                    <option key={e.node.title} value={e.node.slug}>
                      {e.node.title}
                    </option>
                  ))
                : null}
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

      <Reviews />
      <div className="row">
        <Trips data={homeQuery[0].node.popularTours} />
      </div>
    </Layout>
  )
}
export default ActivitiesMain
