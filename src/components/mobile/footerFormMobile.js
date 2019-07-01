import React from "react"
import { Link } from "gatsby"

const FooterFormMobile = () => {
  return (
    <div className="footer__form u-padding-top-sedium mobile-yes">
      <div className="footer__form-links">
        <Link to="/" className="footer__form-links-item u-background-teal">
          send us a message
        </Link>
        <Link to="/" className="footer__form-links-item">
          subscribe
        </Link>
      </div>
      <div className="footer__form-fields mobile-yes">
        <form name="contact">
          <div className="footer__form-group">
            <input
              type="text"
              name="name"
              className="footer__form-input"
              placeholder="name"
            />
          </div>
          <div className="footer__form-group">
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
            <button className="btn btn--green-footer " type="submit">
              leave a message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default FooterFormMobile
