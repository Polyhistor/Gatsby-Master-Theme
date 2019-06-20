import React from "react"
import Trip from "./trip"
import { graphql, useStaticQuery } from "gatsby"

const Trips = () => {
  const toursImages = useStaticQuery(graphql`
    query {
      bigSouth: file(relativePath: { eq: "wild-kiwi-tours-big-south.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      northernVoyage: file(
        relativePath: { eq: "wild-kiwi-tours-northern-voyager.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      NZDiscovery: file(
        relativePath: { eq: "wild-kiwi-tours-nz-discovery.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      nzExplorer: file(
        relativePath: { eq: "wild-kiwi-tours-nz-explorer.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      queensland: file(relativePath: { eq: "wild-kiwi-tours-queensland.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      southernLoop: file(
        relativePath: { eq: "wild-kiwi-tours-southern-loop.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="section-trips mobile-no">
      <div className="row">
        <div className="trips-header-box u-padding-bottom-small ">
          <h2 className="green-title">Popular Tours</h2>
        </div>
        <div className="trips-container">
          <Trip
            imageData={toursImages.bigSouth.childImageSharp.fluid}
            duration="7 days"
            subtitle="christchurch return"
            title="big south"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
          <Trip
            imageData={toursImages.northernVoyage.childImageSharp.fluid}
            duration="7 days"
            subtitle="christchurch return"
            title="north voyager"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />

          <Trip
            imageData={toursImages.NZDiscovery.childImageSharp.fluid}
            duration="7 days"
            subtitle="christchurch return"
            title="big south"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
          <Trip
            imageData={toursImages.nzExplorer.childImageSharp.fluid}
            duration="7 days"
            subtitle="christchurch return"
            title="NZ Adventurer"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />

          <Trip
            imageData={toursImages.queensland.childImageSharp.fluid}
            duration="14 days"
            subtitle="christchurch return"
            title="NZ explorer"
            price="from $2483 NZD"
            priceDay="$177 per day"
          />
          <Trip
            imageData={toursImages.southernLoop.childImageSharp.fluid}
            duration="14 days"
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
          class="btn btn--green tablet-green-button"
          href="/"
        >
          view trips
        </a>
      </div>
    </section>
  )
}

export default Trips
