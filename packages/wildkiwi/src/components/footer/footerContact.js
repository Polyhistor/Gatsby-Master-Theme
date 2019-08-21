import React, { useState } from "react"

const FooterContact = () => {
  // setting our hook with initial state
  const [state, setState] = useState("newzealand")

  const handleDropdown = e => {
    setState(e.target.value)
  }

  return (
    <div className="footer__contact">
      <h6 className="footer__trips-header">contact us</h6>
      <div className="footer__contact-us">
        <select
          onChange={handleDropdown}
          className="footer__dropdown"
          id="country"
        >
          <option value="newzealand">NEW ZEALAND</option>
          <option value="uk">UNITED KINGDOM</option>
          <option value="australia">AUSTRALIA</option>
        </select>
      </div>
      <h6 className="footer__trips-header footer__trips-link" />
      <ul className="footer__trips-list">
        <li className="footer__trips-item">Opening Hours</li>
        <li className="footer__trips-item">8:30am - 5:30pm (GMT+12)</li>
        <li className="footer__trips-item u-padding-top-sedium">
          {state === "newzealand"
            ? "+64 9 973 5676"
            : state === "australia"
            ? "+61 2 9133 8646"
            : "+44 7 973 5676"}
        </li>
        <li className="footer__trips-item u-padding-top-sedium">
          {state === "newzealand"
            ? "Level 2, 29 Hargreaves Street, St Marys Bay, Auckland 1011, NZ"
            : state === "australia"
            ? ""
            : "22 Bardsley Lane, Greenwich, London SE10 9RF, UK"}
        </li>
        <li className="footer__trips-item u-padding-top-sedium">
          hello@wildkiwi.com
        </li>
      </ul>
    </div>
  )
}

export default FooterContact
