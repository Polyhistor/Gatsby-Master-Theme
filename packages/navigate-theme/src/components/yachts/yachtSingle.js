import React from "react"
import Img from "gatsby-image"

import useImageQuery from "../../queries/imageQuery"
import {
  Laptop,
  Mobile,
  Tablet,
  DefaultRender,
} from "../../helpers/conditionalRenders"
import Intro from "../../components/intro"

const YachtSingle = ({ data, popupVideo }) => {
  const imageData = useImageQuery()

  const renderList = (list, idx) => list.map(e => <li key={idx}>{e}</li>)
  const renderImage = (img, idx) =>
    img.map(e => (
      <Img key={idx} fluid={e.localFile.childImageSharp.fluid}></Img>
    ))

  const renderYachts = () =>
    data
      .sort((a, b) => a.node.order - b.node.order)
      .map(({ node }, idx) => (
        <section className="yacht" key={idx}>
          <div className="yacht__inner">
            <div className="yacht__info">
              <h2 className="yacht__title">{node.title}</h2>
              <h4 className="yacht__sub-title">{node.subtitle}</h4>
              <p className="paragraph u-margin-bottom-small">
                {node.description.description}
              </p>
              <h4 className="yacht__sub-title">Key Features</h4>
              <ul>{renderList(node.keyFeatures)}</ul>
            </div>
            <div className="yacht__images">{renderImage(node.images)}</div>
            <div className="yacht__map">
              <DefaultRender>
                <Laptop>
                  <img src={node.yachtMap6X4.localFile.publicURL}></img>
                </Laptop>
                <Tablet>
                  <img src={node.yachtMap6X4.localFile.publicURL}></img>
                </Tablet>
                <img src={node.yachtMap.localFile.publicURL}></img>
              </DefaultRender>
            </div>
          </div>
        </section>
      ))

  return (
    <>
      <Intro
        title="We've got a boat to suit every traveller"
        description="Set sail around the Mediterranean in our modern yachts and catamarans. We have three modern boats to suit any travel style, so you can choose the ultimate way to experience your dream sailing holiday."
        mobileButton={true}
        popupvideoURL={popupVideo}
      />

      <section className="yacht-container">
        <div className="row">
          <h2 class="heading-1 heading-1--ms u-margin-bottom-sedium">
            Yacht Types
          </h2>
          <Mobile>
            <Img
              fluid={imageData.YachtsMobileBanner.childImageSharp.fluid}
            ></Img>
          </Mobile>
          {renderYachts()}
        </div>
      </section>
    </>
  )
}

export default YachtSingle
