import React, { useState } from "react"
import Modal from "react-responsive-modal"

const Test = () => {
  const [{ open }, setModal] = useState({ open: false })

  return (
    <div>
      <button onClick={() => setModal({ open: true })}>Open Modal</button>
      <Modal
        open={open}
        onClose={() => setModal({ open: false })}
        className={{ overlay: "overlay", modal: "popup" }}
        center
      >
        <div className="popup">
          <iframe
            title="Wild kiwi"
            width="95%"
            height="95%"
            src="https://www.youtube.com/embed/19GIN9tj-NY"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </div>
  )
}

export default Test
