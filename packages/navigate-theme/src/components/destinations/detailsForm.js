import React, { useState } from "react"
import Image from "gatsby-image"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"

import "react-phone-input-2/dist/style.css"
import resolveVariationClass from "../../helpers/theme-variation-style"

import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"
import { getPaxAges } from "../../config/pax-age"
import { PHONE_NUMBER_LIST_ORDERED } from "../../config/phone-country-code"
import useDestinationQuery from "../../queries/destinationQuery"
import { submitEnquiryRequest } from "../../services/api"
import Error from "./error"

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
  email: Yup.string()
    .email("please enter a valid email address")
    .required("email is required"),
  emailConfirm: Yup.string()
    .email("please enter a valida email address")
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

const getCabinDescription = cabin => {
  return cabin.price ? `${cabin.name} (${cabin.price})` : cabin.name
}

const DetailsForm = ({
  inPage,
  state,
  imgSlug,
  title,
  priceInex,
  classPrice,
  productClass,
  cabins,
  bookingNotes,
  generalNotes,
}) => {
  const bookingFormDot = resolveVariationClass("booking-form__dot")

  const bookingFormPromo = resolveVariationClass("booking-form__promo")

  const theme = process.env.GATSBY_THEME

  const renderingCabins = () =>
    cabins.filter(c => c.product_class === productClass)

  const cabinsNames = renderingCabins()

  // taking all the data and filtering out what we need
  const destinationsData = useDestinationQuery()
  const filteredData = destinationsData.filter(e => e.node.slug === imgSlug)

  // our final data to be sent to the API
  let finalAPI

  // creating our partial object that later will be synthesized with form data
  let partialData = {
    priceId: state.prices[priceInex].id,
    price: state.prices[priceInex].rrp,
    priceWithDiscount: state.prices[priceInex].rrpWithDiscount,
    date: state.startDate,
    currencyCode: state.prices[priceInex].currencyCode,
    sale: state.availability,
    availability: state.availability,
  }

  const getCabinDetails = name => {
    return cabins.filter(e => {
      return e.name === name && e.product_class === productClass
    })
  }

  // setting the state for succes message
  const [success, setSuccess] = useState(false)

  return (
    <>
      {success === false ? (
        <>
          <h3 className={resolveVariationClass("WhyWild-box-single__title")}>
            Enter your details
          </h3>
          <div className="booking-form__enquiry-form">
            <div className="mobile-yes">
              <div className="booking-form__mobile-info-box">
                <div className="booking-form__left booking-form__left--alt u-margin-top-small">
                  <div className="booking-form__date-container">
                    <span className="booking-form__date">
                      {state.startDateShort}
                    </span>
                    <span className="booking-form__destination">
                      {state.startLocation}
                    </span>
                  </div>
                  <div className="booking-form__mediator">
                    <span
                      className={
                        state.availability === "Sold Out"
                          ? `${bookingFormPromo} booking-form__promo--soldout`
                          : `${bookingFormPromo}`
                      }
                    >
                      {state.sale}
                    </span>
                    <div className="booking-form__line-container">
                      <div
                        className={
                          state.availability === "Sold Out"
                            ? `${bookingFormDot} booking-form__dot--soldout`
                            : `${bookingFormDot}`
                        }
                      ></div>
                      <div
                        className={
                          state.availability === "Sold Out"
                            ? "booking-form__line booking-form__line--soldout"
                            : "booking-form__line"
                        }
                      ></div>
                      <div
                        className={
                          state.availability === "Sold Out"
                            ? "booking-form__dot booking-form__dot--soldout"
                            : "booking-form__dot"
                        }
                      ></div>
                    </div>
                    <span className="booking-form__duration">
                      {state.durationInDays} Days
                    </span>
                  </div>
                  <div className="booking-form__date-container">
                    <span className="booking-form__date booking-form__date--end">
                      {state.endDateShort}
                    </span>
                    <span className="booking-form__destination booking-form__destination--end">
                      {state.endLocation}
                    </span>
                  </div>
                </div>
                <div className="booking-form__right booking-form__right--ms">
                  <div className="booking-form__price-entry booking-form__price-entry--alt">
                    <div className="mobile-yes heading-5 heading-5--capitalized heading-5--ms">
                      {productClass}
                    </div>
                    <div className="booking-form__price booking-form__price-ms">
                      <span className="booking-form__discount">
                        {state.prices[priceInex].currencySymbol}
                        {partialData.priceWithDiscount}&thinsp;
                        {partialData.currencyCode}
                      </span>
                      <span className="booking-form__person">per person</span>
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="booking-form__conditional-text mobile-yes">
                Enter you details
              </h3>
            </div>

            <Formik
              initialValues={{
                guests: "",
                age: "",
                firstName: "",
                lastName: "",
                email: "",
                emailConfirm: "",
                phoneCountryCode: "",
                phoneNumber: "",
                gender: "male",
                comments: "",
                consent: false,
                phone: 0,
                yachtCabinName:
                  cabinsNames && cabinsNames.length > 0
                    ? cabinsNames[0].name
                    : undefined,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, actions) => {
                const cabinDetails = getCabinDetails(values.yachtCabinName)
                const { id, price } = cabinDetails[0]

                finalAPI = {
                  ...values,
                  ...partialData,
                  ...{ yachtCabinId: id },
                  ...{ yachtCabinPrice: price },
                  ...{ productClass: productClass },
                }

                try {
                  const response = await submitEnquiryRequest(finalAPI)

                  setSuccess(response.data.data)
                } catch (error) {
                  // console.log(
                  //   error,
                  //   "someething seems to be wrong with this request"
                  // )
                }
              }}
            >
              {({
                errors,
                touched,
                handleChange,
                values,
                setFieldTouched,
                setFieldValue,
              }) => (
                <Form
                  className={resolveVariationClass(
                    "booking-form__form-container"
                  )}
                >
                  <div className="booking-details__fields-container">
                    <Field
                      component="select"
                      name="guests"
                      className={
                        errors.guests
                          ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                          : "booking-form__fields booking-form__fields--half"
                      }
                    >
                      <option disabled value="">
                        Passengers
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>'<option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">10+</option>
                    </Field>

                    {/*<Field
                      type="number"
                      name="guests"
                      placeholder="No. Guests"
                      className={
                        errors.guests
                          ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                          : "booking-form__fields booking-form__fields--half"
                      }
                    ></Field>*/}
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
                    <Error
                      touched={touched.firstName}
                      message={errors.firstName}
                    />
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
                    <Error
                      touched={touched.lastName}
                      message={errors.lastName}
                    />
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
                      component="select"
                      name="phoneCountryCode"
                      placeholder="Country Code *"
                      className={
                        errors.phoneCountryCode
                          ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                          : "booking-form__fields booking-form__fields--half"
                      }
                    >
                      <option disabled value="">
                        Country Code
                      </option>
                      {PHONE_NUMBER_LIST_ORDERED.map(p => {
                        if (!p.dial_code) {
                          return <option disabled value=""></option>
                        } else {
                          return (
                            <option value={p.dial_code}>
                              {p.name} {p.dial_code}
                            </option>
                          )
                        }
                      })}
                    </Field>
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
                      component="select"
                      name="age"
                      placeholder="Age *"
                      className={
                        errors.age
                          ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                          : "booking-form__fields booking-form__fields--half"
                      }
                    >
                      <option disabled value="">
                        Select your age
                      </option>
                      {getPaxAges().map(p => {
                        return <option value={p}>{p}</option>
                      })}
                    </Field>
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
                  {cabinsNames && cabinsNames.length > 0 ? (
                    <div className="booking-details__fields-container">
                      <Field
                        component="select"
                        name="yachtCabinName"
                        className={
                          errors.yachtCabinName
                            ? "booking-form__fields booking-form__fields booking-form__fields--error"
                            : "booking-form__fields booking-form__fields"
                        }
                      >
                        {cabinsNames.map((e, idx) => (
                          <option key={idx} value={e.name}>
                            {getCabinDescription(e)}
                          </option>
                        ))}
                      </Field>
                      <Error
                        touched={touched.yachtCabinName}
                        message={errors.yachtCabinName}
                      />
                    </div>
                  ) : null}
                  <div className="booking-details__fields-container">
                    <Field
                      component="textarea"
                      name="comments"
                      placeholder="Comments"
                      className="booking-form__fields booking-form__fields--textarea"
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
                      I accept the&thinsp;
                      <a
                        className={resolveVariationClass("link")}
                        href={`${process.env.GATSBY_SITE_URL}/terms-conditions`}
                        target="_blank"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>
                  {bookingNotes && generalNotes ? (
                    <>
                      <p className="booking-form__additional-info mobile-yes">
                        {bookingNotes} {generalNotes}
                      </p>
                    </>
                  ) : null}
                  <button
                    id={
                      inPage
                        ? TAG_MANAGER_TRACKER.IN_PAGE_SUBMIT_BUTTON
                        : TAG_MANAGER_TRACKER.POPUP_SUBMIT_BUTTON
                    }
                    type="submit"
                    className={`btn ${resolveVariationClass("btn")}`}
                  >
                    Submit
                  </button>
                </Form>
              )}
            </Formik>
          </div>
          <div
            className={resolveVariationClass("booking-form__booking-details")}
          >
            <Image
              fluid={
                filteredData[0].node.bannerImages[0].localFile.childImageSharp
                  .fluid
              }
              className="booking-form__banner"
            ></Image>
            <div className="booking-form__details booking-form__details--title">
              <h2
                className={resolveVariationClass(
                  "tour-banner__description-title"
                )}
              >
                {title}
              </h2>
              {classPrice ? (
                <h4 className="booking-form__sub-title">
                  {state.prices[priceInex].productClass}, {state.durationInDays}{" "}
                  Days
                </h4>
              ) : null}
            </div>
            <div className="booking-form__details booking-form__details--days">
              {/* <div className="booking-form__sub-title">
                {state.durationInDays} Days
              </div> */}
              <div className="booking-form__sub-title">
                {/* TODO - TO add the real value */}
                {/* {values.guests === undefined ? 0 : values.guests}Days */}
              </div>
            </div>
            <div className="booking-form__details booking-form__details--start">
              <div className="booking-form__sub-title">Start</div>
              <div className="booking-form__info">
                <span> {state.startDateMedium}</span>
                <span> Time: {state.departureTime}</span>
                <span> {`${state.startLocation}, ${state.startCountry}`}</span>
              </div>
            </div>
            <div className="booking-form__details booking-form__details--end">
              <div className="booking-form__sub-title">End</div>
              <div className="booking-form__info">
                <span> {state.endDateMedium}</span>
                <span> Time: {state.returnTime}</span>
                <span> {`${state.endLocation}, ${state.endCountry}`}</span>
              </div>
            </div>
            <div className="booking-form__details booking-form__details--price">
              <h2
                className={resolveVariationClass(
                  "tour-banner__description-title"
                )}
              >
                {state.prices[priceInex].currencySymbol}
                {state.prices[priceInex].rrpWithDiscount} &thinsp;
                {state.prices[priceInex].currencyCode} &thinsp;
                <span className="u-font-none-style">per person</span>
              </h2>
            </div>
            <div className="booking-form__details booking-form__details--extra">
              <p className="booking-form__additional-info">
                {bookingNotes} {generalNotes}
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="booking-form__thank-you">
          <h2 className="green-title">Thanks for your booking enquiry.</h2>
          <p className="feature-box__description">
            A member of our team will get back to you with your booking details
            within 24 hours.
          </p>
          <p className="feature-box__description">
            We are sending a welcome message to your email address now. If you
            do not receive it, please contact us at{" "}
            <a href={success.email}>{success.email}</a>
          </p>
        </div>
      )}
    </>
  )
}

export default DetailsForm
