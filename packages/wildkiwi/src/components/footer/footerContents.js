import React from "react"

import FooterDestinations from "./footerDestinations"
import FooterInfo from "./footerInfo"
import FooterContact from "./footerContact"
import FooterForm from "./footerForm"
import FooterInstagramBox from "./footerInstagramBox"

const FooterContents = () => {
  return (
    <div className="row u-padding-top-huge ">
      <div className="footer__grid">
        <FooterInstagramBox />
        <FooterDestinations />
        <FooterInfo />
        <FooterContact />
        <FooterForm />
      </div>
    </div>
  )
}

export default FooterContents
