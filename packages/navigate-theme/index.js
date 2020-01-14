import dateHandler from "./src/helpers/dateHandler"

/*templates*/
export {
  default as ActivitiesCountriesTemplate,
} from "./src/templates/activitiesCountries"
export {
  default as ActivitiesMainTemplate,
} from "./src/templates/activitiesMain"
export {
  default as ActivitiesSingleTemplate,
} from "./src/templates/activitiesSingle"
export { default as BlogAuthorTemplate } from "./src/templates/blogAuthor"
export { default as BlogCategoryTemplate } from "./src/templates/blogCategory"
export { default as BlogMainPageTemplate } from "./src/templates/blogMain"
export { default as BlogSearchTemplate } from "./src/templates/blogSearch"
export { default as BlogPostTemplate } from "./src/templates/blogSingle"
export { default as CountriesTemplate } from "./src/templates/countries"
export {
  default as DestinationsSingleTemplate,
} from "./src/templates/destinationsSingle"

/*queries*/

export { useWebSiteConfigQuery } from "./src/queries/webSiteConfigQueries"
export { default as useImageQuery } from "./src/queries/imageQuery"
export { default as useHomePageQuery } from "./src/queries/homePageQuery"
export { default as useCountryQuery } from "./src/queries/countryQuery"
export { default as useDestinationQuery } from "./src/queries/destinationQuery"
export { default as useActivityQuery } from "./src/queries/activityQuery"
export { default as useFAQQuery } from "./src/queries/faqQuery"
export { default as useHowItWorksQuery } from "./src/queries/howItWorksQuery"
export { default as useReviewQuery } from "./src/queries/reviewQuery"
export { default as useTeamQuery } from "./src/queries/teamQuery"
export { default as useThemeFooterQuery } from "./src/queries/themeFooterQuery"
export { default as useWildkiwiQuery } from "./src/queries/wildkiwiQuery"
export { default as usePrivacyQuery } from "./src/queries/privacyPolicyQuery"
export {
  default as useThemeRoutesConfigQuery,
} from "./src/queries/themeRoutesConfigQuery"
export { default as useTermsQuery } from "./src/queries/termsConditionsQuery"
export { default as useFAQVideo } from "./src/queries/faqVideoQuery"
export { default as useFeatureBox } from "./src/queries/featuredBoxQuery"
export { default as useContactQuery } from "./src/queries/contactQuery"
export { default as useThemeModalQuery } from "./src/queries/themeModalQuery"
export { default as useFooterQuery } from "./src/queries/footerQuery"

/*book form*/
export { default as BookForm } from "./src/components/booking-form/book-form"

/*components*/
export { default as WorkForUs } from "./src/components/workForUs"
export { default as Intro } from "./src/components/intro"

/* Activity */
export {
  default as ActivityRelated,
} from "./src/components/activity/activityRelated"
export {
  default as ActivityScaffold,
} from "./src/components/activity/activityScaffold"
export {
  default as SectionActivity,
} from "./src/components/activity/sectionActivity"

export { default as YachtSingle } from "./src/components/yachts/yachtSingle"

/*Banner*/

export { default as Banner } from "./src/components/banners/banner"
export { default as TourBanner } from "./src/components/banners/tourBanner"
export { default as BannerHero } from "./src/components/banners/bannerHero"
export {
  default as BannerDestionation,
} from "./src/components/banners/bannerDestination"
/*Bars*/
export { default as GreenBarAlt } from "./src/components/bars/greenbar-alt"
export { default as GreenBar } from "./src/components/bars/greenBar"
/*Blog*/

export { default as NavLink } from "./src/components/blog/blogNavLink" //TODO: does not belong to blog.
export { default as BlogRelated } from "./src/components/blog/blogRelated"
/*Box*/
export { default as DuoBox } from "./src/components/boxes/duoBoxes"
export { default as Box } from "./src/components/boxes/box"
export { default as BoxContainer } from "./src/components/boxes/boxContainer"
export { default as BoxText } from "./src/components/boxes/boxText"
/*Destinations*/
export {
  default as ActivitiesBox,
} from "./src/components/destinations/activitiesBox"
export { default as Booking } from "./src/components/destinations/booking"
export {
  default as DestinationSection,
} from "./src/components/destinations/destinationSection"
export {
  default as DestinationStarter,
} from "./src/components/destinations/destinationStarter"
export {
  default as FilteredTours,
} from "./src/components/destinations/filteredTours"
export { default as GetThere } from "./src/components/destinations/getThere"
export { default as HighLight } from "./src/components/destinations/highlight"
export { default as Includes } from "./src/components/destinations/includes"
export { default as Itinerary } from "./src/components/destinations/itinerary"
export { default as TripBox } from "./src/components/destinations/tripBox"
export { default as WhyUs } from "./src/components/destinations/whyWild" //TODO: whywild,component name should be generic
/*Footer*/

