import React, { useState } from "react"

import GetInTouchData from "../getInTouchData"

const SectionGetInTouch = () => {
  const addressData = [
    "Address",
    "Level 2, 29 Hargreaves\nStreet,\nSt Marys Bay,\nNew Zealand",
    "Level 4, Hight Screet\nStree,\nSt Marys Bay,\nLondon",
  ]

  console.log(addressData)

  // setting our inital state
  const [state, setState] = useState("newzealand")

  // rendering out left side contents
  const renderLeftContents = () => {
    return GetInTouchData.map((block, idx) => {
      return (
        <div key={idx} className="get-in-touch__container">
          <h3 className="get-in-touch__header">{block.header} </h3>
          <pre className="get-in-touch__paragraph">{block.content}</pre>
        </div>
      )
    })
  }

  // handling dropdown change
  const handleDropdown = e => {
    setState(e.target.value)
  }

  return (
    <div className="section-get-in-touch">
      <div className="get-in-touch">
        <div className="get-in-touch--left">{renderLeftContents()}</div>
        <div className="get-in-touch--right">
          <div className="activity__selector">
            <select
              onChange={handleDropdown}
              className="activity__dropdown"
              id="country"
            >
              <option value="newzealand">NEW ZEALAND</option>
              <option value="uk">THE UK</option>
            </select>
          </div>
          <p className="get-in-touch__number">
            {state === "newzealand" ? "+64 9 973 5676" : "+44 9 973 5676"}
          </p>
          <div className="get-in-touch__container">
            <h3 className="get-in-touch__header">{addressData[0]}</h3>
            <pre className="get-in-touch__paragraph">
              {state === "newzealand" ? addressData[1] : addressData[2]}
            </pre>
          </div>
          <form className="get-in-touch__form">
            <h3 className="get-in-touch__header">Drop us a note</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="message" placeholder="Message" />
            <input type="checkbox" />
            <label>I agree to be contacted for marketing etc...</label>
            <button type="submit">LEAVE US A MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SectionGetInTouch
