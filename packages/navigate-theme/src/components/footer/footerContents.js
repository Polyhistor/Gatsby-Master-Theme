import React, { useContext } from "react"

import FooterDestinations from "./footerDestinations"
import FooterInfo from "./footerInfo"
import FooterContact from "./footerContact"
import FooterForm from "./footerForm"
import FooterInstagramBox from "./footerInstagramBox"

import footerContext from "../../contexts/footerContext"

const FooterContents = () => {
  const contextData = useContext(footerContext)

  return (
    <div className="row u-padding-top-huge ">
      <div className="footer__grid">
        <FooterInstagramBox
          imageOne={contextData.photos[0].imageOne}
          imageTwo={contextData.photos[1].imageTwo}
          imageThree={contextData.photos[2].imageThree}
          imageFour={contextData.photos[3].imageFour}
          url={contextData.URL}
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
