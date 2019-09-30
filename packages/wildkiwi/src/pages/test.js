import React from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import Error from "./error"

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Must have a character")
    .required("Must enter a name"),
  // email: Yup.string()
  //   .email("Must be a valid email address")
  //   .required("Must enter an email"),
})

const Test = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 5000)
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
          {JSON.stringify(values)}
          <div className="input-row">
            {/* <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className={touched.name && errors.name ? "has-error" : null}
            ></input>
            <Error touched={touched.name} message={errors.name}></Error>
            <input
              type="email"
              name="email"
              id="email"
              place="enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={touched.email && errors.email ? "has-error" : null}
            ></input>
            <Error touched={touched.email} message={errors.email}></Error> */}
            <Field type="name" name="name" placeholder="name"></Field>
            <button type="submit" disabled={isSubmitting}>
              submit
            </button>
          </div>
          {JSON.stringify(errors)}
        </Form>
      )}
    </Formik>
  )
}

export default Test
