import React from "react"

import FooterTrips from "./footerTrips"
import FooterInfo from "./footerInfo"
import FooterContact from "./footerContact"
import FooterForm from "./footerForm"

const FooterContents = () => {
  return (
    <div className="row u-padding-top-huge ">
      <div className="col-1-of-4 u-margin-left-huge tablet-max-width tablet-margin-left-medium">
        <FooterTrips />
        <FooterInfo />
      </div>
      <div className="col-1-of-4 tablet-max-width">
        <FooterContact />
      </div>
      <div className="col-1-of-4 tablet-max-width">
        <FooterForm />
      </div>
      <div className="col-1-of-4" />
    </div>
  )
}

export default FooterContents
