import React from "react"
import Trip from "./trip"

const Trips = ({ data }) => {
  // function to render trips based on fectched contentful data
  const renderTrips = () =>
    data.map((trip, key) => (
      <Trip
        key={key}
        imageData={trip.bannerImages[0].localFile.childImageSharp.fluid}
        duration={trip.duration}
        subtitle={trip.route}
        title={trip.title}
        slug={trip.slug}
        price={`from $${trip.priceFrom} NZD`}
        priceDay={`$${trip.pricePerDay} per day`}
      />
    ))

  return (
    <section className="section-trips">
      <div className="row">
        <div className="trips-header-box u-padding-bottom-small ">
          <h2 className="green-title">Popular tours</h2>
        </div>
        <div className="trips-container">{renderTrips()}</div>
      </div>
    </section>
  )
}

export default Trips
