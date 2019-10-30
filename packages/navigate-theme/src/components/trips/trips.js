import React from "react"
import Trip from "./trip"

const Trips = ({ data }) => {
  let currency

  // function that programatically adds comma to the price
  let commaAdder = price => {
    const priceArray = price.toString().split("")
    const beforeComma = priceArray.slice(0, 1).join("")
    const afterComma = priceArray.slice(1, 4).join("")
    return `${beforeComma},${afterComma}`
  }

  // function to render trips based on fectched contentful data
  const renderTrips = () =>
    data.map((trip, key) => {
      // logic for adding currency text
      trip.destinationCountry === "new-zealand"
        ? (currency = ["NZD", "$"])
        : trip.destinationCountry === "australia"
        ? (currency = ["AUD", "$"])
        : (currency = ["EURO", "€"])

      return (
        <Trip
          key={key}
          imageData={trip.bannerImages[0].localFile.childImageSharp.fluid}
          duration={trip.duration}
          subtitle={trip.route}
          title={trip.title}
          slug={trip.slug}
          country={trip.destinationCountry}
          price={`from ${currency[1]}${commaAdder(trip.priceFrom)} ${
            currency[0]
          }`}
          priceDay={`${currency[1]}${trip.pricePerDay} per day`}
        />
      )
    })

  return (
    <section className="section-trips">
      <div className="row">
        <div className="trips-header-box">
          <h2 className="heading-1 heading-1--ms">Popular tours</h2>
        </div>
        <div className="trips-container">{renderTrips()}</div>
      </div>
    </section>
  )
}

export default Trips
