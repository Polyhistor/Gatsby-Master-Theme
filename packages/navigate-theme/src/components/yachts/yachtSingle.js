import React from "react"
import Img from "gatsby-image"

const YachtSingle = ({ data }) => {
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
            <img src={node.yachtMap.localFile.publicURL}></img>
          </div>
        </section>
      ))

  return (
    <div className="row u-margin-top-big">
      <section className="yacht-container">{renderYachts()}</section>
    </div>
  )
}

export default YachtSingle
