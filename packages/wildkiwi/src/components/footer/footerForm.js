import React from "react"
import { Link } from "gatsby"

const FooterForm = () => {
  return (
    <div className="footer__form ">
      <h6 className="footer__trips-header">send us a message</h6>
      <p className="u-color-gray u-padding-bottom-small">
        feel free to drop us a note with any question
      </p>
      <div className="footer__form-fields ">
        <form className="footer__contact-form" name="contact">
          <input
            type="text"
            name="name"
            className="footer__form-input foooter__form-input-name"
            placeholder="name"
          />

          <input
            type="email"
            name="email"
            className="footer__form-input foooter__form-input-email"
            placeholder="email"
          />

          <input
            type="messsage"
            name="messsage"
            className="footer__form-input--big"
            placeholder="Message"
          />
          <div className="footer__form-consent-box">
            <input type="radio" className="footer__form-radio" />
            <p className="footer__form-consent u-color-gray">
              I agree to be contacted for marketing etc...
            </p>
          </div>
          <button className="btn btn--green-footer " type="submit">
            leave a message
          </button>
        </form>
      </div>
    </div>
  )
}

export default FooterForm
