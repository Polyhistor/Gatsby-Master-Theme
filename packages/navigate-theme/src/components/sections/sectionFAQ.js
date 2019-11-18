import React, { useState } from "react"

import useFAQVideoQuery from "../../queries/faqVideoQuery"
import resolveVariationClass from "../../helpers/theme-variation-style"
// TODO - clean up

const SectionFAQ = ({ FAQData }) => {
  const theme = process.env.GATSBY_THEME

  const color = theme === "ms" ? "u-color-ms-teal" : "u-color-green"

  const FAQButton = resolveVariationClass("FAQ__button")

  const FAQButtonActive = resolveVariationClass("FAQ__button--active")

  // getting data out of our FAQ Query
  const FAQVideo = useFAQVideoQuery()

  // function that handles the state change
  const handleClick = idx => {
    // setting the color
    setActiveIndex(idx)

    const categoryData = [FAQData[idx]]
    setCategory(categoryData)
  }

  const [initialCategory, setCategory] = useState([FAQData[0]])
  const [activeIndex, setActiveIndex] = useState(0)

  // rendering buttons
  const renderButtons = () => {
    return FAQData.sort((a, b) => a.node.order - b.node.order).map(
      (faq, idx) => {
        return (
          <button
            key={idx}
            onClick={() => handleClick(idx)}
            className={
              idx === activeIndex
                ? `${FAQButton} ${FAQButtonActive}`
                : `${FAQButton}`
            }
          >
            {faq.node.category}
          </button>
        )
      }
    )
  }

  // using useState hook to set our inital state
  const renderFAQs = (min, max) => {
    return initialCategory.map(element => {
      return element.node.questions.map((questtion, idx) => {
        while (idx >= min && idx < max) {
          return (
            <li className="FAQ__list-item" key={idx}>
              <input
                className="FAQ__input"
                id={`FAQ__tab-${idx}`}
                type="checkbox"
                name="tabs"
              />
              <label htmlFor={`FAQ__tab-${idx}`}>
                <span className={resolveVariationClass("FAQ__icon")}>
                  {idx + 1}
                </span>
                <h3 className={resolveVariationClass("FAQ__question")}>
                  {questtion}
                </h3>
              </label>
              <a className={`${resolveVariationClass("arrow")} down`} />
              <div className="FAQ__answer-container">
                <p className="FAQ__paragraph">{element.node.answers[idx]}</p>
              </div>
            </li>
          )
        }
      })
    })
  }

  // function to handle mobile's dropdown
  const handleDropdown = e => {
    const category = FAQData.filter(faq => faq.node.category === e.target.value)

    setCategory(category)
  }

  // rendering video boxes
  const renderVideoBoxes = () => {
    return FAQVideo.map(e => {
      return (
        <div className="video-box">
          <h3
            className={`includes__title--second heading-alternative ${color} u-padding-bottom-small`}
          >
            {e.node.title}
          </h3>
          <iframe
            src={e.node.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )
    })
  }

  return (
    <section className="section-FAQ">
      <div className="FAQ__container">
        <div className="FAQ__buttons">{renderButtons()}</div>
        <div className="mobile-yes">
          <div className="activity__selector">
            <select
              onChange={handleDropdown}
              className="activity__dropdown"
              id="country"
            >
              {/* .sort((firstEl, secondEl)=> ) */}
              {FAQData.sort((a, b) => a.node.order - b.node.order).map(data => {
                return (
                  <option key={data.node.category} value={data.node.category}>
                    {data.node.category}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="FAQ__accordian">
          <ul className="FAQ__list">{renderFAQs(0, 6)}</ul>
          <ul className="FAQ__list">{renderFAQs(6, 30)}</ul>
        </div>
        <div className="FAQ__video-box">{renderVideoBoxes()}</div>
      </div>
    </section>
  )
}

export default SectionFAQ
