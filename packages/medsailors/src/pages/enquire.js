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
    <Layout2>
      <div className="row">
        <BookForm inPage={true} />
      </div>
    </Layout2>
  )
}

export default Book
