import React from "react"
import { Link } from "gatsby"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import resolveVariationClass from "../../helpers/theme-variation-style"
import useThemeRoutesConfigQuery from "../../queries/themeRoutesConfigQuery"

const ActivityScaffold = ({ title, subtitle, price, svgMap, description }) => {
  // this allows us to render specific node types
  const themeOptionsQueryData = useThemeRoutesConfigQuery()
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="activity__paragraph">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => {
        const URL = node.data.uri
        return (
          <a href={URL} className="activity__hyperlink" target="_blank">
            {children}
          </a>
        )
      },
    },
  }

  return (
    <div className="activity activity--single">
      <h1 className="activity__title">{title}</h1>
      <h3 className="activity__subtitle">{subtitle}</h3>
      <h4 className={resolveVariationClass("activity__price")}>{price}</h4>
      {description !== null && (
        <article className="activity__body">
          {documentToReactComponents(description, options)}
        </article>
      )}
      <img className="activity__svg-map" src={svgMap} alt={title} />
      <div className="activity__button-box">
        <Link
          to={`${themeOptionsQueryData.activitiesRoute}`}
          className={resolveVariationClass("acitivity-box-button")}
        >
          All Activities
        </Link>
      </div>
    </div>
  )
}

export default ActivityScaffold
