import React from "react"

import {
  Layout2,
  SEO,
  GreenBar,
  useImageQuery,
  BookForm,
} from "@nt-websites/navigate-theme"

const Book = () => {
  const imageQuery = useImageQuery()
  return (
    <Layout2
      Insta={{
        photos: [
          { imageOne: imageQuery.instaOneMS.childImageSharp.fluid },
          { imageTwo: imageQuery.instaTwoMS.childImageSharp.fluid },
          { imageThree: imageQuery.instaThreeMS.childImageSharp.fluid },
          { imageFour: imageQuery.instaFourMS.childImageSharp.fluid },
        ],
        URL: "https://www.instagram.com/explore/tags/medsailors/?hl=en",
      }}
    >
      <div className="row">
        <BookForm tourId="croatia-discovery" inPage={true} />
      </div>
    </Layout2>
  )
}

export default Book
