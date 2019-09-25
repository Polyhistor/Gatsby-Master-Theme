import React from "react"
import { Formik } from "formik"

const Test = () => {
  return (
    <Formik initialValues={{ name: "", email: "" }}>
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <form>
          {JSON.stringify(values)}
          <div className="input-row">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            ></input>
            <input
              type="email"
              name="email"
              id="email"
              place="enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            ></input>
            <button type="submit">submit</button>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default Test
