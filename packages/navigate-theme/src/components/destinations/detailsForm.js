import React from "react"
import Img from "gatsby"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import Error from "./error"

// TODO - DRY up this component
const validationSchema = Yup.object().shape({
  guests: Yup.number()
    .min(1, "At least one guest has to be entered")
    .required("Must enter a guest number"),
  firstName: Yup.string()
    .min(1, "First Name must be at least a character")
    .required("First Name must be entered"),
  lastName: Yup.string()
    .min(1, "Last name must be at least a character")
    .required("Last Name must be enetered"),
  email: Yup.string().required("email is required"),
  emailConfirm: Yup.string()
    .oneOf([Yup.ref("email")], "email must match")
    .required("email confirm is required"),
  countryCode: Yup.number()
    .positive("value must be positive")
    .required(),
  mobileNumber: Yup.number()
    .positive("value must be positive")
    .required(),
  age: Yup.number()
    .positive("value must be positive")
    .required(),
  gender: Yup.string().required(),
  comments: Yup.required(),
  consent: Yup.boolean().required(),
})

const DetailsForm = () => {
  return (
    <>
      <h3 class="WhyWild-box-single__title">Enter your details</h3>
      <div className="booking-form__enquiry-form">
        <Formik
          initialValues={{
            guests: "",
            firstName: "",
            lastName: "",
            email: "",
            emailConfirm: "",
            countryCode: "",
            mobileNumber: "",
            gender: "male",
            comments: "",
            consent: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
            actions.setSubmitting(true)
          }}
        >
          {({ errors, touched, handleChange, isSubmitting }) => (
            <Form className="booking-details">
              <Field
                type="number"
                name="guests"
                placeholder="No. Guests"
              ></Field>
              <Error touched={touched.guests} message={errors.guests} />
              <Field
                type="text"
                name="firstName"
                placeholder="First Name *"
              ></Field>
              <Error touched={touched.firstName} message={errors.firstName} />
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name *"
              ></Field>
              <Error touched={touched.lastName} message={errors.lastName} />
              <Field
                type="text"
                name="email"
                placeholder="Email Address *"
              ></Field>
              <Error touched={touched.email} message={errors.email} />
              <Field
                type="text"
                name="emailConfirm"
                placeholder="Confirm Email Address *"
              ></Field>
              <Error
                touched={touched.emailConfirm}
                message={errors.emailConfirm}
              />
              <Field
                type="number"
                name="countryCode"
                placeholder="Country Code *"
              ></Field>
              <Error
                touched={touched.countryCode}
                message={errors.countryCode}
              />
              <Field
                type="number"
                name="mobileNumber"
                placeholder="Mobile or Landline *"
              ></Field>
              <Error
                touched={touched.mobileNumber}
                message={errors.mobileNumber}
              />
              <Field type="number" name="age" placeholder="Age *"></Field>
              <Error touched={touched.age} message={errors.age} />
              <Field component="select" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <Error touched={touched.gender} message={errors.gender} />
              <Field
                type="textarea"
                name="comments"
                placeholder="Comments"
              ></Field>
              <Error touched={touched.comments} message={errors.comments} />
              <label>I accept the terms and conditions</label>
              <Field type="checkbox" name="consent"></Field>
              <Error touched={touched.consent} message={errors.consent} />
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="booking-form__booking-details">{/* <Img></Img> */}</div>
    </>
  )
}

export default DetailsForm
