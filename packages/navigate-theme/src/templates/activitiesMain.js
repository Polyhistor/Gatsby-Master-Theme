import React, { useState } from "react"
import { Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo/seo"
// main components
import NavLink from "../components/blog/blogNavLink"
import Layout from "../components/layout/layout"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import Intro from "../components/intro"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"
import useCountryQuery from "../queries/countryQuery"
import resolveVariationClass from "../helpers/theme-variation-style"

const ActivitiesMain = ({ pageContext }) => {
  const activitiesBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.activitiesBannerImage.localFile
    .childImageSharp.fluid
  const bottomBannerImage = useWebSiteConfigQuery()
    .contentfulWebsiteConfiguration.websiteBottomBannerImage.localFile
    .childImageSharp.fluid

  const howItWorksBannerText = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.acitivitesPage.howItWorksBannerText

  const activitiesTitle = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.acitivitesPage.introTitle

  const activitiesDescription = useWebSiteConfigQuery().sitePlugin.pluginOptions
    .config.acitivitesPage.intoDescription

  const activityLabelFree = resolveVariationClass(
    "acitivity-box-single__caption--free"
  )

  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  const countryData = useCountryQuery()

  const countryList = useState(countryData)
  //pageContext is a react Context props that is globally available, we set it in our Gatsby-Node JS file and use it anywhere
  const { group, index, first, last } = pageContext

  const getActivitySeo = () => {
    return {
      title: first
        ? `${pageContext.metadata.title}`
        : `${pageContext.metadata.title} | Page ${index}`,
      description: first
        ? `${pageContext.metadata.description}`
        : `${pageContext.metadata.description} | Page ${index}`,
    }
  }

  // previous and next page logic
  const previousUrl = index - 1 === 1 ? "/" : (index - 1).toString()

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

  const renderCountries = () =>
    countryList[0].map((e, idx) => (
      <option key={idx} value={e.node.slug}>
        {e.node.title}
      </option>
    ))

  const handleFilter = ({ target }) => {
    const filteredData3 = []

    if (target.value === "all") {
      return setData(CountryData)
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
            {node.bannerImages !== null && (
              <figure className="activity__image-container">
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
                        ? `${activityLabelFree}`
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
      <SEO
        title={getActivitySeo().title}
        description={getActivitySeo().description}
      />
      <div className="hotfix--narrow-banner">
        <Landing
          imageData={activitiesBannerImage}
          titleFirst="Activities"
          buttonFirst="expore"
          buttonFirstURL="/blog"
          description="Personalise your trip with a range of add on activities to experience the best of your sailing destination."
          buttonStyles={["white", "white"]}
          optMargin="u-margin-top-percent-10"
          variation="dest"
          shape="triangle"
          mobileBanner={true}
        />
      </div>
      <GreenBar />
      <Intro
        title={activitiesTitle}
        description={activitiesDescription}
      ></Intro>
      <div className="row">
        <div className="activity__filter">
          {/* <h1
            className={`${resolveVariationClass(
              "heading-1"
            )} u-margin-bottom-small`}
          >
            Add-on Activities
          </h1> */}
          <div className={resolveVariationClass("activity__selector")}>
            <select
              className={resolveVariationClass("activity__dropdown")}
              id="country"
              onChange={handleSubmit}
            >
              <option value="all">Select Country</option>
              {renderCountries()}
            </select>
          </div>
          <div
            className={
              filter === null
                ? `${resolveVariationClass(
                    "activity__selector"
                  )} activity__selector--hidden`
                : resolveVariationClass("activity__selector")
            }
          >
            <select
              className="activity__dropdown"
              id="country"
              onChange={handleFilter}
            >
              <option value="all">Tour</option>
              {filter !== null
                ? filter.map((e, idx) => (
                    <option key={idx} value={e.node.slug}>
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
          </div>
        </div>
        <Banner
          imageData={bottomBannerImage}
          header="How it works"
          subHeaderFirst="everything you need to"
          subHeaderSecond="know about our tours"
          buttonText={howItWorksBannerText}
          link="/how-it-works"
        />
      </div>

      <Reviews />
      <div className="row">
        <Trips
          data={homeQuery[0].node.popularTours}
          headerText="Popular Trips"
        />
      </div>
    </Layout>
  )
}
export default ActivitiesMain