//TODO: contact list should not be on shared modules.
export { default as ContactList } from "./src/components/footer/contactList"
export { default as Footer } from "./src/components/footer/footer"
export { default as FooterContact } from "./src/components/footer/footerContact"
export {
  default as FooterContents,
} from "./src/components/footer/footerContents"
export {
  default as FooterDestinations,
} from "./src/components/footer/footerDestinations"
export { default as FooterForm } from "./src/components/footer/footerForm"
export { default as FooterInfo } from "./src/components/footer/footerContact"
export {
  default as FooterCopyright,
} from "./src/components/footer/footerCopyright"
export {
  default as FooterInstagramBox,
} from "./src/components/footer/footerInstagramBox"

export {
  default as InstagramPosts,
} from "./src/components/footer/instagramPosts"

export {
  default as SocialNetworks,
} from "./src/components/footer/socialNetworks"
/*Header*/

export { default as Landing } from "./src/components/header/landings/landing"
export {
  default as LandingChartered,
} from "./src/components/header/landings/landingChartered"

export { default as Logo } from "./src/components/header/logo"

//TODO: Menu Labels go to specific project folder

export { default as NavButton } from "./src/components/header/navButton"
export { default as Navigation } from "./src/components/header/navigation"

export { default as Navigation2 } from "./src/components/header/navigation2"

export { default as NavItems } from "./src/components/header/navItems"

/*Layout*/

export { default as Layout } from "./src/components/layout/layout"

export { default as Layout2 } from "./src/components/layout/layout2"

/*Mobile*/

export {
  default as DestinationsMobile,
} from "./src/components/mobile/destinationsMobile"

export {
  default as FeaturedMobile,
} from "./src/components/mobile/featuredMobile"

export { default as MobileLogo } from "./src/components/mobile/featuredMobile"
export {
  default as MobileNavItems,
} from "./src/components/mobile/mobileNavItems"
export {
  default as NavigationMobile,
} from "./src/components/mobile/navigationMobile"
export { default as WhyUsMobile } from "./src/components/mobile/whyWildkiwi"

/*Reviews*/

export { default as Review } from "./src/components/reviews/review"
export { default as TrustPilotBox } from "./src/components/reviews/trustpilot"
export { default as Reviews } from "./src/components/reviews/reviews"
export { default as SectionFAQ } from "./src/components/sections/sectionFAQ"

/*Section*/
export {
  AboutUs as AboutUsSection,
} from "./src/components/sections/aboutUsSection"
export { default as SectionFaq } from "./src/components/sections/sectionFAQ"

export {
  default as SectionGetInTouch,
} from "./src/components/sections/sectionGetInTouch"
export {
  default as SectionHowItWorks,
} from "./src/components/sections/sectionHowItWorks"
export {
  default as SectionReview,
} from "./src/components/sections/sectionReview"
export {
  default as SectionVehicle,
} from "./src/components/sections/sectionVehicles"

/*SEO*/

export { default as SEO } from "./src/components/seo/seo"

/*Tablet*/

export {
  default as DestinationsTablet,
} from "./src/components/tablet/destinationsTablet"

/*Trips*/
export { default as Trip } from "./src/components/trips/trip"
export { default as Trips } from "./src/components/trips/trips"

/*General Items*/
export { default as Featured } from "./src/components/featured"
export { default as GetInTouchData } from "./src/components/getInTouchData"
export { default as Row } from "./src/components/row"

export { default as Error } from "./src/components/destinations/error"

/**
 * Configuration
 */
export { PAGE_SEO_IDENTIFIER } from "./src/config/page-seo-identifier"

/**
 * Helpers - SEO
 */
export {
  renderSeo,
  renderSeoFromContext,
  extractMetadataFromContentfulData,
} from "./src/helpers/seo-helper"

export {
  default as resolveVariationClass,
} from "./src/helpers/theme-variation-style"

export {
  Desktop,
  Laptop,
  Tablet,
  Mobile,
  DefaultRender,
} from "./src/helpers/conditionalRenders"
