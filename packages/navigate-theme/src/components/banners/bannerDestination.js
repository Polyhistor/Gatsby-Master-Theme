import React from "react"
import { Link } from "gatsby"

import Trip from "../../components/trips/trip"

const BannerDestination = ({
  header,
  title,
  subtitle,
  departs,
  details,
  price,
  link,
  svgMap,
  tripsData,
}) => {
  //rendering tours based on given data from our Contentful Query
  const renderTours = () => {
    return tripsData.map((dest, idx) => {
      return (
        <Trip
          key={idx}
          imageData={dest.bannerImages[0].localFile.childImageSharp.fluid}
          duration={dest.duration}
          title={dest.title}
          subtitle={dest.route}
          slug={dest.slug}
          country={dest.destinationCountry}
          price={`from ${dest.priceFrom} NZD`}
          priceDay={`${dest.pricePerDay} per day`}
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
            <h3 className="tour-banner__description-title">{title}</h3>
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
