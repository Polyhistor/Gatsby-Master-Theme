import React from "react"
import Img from "gatsby-image"

const WorkForUs = ({ data }) => {
  console.log(data)

  const renderLinks = (links, urls) =>
    links.map((link, idx) => (
      <a className="work-for-us__links" href={urls[idx]}>
        {link}
      </a>
    ))

  return (
    <div className="row u-margin-top-big">
      <section className="work-for-us">
        <div>
          <h2 className="heading-2 heading-2--ms u-margin-bottom-small">
            {data.title1}
          </h2>
          <p className="paragraph u-margin-bottom-small">
            {data.description1.description1}
          </p>
          {renderLinks(data.links, data.urLs)}
        </div>
        <div>
          <h2 className="heading-2 heading-2--ms u-margin-bottom-small">
            {data.title2}
          </h2>
          <p className="paragraph u-margin-bottom-small">
            {data.description2.description2}
          </p>
          <h2 className="heading-2 heading-2--ms u-margin-bottom-small">
            {data.title3}
          </h2>
          <p className="paragraph u-margin-bottom-small">
            {data.description3.description3}
          </p>
          <h2 className="heading-2 heading-2--ms">{data.title4}</h2>
          <p className="paragraph u-margin-bottom-small">
            {data.description4.description4}
          </p>
          {renderLinks(data.links2, data.urLs2)}
        </div>
        <div>
          <Img fluid={data.image1.localFile.childImageSharp.fluid}></Img>
          <Img fluid={data.image2.localFile.childImageSharp.fluid}></Img>
        </div>
      </section>
    </div>
  )
}

export default WorkForUs