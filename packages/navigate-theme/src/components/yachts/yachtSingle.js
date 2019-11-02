import React from "react"
import Img from "gatsby-image"

const YachtSingle = ({ data }) => {
  console.log(data)

  const renderList = list => list.map(e => <li>{e}</li>)
  const renderImage = img =>
    img.map(e => <Img fluid={e.localFile.childImageSharp.fluid}></Img>)

  const renderYachts = () =>
    data.map(({ node }, idx) => (
      <section className="yacht" key={idx}>
        <h2 className="heading-2 heading-2--ms">{node.title}</h2>
        <h4 className="heading-3 heading-3--ms">{node.subtitle}</h4>
        <p className="paragraph u-margin-bottom-small">
          {node.description.description}
        </p>
        <h4 className="heading-3 heading-3--ms">key features</h4>
        <ul className="paragraph u-margin-bottom-small">
          {renderList(node.keyFeatures)}
        </ul>
        <h4 className="heading-3 heading-3--ms">excluded</h4>
        <ul className="paragraph u-margin-bottom-small">
          {renderList(node.excluded)}
        </ul>
        <div>{renderImage(node.images)}</div>
      </section>
    ))

  return (
    <div className="row u-margin-top-big">
      <section className="yacht-container">{renderYachts()}</section>
    </div>
  )
}

export default YachtSingle
