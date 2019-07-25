import React, { useState } from "react"

import usefaqQuery from "../queries/faqQuery"

const SectionVehicles = () => {
  // extracting our custom hook
  const FAQData = usefaqQuery()
  console.log(FAQData)

  // setting our initial state

  const { initialState, setInitial } = useState(FAQData)

  console.log(initialState)

  // creating variables to store category strings
  const categoryA = "ABOUT YOUR TRIP"

  // filter out what we need for CategoryA
  const categoryAData = FAQData.filter(faq => faq.node.category === categoryA)

  // using useState hook to set our inital state
  const renderFAQs = () => {
    return categoryAData.map(element => {
      return element.node.questions.map((questtion, idx) => {
        return (
          <li className="FAQ__list-item" key={idx}>
            <input
              className="FAQ__input"
              id={`FAQ__tab-${idx}`}
              type="checkbox"
              name="tabs"
            />
            <label htmlFor={`FAQ__tab-${idx}`}>
              <span className="FAQ__icon">{idx + 1}</span>
              <h3 className="FAQ__question">{questtion}</h3>
            </label>
            <a className="arrow down" />
            <div className="FAQ__answer-container">
              <p className="FAQ__paragraph">{element.node.answers}</p>
            </div>
          </li>
        )
      })
    })
  }

  return (
    <section className="section-FAQ">
      <div className="FAQ__container">
        <div className="FAQ__buttons">
          <button className="FAQ__button">ABOUT YOUR TRIP</button>
          <button className="FAQ__button">BUDGET & PAYMENT</button>
          <button className="FAQ__button">TRANSPORT</button>
          <button className="FAQ__button">TRAVEL & SAFTEY</button>
        </div>
        <div className="FAQ__accordian">
          <ul className="FAQ__list">{renderFAQs()}</ul>
        </div>
      </div>
    </section>
  )
}

export default SectionVehicles
