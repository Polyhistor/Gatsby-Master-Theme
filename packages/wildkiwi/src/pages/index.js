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

// mobile components
import WatchTrailer from "../components/mobile/watchTrailer"
import DestinationsMobile from "../components/mobile/destinationsMobile"
import FeaturedMobile from "../components/mobile/featuredMobile"

import WhyWildKiwi from "../components/mobile/whyWildkiwi"

// tablet component
import DestinationsTablet from "../components/tablet/destinationsTablet"

// utilities
import useImageQuery from "../queries/imageQuery"

const IndexPage = () => {
  // extracting our custom hook
  const imageQuery = useImageQuery()

  return (
    <Layout>
      <SEO title="Home" />
      <Landing
        imageData={imageQuery.landing.childImageSharp.fluid}
        titleFirst="epic"
        TitleSecond="adventure"
        TitleThird="tours"
        subTitle="for 18 to 35 year olds"
        buttonFirst="Explore Tours"
        buttonFirstURL="/destinations"
        buttonSecond="watch trailer"
        buttonSecondURL="/blog"
        buttonStyles={["green", "white"]}
        variation={null}
      />
      <GreenbarAlt
        textList={[
          { label: "destinations", link: "/" },
          { label: "new zealand", link: "/destinations/newzealand" },
          { label: "australia", link: "/destinations/australia" },
          { label: "europe", link: "/destinations/europe" },
        ]}
      />
      <WatchTrailer />
      <FeaturedMobile />
      <WhyWildKiwi />
      <BannerHero
        headerFirst="Venture off the beaten"
        headersecond="track on an adventure full"
        headerThird="of incredible sights."
        subHeaderFirst="Experience flashpacker luxury on a backpacker budget as we travel through the best of New Zealand, Australia and Europe. Discover cultural heritage, culinary"
        subHeaderSecond="delights, spectacular scenery and adreniline pumping adventures on whatever adventure you choose. Let us show you our backyard."
        buttonText="how it works"
      />
      <BoxContainer
        imageOne={imageQuery.newVehicles.childImageSharp.fluid}
        imageTwo={imageQuery.localGuids.childImageSharp.fluid}
        imageThree={imageQuery.smallGroups.childImageSharp.fluid}
        imageFour={imageQuery.breathTakingScenery.childImageSharp.fluid}
      />
      <div className="row row--patched">
        <h2 className="green-title u-margin-bottom-small">Destinations</h2>
      </div>
      <TourBanner
        destination="newzealand"
        title="new zealand"
        subtitle=" 7 - 21 day tours"
        departs="departs auckland & christchurch"
        details="Kayak crystal clear waters, swim with dolphins, hike over glaciers and through pristine native bush. If you love nature, you’ll love exploring New Zealand with us. we need more text"
        price="From $180 NZD per day"
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
        imageData={imageQuery.australia.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Australia-Map-Homepage-1"
      />
      <TourBanner
        destination="europe"
        title="europe"
        subtitle=" 6 - 14 day tours"
        departs="departs sydney & brisbane"
        details="Become awestruck by Europe's epic history and natural beauty. Embark on a journey across the region that uncovers glorious scenery, cultural heritage and dazzling artistry all off the beaten track."
        price="From $160 AUD per day"
        imageData={imageQuery.europe.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Europe-Map-Homepage-ALT5"
      />
      <DestinationsTablet
        destination="newzealand"
        title="new zealand"
        subtitle=" 1 - 4 day tours"
        departs="departs ssydney & brisbane"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $160 AUD per day"
        tours="7 tours"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-New-Zealand-Map-Map-Homepage_1"
      />
      <DestinationsTablet
        destination="australia"
        title="australia"
        subtitle=" 1 - 4 day tours"
        departs="departs ssydney & brisbane"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $160 AUD per day"
        tours="7 tours"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Australia-Map-Homepage-1"
      />
      <DestinationsTablet
        destination="europe"
        title="europe"
        subtitle=" 1 - 4 day tours"
        departs="departs ssydney & brisbane"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $160 AUD per day"
        tours="7 tours"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Europe-Map-Homepage-ALT5"
      />
      <DestinationsMobile
        destination="newzealand"
        title="new zealand"
        subtitle=" 1 - 4 day tours"
        departs="departs ssydney & brisbane"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $160 AUD per day"
        tours="7 tours"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-New-Zealand-Map-Map-Homepage_1"
      />
      <DestinationsMobile
        destination="australia"
        title="australia"
        subtitle=" 1 - 4 day tours"
        departs="departs ssydney & brisbane"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $160 AUD per day"
        tours="7 tours"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Australia-Map-Homepage-1"
      />
      <DestinationsMobile
        destination="europe"
        title="europe"
        subtitle=" 1 - 4 day tours"
        departs="departs ssydney & brisbane"
        details="Equo to estrupt aquodic tecus doluptatiis expedita autaquam ratur ab iniam voloribus, siti ad estinci cuptatempor as nonecte inctate mporuptatem. Apit fugit endempe ribus, a nit labora."
        price="From $160 AUD per day"
        tours="7 tours"
        imageData={imageQuery.newzealand.childImageSharp.fluid}
        SVGMap="icon-Wild-Kiwi-Europe-Map-Homepage-ALT5"
      />
      <Banner
        imageData={imageQuery.banner.childImageSharp.fluid}
        header="How it works"
        subHeaderFirst="everything you need to"
        subHeaderSecond="know about our tours"
        buttonText="continue"
      />
      <Reviews />
      <Trips />
    </Layout>
  )
}

export default IndexPage
