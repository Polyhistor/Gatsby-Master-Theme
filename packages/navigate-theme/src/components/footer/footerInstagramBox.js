import React from "react"
import Img from "gatsby-image"

import resolveVariationClass from "../../helpers/theme-variation-style"
import useFooterQuery from "../../queries/footerQuery"

const FooterInstagramBox = () => {
  const footerData = useFooterQuery()
  const images = footerData[0].node.instagramBoxImages
  const url = footerData[0].node.instagramBoxUrl

  return (
    <a className="footer__instagram" href={url} target="_blank">
      <div className={resolveVariationClass("footer__instagram-box")}>
        <h2>#MedSailors</h2>
        {images.map((img, idx) => (
          <Img key={idx} fluid={img.localFile.childImageSharp.fluid} />
        ))}
      </div>
    </a>
  )
}

export default FooterInstagramBox
