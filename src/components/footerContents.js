import React from "react"

import FooterTrips from "./footerTrips"
import FooterInfo from "./footerInfo"
import FooterContact from "../components/footerContact"
import FooterForm from "./footerForm"

const FooterContents = () => {
  return (
    <div className="row u-padding-top-huge ">
      <div className="col-1-of-4 u-margin-left-huge">
        <FooterTrips />
        <FooterInfo />
      </div>
      <div className="col-1-of-4">
        <FooterContact />
      </div>
      <div className="col-1-of-4">
        <FooterForm />
      </div>
      <div className="col-1-of-4" />
    </div>
  )
}

export default FooterContents
