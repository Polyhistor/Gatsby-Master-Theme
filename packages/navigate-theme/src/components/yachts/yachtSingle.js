import React from "react"
import Img from "gatsby-image"

const YachtSingle = ({ data }) => {
  console.log(data)

  const renderList = list => list.map(e => <li>{list}</li>)
  const renderImage = img =>
    img.map(e => <Img fluid={e.localFile.childImageSharp.fluid}></Img>)

  return (
    <div className="row u-margin-top-big">
      <section className="yacht-container">
        <section className="yacht">
          <h2 className="heading-2 heading-2--ms">{data.title}</h2>
          <h4 className="heading-3 heading-3--ms">{data.subtitle}</h4>
          <p className="paragraph u-margin-bottom-small">
            {data.description.description}
          </p>
          <h4 className="heading-3 heading-3--ms">key features</h4>
          <ul className="paragraph u-margin-bottom-small">
            {renderList(data.keyFeatures)}
          </ul>
          <h4 className="heading-3 heading-3--ms">excluded</h4>
          <ul className="paragraph u-margin-bottom-small">
            {renderList(data.excluded)}
          </ul>
          <div>{renderImage(data.images)}</div>
        </section>
      </section>
    </div>
  )
}

export default YachtSingle
