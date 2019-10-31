import React, { useState } from "react"

import useFAQVideoQuery from "../../queries/faqVideoQuery"

// TODO - clean up

const SectionFAQ = ({ FAQData }) => {
  const theme = process.env.GATSBY_THEME

  const color = theme === "ms" ? "u-color-ms-teal" : "u-color-green"

  const FAQButton =
    theme === "ms" ? "FAQ__button FAQ__button--ms" : "FAQ__button"
  const FAQButtonActive =
    theme === "ms"
      ? "FAQ__button--active FAQ__button--active-ms"
      : "FAQ__button--active"

  // getting data out of our FAQ Query
  const FAQVideo = useFAQVideoQuery()

  // function that handles the state change
  const handleClick = idx => {
    // setting the color
    setActiveIndex(idx)

    const categoryData = [FAQData[idx]]
    setCategory(categoryData)
  }

  /* we don't need to duplicate
    
    conditionally rendering FAQ categories
    if (idx === 0) {
      setCategory(categoryData)
    }

    if (idx === 1) {
      setCategory(categoryBData)
    }

    if (idx === 2) {
      setCategory(categoryCData)
    }

    if (idx === 3) {
      setCategory(categoryDData)
    }
  }*/
  /* We don't need to duplicate ??? 
  // filter out what we need for CategoryA
  const categoryAData = FAQData.filter(
    faq => faq.node.category === categories[0].label
  )
  const categoryBData = FAQData.filter(
    faq => faq.node.category === categories[1].label
  )
  const categoryCData = FAQData.filter(
    faq => faq.node.category === categories[2].label
  )
  const categoryDData = FAQData.filter(
    faq => faq.node.category === categories[3].label
  )
 */
  // setting our initial states

  const [initialCategory, setCategory] = useState([FAQData[0]])
  const [activeIndex, setActiveIndex] = useState(0)

  // rendering buttons
  const renderButtons = () => {
    return FAQData.map((faq, idx) => {
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
    })
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
                <span
                  className={
                    theme === "ms" ? "FAQ__icon FAQ__icon--ms" : "FAQ__icon"
                  }
                >
                  {idx + 1}
                </span>
                <h3
                  className={
                    theme === "ms"
                      ? "FAQ__question FAQ__question--ms"
                      : "FAQ__question"
                  }
                >
                  {questtion}
                </h3>
              </label>
              <a
                className={
                  theme === "ms" ? "arrow arrow--ms down" : "arrow down"
                }
              />
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
    /* if (e.target.value === categories[0].label) {
      setCategory(categoryAData)
    }

    if (e.target.value === categories[1].label) {
      setCategory(categoryBData)
    }

    if (e.target.value === categories[2].label) {
      setCategory(categoryCData)
    }

    if (e.target.value === categories[3].label) {
      setCategory(categoryDData)
    }*/
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
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
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
              {FAQData.map(data => {
                return (
                  <option value={data.node.category}>
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
