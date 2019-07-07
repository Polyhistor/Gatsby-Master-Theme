import React from "react"
import Trip from "./trip"

import useImageQuery from "../../queries/ImageQuery"

const Trips = () => {
  // extracting query from our custom hook
  const imageQuery = useImageQuery()

  return (
    <section className="section-trips">
      <div className="row">
        <div className="trips-header-box u-padding-bottom-small ">
          <h2 className="green-title">Popular Tours</h2>
        </div>
        <div className="trips-container">
          <Trip
            imageData={imageQuery.bigSouth.childImageSharp.fluid}
            duration="7"
            subtitle="christchurch return"
            title="big south"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
          <Trip
            imageData={imageQuery.northernVoyage.childImageSharp.fluid}
            duration="7"
            subtitle="christchurch return"
            title="north voyager"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />

          <Trip
            imageData={imageQuery.NZDiscovery.childImageSharp.fluid}
            duration="7"
            subtitle="christchurch return"
            title="big south"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
          <Trip
            imageData={imageQuery.nzExplorer.childImageSharp.fluid}
            duration="7"
            subtitle="christchurch return"
            title="NZ Adventurer"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />

          <Trip
            imageData={imageQuery.queensland.childImageSharp.fluid}
            duration="14"
            subtitle="christchurch return"
            title="NZ explorer"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
          <Trip
            imageData={imageQuery.southernLoop.childImageSharp.fluid}
            duration="14"
            subtitle="christchurch return"
            title="Southern Voyager"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
        </div>
      </div>
      <div className="row trips__text-box">
        <a
          aria-current="page"
          className="btn btn--green tablet-green-button"
          href="/"
        >
          view trips
        </a>
      </div>
    </section>
  )
}

export default Trips
