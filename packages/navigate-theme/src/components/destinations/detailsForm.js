import React, { useEffect } from "react"
import Image from "gatsby-image"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import Recaptcha from "react-recaptcha"
import useDestinationQuery from "../../queries/destinationQuery"

import Error from "./error"

// TODO - DRY up this component

// Our schema validation logich ere
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
    .required("country code is required"),
  mobileNumber: Yup.number()
    .positive("value must be positive")
    .required("number is required"),
  age: Yup.number()
    .positive("value must be positive")
    .required("age is required"),
  gender: Yup.string().required("gender is required"),
  // recaptcha: Yup.string().required(),
})

const DetailsForm = ({ state, imgSlug, title }) => {
  // running recaptcha necessary files on mount
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  })

  // taking all the data and filtering out what we need
  const destinationsData = useDestinationQuery()
  const filteredData = destinationsData.filter(e => e.node.slug === imgSlug)

  // our final data to be sent to the API
  let finalAPI

  console.log(state)

  console.log(state.prices[0].id)
  console.log(state.prices[0].rrpWithDiscount)
  console.log(state.startDate)
  console.log(state.currencyCode)

  // {
  // id,
  // priceWithDiscount,
  // startDate,
  // currencyCode,

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
            // recaptcha: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
            actions.setSubmitting(true)
            finalAPI = values
            console.log(finalAPI)
          }}
        >
          {({ errors, touched, handleChange, isSubmitting, setFieldValue }) => (
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
              <label htmlFor="consent">I accept the terms and conditions</label>
              <Field
                id="consent"
                name="consent"
                type="checkbox"
                required
              ></Field>
              {/* <Recaptcha
                sitekey="6Le_6boUAAAAAEx3rg9B5Fbck_vMM8y3O7yBXy3K"
                render="explicit"
                theme="dark"
                verifyCallback={response => {
                  setFieldValue("recaptcha", response)
                }}
                onloadCallback={() => {
                  console.log("done loading!")
                }}
              /> */}
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <div className="booking-form__booking-details">
        <Image
          fluid={
            filteredData[0].node.bannerImages[0].localFile.childImageSharp.fluid
          }
          className="booking-form__banner"
        ></Image>
        <h2 class="tour-banner__description-title tour-banner__description-title-newzealand">
          {title}
        </h2>
        <div className="booking-form__details">
          <div className="booking-form__sub-title">
            {state.durationInDays}Days
          </div>
          <div className="booking-form__sub-title">
            {state.durationInDays}Days
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsForm
