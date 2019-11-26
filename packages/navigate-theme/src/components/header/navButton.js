import React, { useState } from "react"
import { withPrefix, Link } from "gatsby"
import Modal from "react-responsive-modal"
import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"
import BookingForm from "../destinations/bookingForm"

const Buttonbox = location => {
  // setting the initial state for the modal
  const [{ open }, setModal] = useState({
    open: false,
  })

  return (
    <>
      <div className="header__nav-button">
        <span className="header__nav-button-box-icon">
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

        <Link
          to="/enquire"
          state={{ path: window.location.pathname }}
          className="header__nav-button-box-link"
        >
          <span
            id={TAG_MANAGER_TRACKER.POPUP_LAUNCH_BUTTON}
            className={`btn btn--wk btn-animated`}
          >
            book
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

export default Buttonbox
