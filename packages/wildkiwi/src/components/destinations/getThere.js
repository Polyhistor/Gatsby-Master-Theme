import React from "react"

//utilities
import useGetThereQuery from "../../queries/getThereQuery"

const getThere = ({
  title,
  paragraph,
  titleLeft,
  leftList,
  titleRight,
  rightList,
}) => {
  // extracting our query out of our custom hook
  const getThereData = useGetThereQuery()

  console.log(getThereData)
  console.log(getThereData[0].node)

  const renderListLeft = () => {
    return getThereData[0].node.international.map((element, idx) => {
      return (
        <li className="get-there__element" key={idx}>
          {element}
        </li>
      )
    })
  }

  const renderListRight = () => {
    return getThereData[0].node.domestic.map((element, idx) => {
      return (
        <li className="get-there__element" key={idx}>
          {element}
        </li>
      )
    })
  }

  return (
    <div className="section-destination__get-there">
      <div className="get-there">
        <h2 className="green-title u-padding-bottom-sedium">{title}</h2>
        <p className="get-there__paragraph">{paragraph}</p>
        <div className="get-there__list">
          <ul className="get-there__list--left">
            <span className="get-there__list-title">{titleLeft}</span>
            {renderListLeft()}
          </ul>
          <ul className="get-there__list--right">
            <span className="get-there__list-title">{titleRight}</span>
            {renderListRight()}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default getThere
