import React from "react"

import Box from "./box"

const BoxContainer = ({ imageOne, imageTwo, imageThree, imageFour }) => {
  return (
    <section className="section-why-us mobile-no">
      <div className="row">
        <h2 className="green-title u-margin-bottom-sedium">Why wild kiwi?</h2>
        <Box
          imageData={imageOne}
          title="new vehicles"
          description="Travel in style with our fleet of luxury vehicles, complete with USB chargers, WIFI and comfortable seats."
        />
        <Box
          imageData={imageTwo}
          title="local guides"
          description="Explore local spots with our guides who are passionate about showing you their backyard."
        />
        <Box
          imageData={imageThree}
          title="small groups"
          description="With a maximum group size of 18, you are bound to bond with your travel family."
        />
        <Box
          imageData={imageFour}
          title="breathtaking scenary"
          description="Natural backdrops include pristine beaches, jagged cliffs, mountain ranges and crystal clear lakes."
        />
      </div>
    </section>
  )
}

export default BoxContainer
