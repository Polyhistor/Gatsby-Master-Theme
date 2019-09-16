import React from "react"

import FooterDestinations from "./footerDestinations"
import FooterInfo from "./footerInfo"
import FooterContact from "./footerContact"
import FooterForm from "./footerForm"
import FooterInstagramBox from "./footerInstagramBox"

import useImageQuery from "../../queries/imageQuery"

const FooterContents = () => {
  //extracting query from our custom hook
  const imageQuery = useImageQuery()
  return (
    <div className="row u-padding-top-huge ">
      <div className="footer__grid">
        <FooterInstagramBox
          imageOne={imageQuery.instaOne.childImageSharp.fluid}
          imageTwo={imageQuery.instaTwo.childImageSharp.fluid}
          imageThree={imageQuery.instaThree.childImageSharp.fluid}
          imageFour={imageQuery.instaFour.childImageSharp.fluid}
        />
        <FooterDestinations />
        <FooterInfo />
        <FooterContact />
        <FooterForm />
      </div>
    </div>
  )
}

export default FooterContents
