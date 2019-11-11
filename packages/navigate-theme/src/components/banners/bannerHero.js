import React from "react"
import { Link } from "gatsby"
import BackgroundImage from "gatsby-background-image"

// default components
import Featured from "../featured"

// extracting our hook
import useFeatureBox from "../../queries/featuredBoxQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"

const BannerHero = ({
  headerFirst,
  headersecond,
  headerThird,
  subHeaderFirst,
  subHeaderSecond,
  buttonText,
  imageData,
}) => {
  const featuredBoxData = useFeatureBox()

  return (
    <section className="section-banner section-banner-hero mobile-no">
      <div className="row">
        <BackgroundImage fluid={imageData} className={"banner-hero__image"}>
          <div className="banner-hero">
            <div className="banner-hero__text-box">
              <h2 className="banner-hero-heading--main">
                {headerFirst} <br /> {headersecond} <br /> {headerThird}
              </h2>
              <p className="banner-hero-heading--sub">
                {subHeaderFirst} <br /> {subHeaderSecond}
              </p>
              <div className="banner-hero__button-box">
                <Link
                  to="/how-it-works"
                  className={`btn ${resolveVariationClass(
                    "btn--white"
                  )} btn-animated`}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          </div>
        </BackgroundImage>
        <Featured data={featuredBoxData[0].node} />
      </div>
    </section>
  )
}

export default BannerHero
