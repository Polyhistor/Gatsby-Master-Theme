import React, { useState, useEffect } from "react"
import { getTourDatesRequest, submitEnquiryRequest } from "../../services/api"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import Error from "./error"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"
import { getPaxAges } from "../../config/pax-age"
import { PHONE_NUMBER_LIST_ORDERED } from "../../config/phone-country-code"
import CountryDestinationDropdown from "./country-tour-dropdown"
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
  date: Yup.string().required("Date is required"),
  productClass: Yup.string().required("Yacht Class is required"),
  yachtCabinName: Yup.string().required("Yacht Cabin type is required"),
  gender: Yup.string().required("gender is required"),
})

const BookForm = ({ tourId, inPage }) => {
  const theme = process.env.GATSBY_THEME
  const [tourIdState, setTourId] = useState(tourId)
  const [cabinTypes, setCabinTypes] = useState([])
  const [productClasses, setProductClasses] = useState([])
  const [response, setApiResponse] = useState([])
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleDestinationChange = (destinationSlug, setFieldValue) => {
    if (destinationSlug === "all") {
      cleanForm(setFieldValue)
    }
    setTourId(destinationSlug)
  }

  const cleanSelectedDate = setFieldValue => {
    setFieldValue("date", "")
    setApiResponse([])
  }

  const cleanForm = setFieldValue => {
    cleanSelectedDate(setFieldValue)
    cleanProductClass(setFieldValue)
    cleanCabinTypes(setFieldValue)
  }

  const cleanProductClass = setFieldValue => {
    setFieldValue("productClass", "")
    setFieldValue("priceId", "")
    setProductClasses([])
  }

  const cleanCabinTypes = setFieldValue => {
    setFieldValue("yachtCabinName", "")
    setFieldValue("yachtCabinId", "")
    setFieldValue("yachtCabinPrice", "")
    setCabinTypes([])
  }

  const onDateChanged = (date, setFieldValue) => {
    cleanProductClass(setFieldValue)
    cleanCabinTypes(setFieldValue)
    setFieldValue("date", date)
    const findDate = response.dates.find(d => d.date === date)

    if (!findDate) {
      if (date !== "") {
        console.warn("Invalid date")
      }
    } else {
      setProductClasses(findDate.class)
    }
  }

  const onYachtCabinChanged = (yachtCabinId, setFieldValue) => {
    if (!(yachtCabinId === "")) {
      const yachtCabin = cabinTypes.find(c => c.id == yachtCabinId)

      setFieldValue("yachtCabinId", yachtCabin.id)
      setFieldValue("yachtCabinName", yachtCabin.name)
      setFieldValue("yachtCabinPrice", yachtCabin.price)
    } else {
      setFieldValue("yachtCabinId", "")
      setFieldValue("yachtCabinName", "")
      setFieldValue("yachtCabinPrice", "")
    }
  }

  const onProductClassChanged = (productClassId, setFieldValue) => {
    cleanCabinTypes(setFieldValue)

    if (!(productClassId === "")) {
      const findDateWithClass = response.dates.find(d => {
        const productClass = d.class.find(c => c.id === productClassId)
        return productClass !== undefined
      })

      const productClass = findDateWithClass.class.find(
        c => c.id === productClassId
      )

      const cabinTypes = response.cabins.filter(
        c => c.product_class === productClass.name
      )
      setFieldValue("productClass", productClass.name)
      setFieldValue("priceId", productClass.id)
      setCabinTypes(cabinTypes)
    } else {
      setFieldValue("productClass", "")
      setFieldValue("priceId", "")
    }
  }

  const getCabinDescription = cabin => {
    return cabin.price ? `${cabin.name} (${cabin.price})` : cabin.name
  }

  const fetchDates = async () => {
    let result = []

    if (tourIdState !== "all") {
      const response = await getTourDatesRequest(tourIdState)
      result = response.data.data
    }

    setApiResponse(result)
  }

  useEffect(() => {
    if (tourIdState) {
      fetchDates()
    }
  }, [tourIdState])

  const submitForm = async (values, actions) => {
    let apiData = {
      ...values,
    }

    try {
      const response = await submitEnquiryRequest(apiData)
      setSuccess(response.data.data)
    } catch (error) {
      setError(true)
      alert("Sorry, something wrong happened. Please try again or contact us.")
    }
  }

  const renderThankMessage = email => {
    return (
      <div className="booking-form__thank-you">
        <h2 className="green-title">Thanks for your booking enquiry.</h2>
        <p className="feature-box__description">
          A member of our team will get back to you with your booking details
          within 24 hours.
        </p>
        <p className="feature-box__description">
          We are sending a welcome message to your email address now. If you do
          not receive it, please contact us at <a href={email}>{email}</a>
        </p>
      </div>
    )
  }

  return (
    <div id="booking" className="section-destination__booking">
      <h2
        className={`${resolveVariationClass(
          "heading-1"
        )} u-padding-bottom-small`}
      >
        Secure Your Spot
      </h2>

      <p>
        Please let us know your desired destination and travel date preference
        using the below form. We’ll be in touch within 24 hours to let you know
        availability. Any questions please fill in the comments form below or
        just email us at EMAIL EMAIL EMAIL HERE
      </p>

      <section
        className={
          inPage ? "booking-form booking-form--in-page" : "booking-form"
        }
      >
        <button onClick={_ => window.history.go(-1)}>
          {success === false ? "BACK" : "CLOSE"}
        </button>

        {success === false ? (
          <Formik
            initialValues={{
              siteLocation: inPage ? "PAGE" : "POPUP BUTTON",
              priceId: "",
              date: "",
              guests: "",
              productClass: "",
              age: "",
              firstName: "",
              lastName: "",
              email: "",
              emailConfirm: "",
              phoneCountryCode: "",
              phoneNumber: "",
              gender: "",
              comments: "",
              consent: false,
              yachtCabinName: "",
              yachtCabinPrice: "",
              yachtCabinId: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              await submitForm(values, actions)
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
              <Form>
                {!tourId && (
                  <CountryDestinationDropdown
                    setFieldValue={setFieldValue}
                    onDestinationChange={handleDestinationChange}
                  />
                )}
                <br />
                <label>First Name*</label>
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
                <label>Last Name*</label>
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
                <label>Email*</label>
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
                <label>Confirm Email*</label>
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
                <label>Country Code*</label>
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
                    <option value="">Select Country Code</option>
                    {PHONE_NUMBER_LIST_ORDERED.map((p, idx) => {
                      if (!p.dial_code) {
                        return <option key={idx} disabled value=""></option>
                      } else {
                        return (
                          <option key={idx} value={p.dial_code}>
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
                <label>Contact Number:</label>
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
                <label>Gender*</label>
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
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                  <Error touched={touched.gender} message={errors.gender} />
                </div>
                <label>Age*</label>
                <div className="booking-details__fields-container">
                  <Field
                    type="number"
                    name="age"
                    placeholder="Age "
                    className={
                      errors.age
                        ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                        : "booking-form__fields booking-form__fields--half"
                    }
                  ></Field>
                  <Error touched={touched.age} message={errors.age} />
                </div>
                <label>No. of Travelers*</label>
                <div className="booking-details__fields-container">
                  <Field
                    type="number"
                    name="guests"
                    placeholder="No. of Travelers"
                    className={
                      errors.guests
                        ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                        : "booking-form__fields booking-form__fields--half"
                    }
                  ></Field>

                  <Error touched={touched.guests} message={errors.guests} />
                </div>
                <label>Departure Date*</label>
                <div className="booking-details__fields-container">
                  <select
                    onChange={e => onDateChanged(e.target.value, setFieldValue)}
                    name="date"
                    //  disabled={!tourIdState}
                    className={
                      errors.date
                        ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                        : "booking-form__fields booking-form__fields--half"
                    }
                  >
                    <option value="">
                      {!tourIdState || tourIdState === "all"
                        ? `Please select your destination first`
                        : `Select departure date`}
                    </option>

                    {response &&
                      response.dates &&
                      response.dates.map((p, idx) => {
                        return (
                          <option key={idx} value={p.date}>
                            {p.dateFormated}
                          </option>
                        )
                      })}
                  </select>

                  <Error touched={touched.date} message={errors.date} />
                </div>
                {productClasses && (
                  <>
                    <label>Yacht Type*</label>
                    <div className="booking-details__fields-container">
                      <select
                        onChange={e =>
                          onProductClassChanged(e.target.value, setFieldValue)
                        }
                        //disabled={!values.date}
                        name="productClass"
                        value={values.priceId}
                        className={
                          errors.productClass
                            ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                            : "booking-form__fields booking-form__fields--half"
                        }
                      >
                        <option value="">
                          {!values.date
                            ? `Please select the departure date first`
                            : `Select yacht class `}
                        </option>

                        {productClasses.map((p, idx) => {
                          return (
                            <option key={idx} value={p.id}>
                              {p.name}
                            </option>
                          )
                        })}
                      </select>
                      <Error
                        touched={touched.productClass}
                        message={errors.productClass}
                      />
                    </div>
                  </>
                )}
                {cabinTypes && cabinTypes.length > 0 && (
                  <>
                    <label>Cabin Type*</label>
                    <div className="booking-details__fields-container">
                      <select
                        onChange={e =>
                          onYachtCabinChanged(e.target.value, setFieldValue)
                        }
                        //    disabled={!values.productClass}
                        value={values.yachtCabinId}
                        name="yachtCabinName"
                        className={
                          errors.yachtCabinName
                            ? "booking-form__fields booking-form__fields--half booking-form__fields--error"
                            : "booking-form__fields booking-form__fields--half"
                        }
                      >
                        <option value="">
                          {!values.priceId
                            ? `Please select the yacht class first`
                            : `Select cabin type class `}
                        </option>

                        {cabinTypes.map((e, idx) => (
                          <option key={idx} value={e.id}>
                            {getCabinDescription(e)}
                          </option>
                        ))}
                      </select>

                      <Error
                        touched={touched.yachtCabinName}
                        message={errors.yachtCabinName}
                      />
                    </div>
                  </>
                )}

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
                {theme === "ms" && response ? (
                  <>
                    <p className="booking-form__additional-info mobile-yes">
                      {response.booking_notes} {response.general_notes}
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
                  className={
                    theme === "ms" ? "btn btn--ms-teal" : "btn btn--green"
                  }
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          renderThankMessage(success.email)
        )}
      </section>
    </div>
  )
}

export default BookForm
