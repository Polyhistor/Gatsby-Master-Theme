import React from "react"
import resolveVariationClass from "../helpers/theme-variation-style"
// import

const Featured = ({ data }) => {
  console.log(data)

  const renderFeatures = () => {
    data.logoLabels.map((e, idx) => {
      return (
        <div className="featured__container-image featured__container-image--metro">
          <a href={e.logoUrLs[idx]} target="__blank">
            <img src={e.logos[idx].localFile.publicURL}></img>
          </a>
        </div>
      )
    })
  }

  return (
    <div className={resolveVariationClass("featured")}>
      <div className="featured__container">
        <h2 className="heading-tertiary--inline">featured in</h2>
        {renderFeatures()}
        {/* <div className="featured__container-image featured__container-image--metro">
          <a href={data.fIrstLogoUrl} target="__blank">
            <img src={data.firstLogoImage.localFile.publicURL}></img>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--daily">
          <a href={data.secondLogoUrl} target="__blank">
            <img src={data.secondLogoImage.localFile.publicURL}></img>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--west">
          <a href={data.thirdLogoUrl} target="__blank">
            <img src={data.thirdLogoImage.localFile.publicURL}></img>
          </a>
        </div>
        <div className="featured__container-image featured__container-image--qual">
          <a href={data.fourthLogoUrl} target="__blank">
            <img src={data.fourthLogoImage.localFile.publicURL}></img>
          </a>
        </div> */}
      </div>
    </div>
  )
}

export default Featured
