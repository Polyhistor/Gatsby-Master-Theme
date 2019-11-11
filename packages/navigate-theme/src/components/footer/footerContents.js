import React, { useContext } from "react"

import FooterDestinations from "./footerDestinations"
import FooterInfo from "./footerInfo"
import FooterContact from "./footerContact"
import FooterForm from "./footerForm"
import FooterInstagramBox from "./footerInstagramBox"

import footerContext from "../../contexts/footerContext"

import useImageQuery from "../../queries/imageQuery"

const FooterContents = () => {
  //extracting query from our custom hook
  const imageQuery = useImageQuery()

  const instaPhotos = useContext(footerContext)

  console.log(instaPhotos)

  return (
    <div className="row u-padding-top-huge ">
      <div className="footer__grid">
        <FooterInstagramBox
          imageOne={instaPhotos[0].imageOne}
          imageTwo={instaPhotos[1].imageTwo}
          imageThree={instaPhotos[2].imageThree}
          imageFour={instaPhotos[3].imageFour}
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
