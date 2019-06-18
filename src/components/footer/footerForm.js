import React from "react"
import { Link } from "gatsby"

const FooterForm = () => {
  return (
    <div className="footer__form u-padding-top-sedium mobile-no">
      <div className="footer__form-links">
        <Link to="/" className="footer__form-links-item u-background-teal">
          send us a message
        </Link>
        <Link to="/" className="footer__form-links-item">
          subscribe
        </Link>
      </div>
      <p className="u-color-gray u-padding-top-big mobile-no">
        feel free to drop us a note with any question
      </p>
      <div className="footer__form-fields mobile-no">
        <form name="contact" data-netlify="true">
          <div className="footer__form-group u-float-left">
            <input
              type="text"
              name="name"
              className="footer__form-input"
              placeholder="name"
            />
          </div>
          <div className="footer__form-group u-float-right">
            <input
              type="email"
              name="email"
              className="footer__form-input"
              placeholder="email"
            />
          </div>
          <div className="footer__form-group">
            <input
              type="messsage"
              name="messsage"
              className="footer__form-input--big"
              placeholder="Message"
            />
            <button
              className="btn btn--green-footer u-float-right"
              type="submit"
            >
              leave a message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FooterForm
