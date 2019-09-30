import React, { useEffect, useState } from "react"
import Image from "gatsby-image"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import useDestinationQuery from "../../queries/destinationQuery"
import { api as ApiService } from "../../services/api"
import Error from "./error"

// TODO - DRY up this component

// Our schema validation logich ere
const validationSchema = Yup.object().shape({
  guests: Yup.number()
    .min(1, "At least one guest has to be entered")
    .required("Please enter the guest number"),
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
})

const DetailsForm = ({ state, imgSlug, title }) => {
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
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
            actions.setSubmitting(true)
            finalAPI = { ...values, ...partialData }
            try {
              const response = await ApiService.enquiry(finalAPI)
              console.log("Success", JSON.stringify(response.data))
            } catch (error) {
              console.log("Error", error)
            }
            /*await fetch(url, {
                method: "POST",
                body: JSON.stringify(finalAPI),
                headers: {
                  "Content-Type": "application/json",
                },
              })
              const json = await response.json()
              console.log("Success", JSON.stringify(json))*/
          }}
        >
          {({ errors, touched, handleChange, isSubmitting, setFieldValue }) => (
            <Form className="booking-form__form-container">
              <div className="booking-details__fields-container">
                <Field
                  type="number"
                  name="guests"
                  placeholder="No. Guests"
                  className={
                    errors.guests
                      ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                      : "booking-form__fields booking-form__fields--half"
                  }
                ></Field>
                <Error touched={touched.guests} message={errors.guests} />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  className="booking-form__fields"
                  className={
                    errors.firstName
                      ? "booking-form__fields booking-form__fields--error"
                      : "booking-form__fields"
                  }
                ></Field>
                <Error touched={touched.firstName} message={errors.firstName} />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  className={
                    errors.lastName
                      ? "booking-form__fields booking-form__fields--error"
                      : "booking-form__fields"
                  }
                ></Field>
                <Error touched={touched.lastName} message={errors.lastName} />
              </div>

              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="email"
                  placeholder="Email Address *"
                  className={
                    errors.email
                      ? "booking-form__fields booking-form__fields--error"
                      : "booking-form__fields"
                  }
                ></Field>
                <Error touched={touched.email} message={errors.email} />
              </div>

              <div className="booking-details__fields-container">
                <Field
                  type="text"
                  name="emailConfirm"
                  placeholder="Confirm Email Address *"
                  className={
                    errors.emailConfirm
                      ? "booking-form__fields booking-form__fields--error"
                      : "booking-form__fields"
                  }
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
                  className={
                    errors.phoneCountryCode
                      ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                      : "booking-form__fields booking-form__fields--half"
                  }
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
                  className={
                    errors.phoneNumber
                      ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                      : "booking-form__fields booking-form__fields--half"
                  }
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
                  className={
                    errors.age
                      ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                      : "booking-form__fields booking-form__fields--half"
                  }
                ></Field>
                <Error touched={touched.age} message={errors.age} />
              </div>
              <div className="booking-details__fields-container">
                <Field
                  component="select"
                  name="gender"
                  className={
                    errors.gender
                      ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                      : "booking-form__fields booking-form__fields--half"
                  }
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
              </div>
              <div className="booking-details__fields-container">
                <Field
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                ></Field>
                <label htmlFor="consent">
                  I accept the terms and conditions
                </label>
              </div>
              <button
                type="submit"
                className="btn btn--white"
                disabled={isSubmitting}
              >
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
            <span> {state.startDateMedium}</span>
            <span> Departs {state.departureTime}</span>
            <span> {`${state.startLocation}, ${state.startCountry}`}</span>
          </div>
        </div>
        <div className="booking-form__details booking-form__details--end">
          <div className="booking-form__sub-title">End</div>
          <div className="booking-form__info">
            <span> {state.startDateMedium}</span>
            <span> Departs {state.returnTime}</span>
            <span> {`${state.endLocation}, ${state.endCountry}`}</span>
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
