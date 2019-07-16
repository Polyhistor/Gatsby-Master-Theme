import React from "react"
import { Link } from "gatsby"

import Trip from "../../components/trips/trip"

import newzealandMap from "../../images/Wild_Kiwi_NZ_Discovery_Map.svg"

const BannerDestination = ({
  header,
  title,
  subtitle,
  departs,
  details,
  price,
  tourOne,
  tourTwo,
  tourThree,
  tourFour,
}) => {
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
            <img src={newzealandMap} alt="newzealnd map" />
          </div>
          <div className="destination-banner__tours">
            <Trip
              imageData={tourOne}
              duration="7"
              subtitle="christchurch return"
              title="big south"
              price="from $2483 NZD"
              priceDay="$177 per day"
            />
            <Trip
              imageData={tourTwo}
              duration="7"
              subtitle="christchurch return"
              title="big south"
              price="from $2483 NZD"
              priceDay="$177 per day"
            />
            <Trip
              imageData={tourThree}
              duration="7"
              subtitle="christchurch return"
              title="big south"
              price="from $2483 NZD"
              priceDay="$177 per day"
            />
            <Trip
              imageData={tourFour}
              duration="7"
              subtitle="christchurch return"
              title="big south"
              price="from $2483 NZD"
              priceDay="$177 per day"
            />
            <Link className="btn btn--green">all tours</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BannerDestination
