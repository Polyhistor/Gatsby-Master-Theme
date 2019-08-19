import React from "react"

// default components
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Landing from "../components/header/landings/landing"
import GreenbarAlt from "../components/bars/greenbar-alt"
import BannerHero from "../components/banners/bannerHero"
import BoxContainer from "../components/boxes/boxContainer"
import TourBanner from "../components/banners/tourBanner"
import Banner from "../components/banners/banner"
import Reviews from "../components/reviews/reviews"
import Trips from "../components/trips/trips"
import Popup from "../components/popup"

// mobile components
import DestinationsMobile from "../components/mobile/destinationsMobile"
import FeaturedMobile from "../components/mobile/featuredMobile"

import WhyWildKiwi from "../components/mobile/whyWildkiwi"

// tablet component
import DestinationsTablet from "../components/tablet/destinationsTablet"

// utilities
import useImageQuery from "../queries/imageQuery"
import useHomePageQuery from "../queries/homePageQuery"

const IndexPage = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()
  const homeQuery = useHomePageQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <Popup />
      <Landing
        imageData={imageQuery.landing.childImageSharp.fluid}
        titleFirst="epic"
        TitleSecond="adventure"
        TitleThird="tours"
        subTitle="for 18 to 35 year olds"
        buttonFirst="Explore Tours"
        buttonFirstURL="/destinations"
        buttonSecond="watch trailer"
        buttonSecondURL="#popup"
        buttonStyles={["green", "white"]}
        variation={null}
      />
      <GreenbarAlt
        textList={[
          { label: "destinations", link: "/destinations" },
          { label: "new zealand", link: "/destinations/newzealand" },
          { label: "australia", link: "/destinations/australia" },
          { label: "europe", link: "/destinations/europe" },
        ]}
      />
      <WhyWildKiwi data={homeQuery[0].node.whyWildKiwi} />
      <FeaturedMobile />
      <div className="row row--patched mobile-yes">
        <h2 className="green-title u-margin-bottom-small">Destinations</h2>
      </div>
      <DestinationsMobile
        destination="newzealand"
        title="new zealand"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Kayak crystal clear waters, swim with dolphins, relax on pristine beaches, hike over glaciers and through native bush. If you love nature, you’ll love exploring with us."
        price="From $180 NZD per day"
        tours="7"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-New-Zealand-Map-Map-Homepage_1"
      />
      <DestinationsMobile
        destination="australia"
        title="australia"
        subtitle=" 6 - 14 day tours"
        departs="departs sydney & brisbane"
        details="Road trip along the dramatic Australia coastline while sampling locally crafted wine, trying your hand at surfing and exploring the underwater world of the Great Barrier Reef."
        price="From $160 AUD per day"
        tours="3"
        imageData={imageQuery.australia.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Australia-Map-Homepage-1"
      />
      <BannerHero
        headerFirst="Flash-pack your way around New Zealand,"
        headersecond="Australia and Europe."
        subHeaderFirst="We have hunted out all the very best spots to give you the most epic small group experience, allowing you to sit back and take in all that these places have to offer from the comfort of our new, luxury cruisers. We jam-pack our tours full of adventure, like-minded humans between the ages of 18 and 35 years and local guides who’ll show you all of the best on and off-the-beaten-track places."
        buttonText="how it works"
      />
      <BoxContainer dataArray={homeQuery[0].node.whyWildKiwi} />
      <div className="row row--patched mobile-no">
        <h2 className="green-title u-margin-bottom-small">Destinations</h2>
      </div>
      <TourBanner
        destination="newzealand"
        title="new zealand"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Kayak crystal clear waters, swim with dolphins, relax on pristine beaches, hike over glaciers and through native bush. If you love nature, you’ll love exploring with us."
        price="From $180 NZD per day"
        tours="7"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-New-Zealand-Map-Map-Homepage_1"
      />
      <TourBanner
        destination="australia"
        title="australia"
        subtitle=" 6 - 14 day tours"
        departs="departs sydney & brisbane"
        details="Road trip along the dramatic Australia coastline while sampling locally crafted wine, trying your hand at surfing and exploring the underwater world of the Great Barrier Reef."
        price="From $160 AUD per day"
        tours="3"
        imageData={imageQuery.australia.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Australia-Map-Homepage-1"
      />
      <TourBanner
        destination="europe"
        title="europe"
        subtitle=" 6 - 14 day tours"
        departs="Multiple Departure Cities"
        details="Immerse yourself in Europe’s epic history, dramatic natural beauty and inspiring contemporary culture. This is a continent which truly does have it all. we need more text"
        price="From $160 AUD per day"
        tours="12"
        imageData={imageQuery.europe.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Europe-Map-04"
      />
      <DestinationsTablet
        destination="newzealand"
        title="new zealand"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Kayak crystal clear waters, swim with dolphins, relax on pristine beaches, hike over glaciers and through native bush. If you love nature, you’ll love exploring with us."
        price="From $180 NZD per day"
        tours="7"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-New-Zealand-Map-Map-Homepage_1"
      />
      <DestinationsTablet
        destination="australia"
        title="australia"
        subtitle=" 6 - 14 day tours"
        departs="departs sydney & brisbane"
        details="Road trip along the dramatic Australia coastline while sampling locally crafted wine, trying your hand at surfing and exploring the underwater world of the Great Barrier Reef."
        price="From $160 AUD per day"
        tours="3"
        imageData={imageQuery.australia.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Australia-Map-Homepage-1"
      />
      <DestinationsTablet
        destination="europe"
        title="europe"
        subtitle=" 6 - 14 day tours"
        departs="Multiple Departure Cities"
        details="Immerse yourself in Europe’s epic history, dramatic natural beauty and inspiring contemporary culture. This is a continent which truly does have it all. we need more text"
        price="From $160 AUD per day"
        tours="12"
        imageData={imageQuery.europe.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Europe-Map-04"
      />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="How it works"
        subHeaderFirst="Everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips data={homeQuery[0].node.popularTours} />
    </Layout>
  )
}

export default IndexPage
