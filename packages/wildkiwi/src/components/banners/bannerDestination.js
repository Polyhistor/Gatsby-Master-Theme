import React from "react"
import { Link } from "gatsby"

import Trip from "../../components/trips/trip"

import useCountryQuery from "../../queries/countryQuery"

const BannerDestination = ({
  header,
  title,
  subtitle,
  departs,
  details,
  price,
  link,
  svgMap,
}) => {
  // extracting from our custom hook
  const countryQuery = useCountryQuery()

  //rendering tours based on given data from our Contentful Query
  const renderTours = () => {
    return countryQuery.map(({ node }, idx) => {
      return (
        <Trip
          imageData={node.tourBoxImages[idx].localFile.childImageSharp.fluid}
          duration={node.tourBoxDays[idx]}
          title={node.tourBoxTitles[idx]}
          subtitle={node.tourBoxSubtitle[idx]}
          price={node.tourBoxPrice[idx]}
          priceDay={node.tourBoxPerDay[idx]}
        />
      )
    })
  }

  return (
    <section className={`section-tour-banner-destination`}>
      <div className="row">
        {header !== null ? (
          <h2 className="green-title u-margin-bottom-small">{header}</h2>
        ) : null}

        <div className="destination-banner">
          <div className="destination-banner__description">
            <h3 className="tour-banner__description-title tour-banner__description-title-newzealand">
              {title}
            </h3>
            <h4 className="tour-banner__description-subtitle">{subtitle}</h4>
            <h5 className="tour-banner__description-subtitle tour-banner__description-subtitle-departs">
              {departs}
            </h5>
            <p className="tour-banner__description-details">{details}</p>
            <p />
            <span
              className={`tour-banner__description-price tour-banner__description-price-newzealand`}
            >
              {price}
            </span>
          </div>
          <div className="destination-banner__map">
            <img src={svgMap} alt="newzealnd map" />
          </div>
          <div className="destination-banner__tours">
            {renderTours()}
            <Link to={`/${link}`} className="btn btn--green">
              all tours
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerDestination
