import React, { useState } from "react"
import useContactQuery from "../../queries/contactQuery"

const renderContactNumber = (phoneNumberData, country) => {
  const getContactNumber = phoneNumberData.find(p => p.country === country)

  return getContactNumber.phone
}

const getAddress = (country, phoneNumberData) => {
  const ad = phoneNumberData.find(p => p.country === country)
  return ad.address
}

/**
 * TODO: Should be dynamic not static new zealand on the code.
 */
const FooterContact = () => {
  // setting our hook with initial state

  const contactData = useContactQuery()
  const phoneNumberData = contactData.phoneAddress

  const handleDropdown = e => {
    setState(e.target.value)
  }

  const defaultPhoneNumberCountry = phoneNumberData.find(p => p.selected)
    .country

  const [state, setState] = useState(defaultPhoneNumberCountry)
  return (
    <div className="footer__contact">
      <h6 className="footer__trips-header">contact us</h6>
      <div className="footer__contact-us">
        <select
          onChange={handleDropdown}
          className="footer__dropdown"
          id="country"
        >
          {phoneNumberData.map(p => {
            return (
              <option selected={p.country === state} value={p.country}>
                {p.text}
              </option>
            )
          })}
        </select>
      </div>
      <h6 className="footer__trips-header footer__trips-link" />
      <ul className="footer__trips-list">
        <li className="footer__trips-item">Opening Hours</li>
        <li className="footer__trips-item">8:30am - 5:30pm</li>
        <li className="footer__trips-item u-padding-top-sedium">
          {getAddress(state, phoneNumberData)}
        </li>
        <li className="footer__trips-item u-padding-top-sedium">
          {renderContactNumber(phoneNumberData, state)}
        </li>
        <li className="footer__trips-item u-padding-top-sedium">
          {contactData.email}
        </li>
      </ul>
    </div>
  )
}

export default FooterContact
