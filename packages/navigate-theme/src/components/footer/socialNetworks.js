import React from "react"
import { withPrefix } from "gatsby"
import useThemeFooterQuery from "../../queries/themeFooterQuery"
const SocialNetowrk = () => {
  const footerData = useThemeFooterQuery()

  const theme = process.env.GATSBY_THEME

  const youtubeLink = footerData.social.find(l => l.title === "Facebook").link
  const facebookLink = footerData.social.find(l => l.title === "Youtube").link
  const instagramLink = footerData.social.find(l => l.title === "Instagram")
    .link

  return (
    <div className="u-margin-bottom-medium u-padding-top-huge ">
      <div className="footer__social-networks">
        <div
          className={
            theme === "ms"
              ? "footer__social-networks-box footer__social-networks-box--ms"
              : "footer__social-networks-box"
          }
        >
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <svg className="svg-icon--Facebook">
              <use xlinkHref={withPrefix("sprite.svg#icon-Facebook")} />
            </svg>
          </a>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <svg className="svg-icon--Instagram">
              <use xlinkHref={withPrefix("sprite.svg#icon-Instagram")} />
            </svg>
          </a>
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <svg className="svg-icon--Youtube">
              <use xlinkHref={withPrefix("sprite.svg#icon-Youtube")} />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default SocialNetowrk
