import React from "react"

const FooterForm = () => {
  return (
    <>
      <input
        id="footer__input"
        className="footer__input mobile-yes"
        type="checkbox"
      />
      <label htmlFor="footer__input" className="btn btn--green mobile-yes">
        send message
      </label>
      <div className="footer__form ">
        <h6 className="footer__trips-header">send us a message</h6>
        <p className="u-color-gray u-padding-bottom-small u-font-size-tiny">
          Feel free to drop us a note with any questions
        </p>
        <div className="footer__form-fields">
          <form className="footer__contact-form" name="contact">
            <input
              type="text"
              name="name"
              className="footer__form-input foooter__form-input-name"
              placeholder="Name"
            />

            <input
              type="text"
              name="email"
              className="footer__form-input foooter__form-input-email"
              placeholder="Email"
            />

            <textarea
              type="text"
              name="messsage"
              className="footer__form-input--big"
              placeholder="Message"
            />
            <div className="footer__form-consent-box">
              <input type="checkbox" className="footer__form-radio" />
              <p className="footer__form-consent u-color-gray">
                I agree to terms & service
              </p>
            </div>
            <button className="btn btn--green-footer" type="submit">
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default FooterForm
