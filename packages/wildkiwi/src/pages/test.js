import React from "react"
import { FacebookProvider, Comments } from "react-facebook"

import useImageQuery from "../queries/imageQuery"
import Box from "../components/boxes/box"

const Test = () => {
  const imageQuery = useImageQuery()
  return (
    <div>
      <p>we are testing here mate</p>
      <Box
        imageData={imageQuery}
        textFirst="local"
        textSecond="guides"
        description="Alitis dolorepra verum excepe vendiciantur re voluptatur? Laboratquo"
      />

      <FacebookProvider appId="457654345055752">
        <Comments href="http://www.facebook.com" />
      </FacebookProvider>
    </div>
  )
}

export default Test
