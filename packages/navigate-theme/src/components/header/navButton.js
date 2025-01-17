import React, { useState } from "react"
import { withPrefix, Link } from "gatsby"
import resolveVariationClass from "../../helpers/theme-variation-style"
import Modal from "react-responsive-modal"
import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"
import { Location } from "@reach/router"
import { navigate } from "gatsby"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"

import BookingForm from "../destinations/bookingForm"
// import {navigate} from "reach/router"

const Buttonbox = props => {
  const bookButtonText = useWebSiteConfigQuery().sitePlugin.pluginOptions.config
    .bookingForm.bookButtonText

  // setting the initial state for the modal
  const [{ open }, setModal] = useState({
    open: false,
  })

  return (
    <>
      <div className="header__nav-button">
        <a href="https://mytourinfo.com/" target="_blank">
          <span
            className={resolveVariationClass("header__nav-button-box-icon")}
          >
            <svg className="svg-icon--login">
              <use xlinkHref={withPrefix("sprite.svg#icon-Login")} />
            </svg>

            <div className="navigation__dropdown navigation__dropdown--alt">
              <li className="navigation__dropdown-item">
                <a href="https://mytourinfo.com/" target="_blank">
                  manage booking
                </a>
              </li>
            </div>
          </span>
        </a>

        <Link
          to="/enquire"
          state={{ path: props.location.pathname }}
          className="header__nav-button-box-link"
        >
          <span
            id={TAG_MANAGER_TRACKER.POPUP_LAUNCH_BUTTON}
            className={`btn ${resolveVariationClass("btn__book")} btn-animated`}
          >
            {bookButtonText}
          </span>
        </Link>
      </div>

      <Modal
        open={open}
        onClose={() => setModal({ open: false })}
        className={{ overlay: "overlay", modal: "popup" }}
        center
      >
        <BookingForm data={null} country={null}></BookingForm>
      </Modal>
    </>
  )
}

export default props => (
  <Location>
    {locationProps => <Buttonbox {...locationProps} {...props} />}
  </Location>
)
