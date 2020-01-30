import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import scrollTo from "gatsby-plugin-smoothscroll"
import ReactPaginate from "react-paginate"
import { renderSeo } from "../helpers/seo-helper"

// main components

import Layout from "../components/layout/layout"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Landing from "../components/header/landings/landing"
import GreenBar from "../components/bars/greenBar"
import Intro from "../components/intro"
import { useWebSiteConfigQuery } from "../queries/webSiteConfigQueries"
import useHomePageQuery from "../queries/homePageQuery"

import resolveVariationClass from "../helpers/theme-variation-style"
import useActivityQuery from "../queries/activityQuery"
import ActivitiesTourCountryFilter from "../components/activity/activityCountryTourFilter"

const ActivitiesMain = ({ data }) => {
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

  const homeQuery = useHomePageQuery()

  let allActivitiesData = useActivityQuery()

  const activitiesPerPage = 24

  const [currentPage, setCurrentPage] = useState(1)
  /*State to store all activites */
  const [activitiesList, setActivitiesList] = useState(allActivitiesData)

  const [countryFilter, setCountryFilter] = useState("all")
  const getActivities = () => {
    const startIndex = currentPage * activitiesPerPage - activitiesPerPage
    const endIndex = currentPage * activitiesPerPage - 1
    const activities = activitiesList.slice(startIndex, endIndex + 1)

    return activities
  }

  const getTotalPages = () => {
    const totalActivities = activitiesList.length
    const divisionRest = totalActivities % activitiesPerPage
    const restDivisionSum = divisionRest > 0 ? 1 : 0
    const totalPages =
      totalActivities <= activitiesPerPage
        ? 1
        : Math.floor(totalActivities / activitiesPerPage) + restDivisionSum

    return totalPages
  }

  const onPageChange = pageNumber => {
    setCurrentPage(pageNumber.selected + 1)
    scrollTo("#activity")
  }

  const filterActivitiesByCountry = countrySlug => {
    const filteredActivities = allActivitiesData.filter(
      a => a.node.country.slug === countrySlug
    )
    return filteredActivities
  }

  const fiterActivityByDestination = destinationSlug => {
    const filteredActivities = allActivitiesData.filter(a =>
      a.node.Destinations.find(d => d.slug === destinationSlug)
    )
    return filteredActivities
  }

  const handleCountryChange = countrySlug => {
    setCountryFilter(countrySlug)
    if (countrySlug === "all") {
      setActivitiesList(allActivitiesData)
    } else {
      setActivitiesList(filterActivitiesByCountry(countrySlug))
    }

    setCurrentPage(1)
  }

  const handleDestinationChange = destinationSlug => {
    if (destinationSlug === "all") {
      /*is not possible the first condition of iff. Everytime when we select all destinations we should have a valid country slug*/

      const activities =
        countryFilter === "all"
          ? allActivitiesData
          : filterActivitiesByCountry(countryFilter)
      setActivitiesList(activities)
    } else {
      setActivitiesList(fiterActivityByDestination(destinationSlug))
    }

    setCurrentPage(1)
  }

  const renderActivities = () => {
    return getActivities().map(({ node }, idx) => {
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
      {renderSeo(data)}
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
        <div id="activity" className="activity__filter">
          <ActivitiesTourCountryFilter
            onCountryChange={handleCountryChange}
            onDestinationChange={handleDestinationChange}
          />
        </div>
        <div className="activity__main">
          {renderActivities()}
          <div className="blog__main-pagination">
            <div className="blog__main-previousLink">
              {/* <NavLink
                test={first}
                url={`/activities/${previousUrl}`}
                text="Previous"
              /> */}
              <div className="review__dropdown-wrapper">
                <ReactPaginate
                  pageCount={getTotalPages()}
                  onPageChange={onPageChange}
                  previousLabel={"<"}
                  nextLabel={">"}
                  breakLabel={"..."}
                  marginPagesDisplayed={24}
                  pageRangeDisplayed={24}
                />
              </div>
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

export const query = graphql`
  query {
    allContentfulSeoPageMeta(
      filter: { referencedPageIdentifier: { eq: "activities-main-page" } }
    ) {
      edges {
        node {
          title
          description
        }
      }
    }
  }
`
