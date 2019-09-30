import React, { useEffect, useState } from "react"
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
  phoneCountryCode: Yup.number()
    .positive("value must be positive")
    .required("country code is required"),
  phoneNumber: Yup.number()
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

  // creating our partial object that later will be synthesized with form data
  let partialData = {
    priceId: state.prices[0].id,
    price: state.prices[0].rrp,
    priceWithDiscount: state.prices[0].rrpWithDiscount,
    date: state.startDate,
    currencyCode: state.prices[0].currencyCode,
    sale: state.availability,
    availability: state.availability,
  }

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
            phoneCountryCode: "",
            phoneNumber: "",
            gender: "male",
            comments: "",
            consent: false,
            // recaptcha: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
            actions.setSubmitting(true)
            finalAPI = { ...values, ...partialData }
            const url = "https://api2.ntstage.com/enquiry"
            try {
              const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(finalAPI),
                headers: {
                  "Content-Type": "application/json",
                },
              })
              const json = await response.json()
              console.log("Success", JSON.stringify(json))
            } catch (error) {
              console.log("Error", error)
            }
          }}
        >
          {({ errors, touched, handleChange, isSubmitting, setFieldValue }) => (
            <Form className="booking-form__form-container">
              <div className="booking-details__fields-container">
                <Field
                  type="number"
                  name="guests"
                  placeholder="No. Guests"
                  className="booking-form__fields booking-form__fields--half"
                ></Field>
                <Error touched={touched.guests} message={errors.guests} />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="booking-form__fields"
                ></Field>
                <Error touched={touched.firstName} message={errors.firstName} />
              </div>

              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className="booking-form__fields"
                ></Field>
                <Error touched={touched.lastName} message={errors.lastName} />
              </div>

              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="email"
                  placeholder="Email Address *"
                  className="booking-form__fields"
                ></Field>
                <Error touched={touched.email} message={errors.email} />
              </div>

              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="emailConfirm"
                  placeholder="Confirm Email Address *"
                  className="booking-form__fields"
                ></Field>
                <Error
                  touched={touched.emailConfirm}
                  message={errors.emailConfirm}
                />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="number"
                  name="phoneCountryCode"
                  placeholder="Country Code *"
                  className="booking-form__fields booking-form__fields--half"
                ></Field>
                <Error
                  touched={touched.phoneCountryCode}
                  message={errors.phoneCountryCode}
                />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="number"
                  name="phoneNumber"
                  placeholder="Mobile *"
                  className="booking-form__fields booking-form__fields--half"
                ></Field>
                <Error
                  touched={touched.phoneNumber}
                  message={errors.phoneNumber}
                />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="number"
                  name="age"
                  placeholder="Age *"
                  className="booking-form__fields booking-form__fields--half"
                ></Field>
                <Error touched={touched.age} message={errors.age} />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  component="select"
                  name="gender"
                  className="booking-form__fields booking-form__fields--half"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <Error touched={touched.gender} message={errors.gender} />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="textarea"
                  name="comments"
                  placeholder="Comments"
                  className="booking-form__fields"
                ></Field>
                <Error touched={touched.comments} message={errors.comments} />
              </div>
              <div className="booking-details__fields-container booking-details__fields-container--contest">
                <label htmlFor="consent">
                  I accept the terms and conditions
                </label>
                <Field
                  id="consent"
                  name="consent"
                  type="checkbox"
                  className="booking-form__fields"
                  required
                ></Field>
              </div>
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
        <div className="booking-form__details booking-form__details--title">
          <h2 class="tour-banner__description-title tour-banner__description-title-newzealand">
            {title}
          </h2>
        </div>

        <div className="booking-form__details booking-form__details--days">
          <div className="booking-form__sub-title">
            {state.durationInDays}Days
          </div>
          <div className="booking-form__sub-title">
            {/* {values.guests === undefined ? 0 : values.guests}Days */}
          </div>
        </div>
        <div className="booking-form__details booking-form__details--start">
          <div className="booking-form__sub-title">Start</div>
          <div className="booking-form__info">
            <span> {state.startDateFormated}</span>
            <span> Departs 15:00</span>
            <span> Christchurch, New Zealand</span>
          </div>
        </div>
        <div className="booking-form__details booking-form__details--end">
          <div className="booking-form__sub-title">End</div>
          <div className="booking-form__info">
            <span> {state.endDateFormated}</span>
            <span> Arrive 15:00</span>
            <span> Christchurch, New Zealand</span>
          </div>
        </div>
        <div className="booking-form__details booking-form__details--price">
          <h2 class="tour-banner__description-title tour-banner__description-title-newzealand">
            {state.prices[0].currencySymbol}
            {state.prices[0].rrp}
          </h2>
        </div>
      </div>
    </>
  )
}

export default DetailsForm
