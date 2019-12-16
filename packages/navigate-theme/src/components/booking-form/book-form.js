import React, { useState, useEffect, useRef } from "react"

import { getTourDatesRequest, submitEnquiryRequest } from "../../services/api"
import { Formik, Field, Form } from "formik"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import BookSuccess from "../booking-form/book-success"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"
import { PHONE_NUMBER_LIST_ORDERED } from "../../config/phone-country-code"
import * as Yup from "yup"

import Error from "./error"
import CountryDestinationDropdown from "./country-tour-dropdown"
import Intro from "../../components/intro"

const validationSchema = Yup.object().shape({
  guests: Yup.number()
    .min(1, "At least one guest has to be entered")
    .required("No. of guests is required"),
  firstName: Yup.string()
    .min(1, "First name must be at least a character")
    .required("First name is required"),
  lastName: Yup.string()
    .min(1, "Last name must be at least a character")
    .required("Last name is required"),
  email: Yup.string()
    .email("please enter a valid email address")
    .required("Email is required"),
  emailConfirm: Yup.string()
    .email("please enter a valida email address")
    .oneOf([Yup.ref("email")], "email must match")
    .required("Email confirm is required"),
  phoneCountryCode: Yup.number()
    .positive("value must be positive")
    .required("Country code is required"),
  phoneNumber: Yup.number()
    .positive("value must be positive")
    .required("Number is required"),
  age: Yup.number()
    .positive("value must be positive")
    .required("Age is required"),
  date: Yup.string().required("Date is required"),
  productClass: Yup.string().required("Yacht Class is required"),
  yachtCabinName: Yup.string().required("Yacht Cabin type is required"),
  gender: Yup.string().required("Gender is required"),
})

const BookForm = ({ countryAndTour, tourId, inPage }) => {
  // TODO - clean all the usestates and replace them with userReducer instead
  const [tourIdState, setTourId] = useState(tourId)
  const [cabinTypes, setCabinTypes] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [productClasses, setProductClasses] = useState([])
  const [response, setApiResponse] = useState([])
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const sectionRef = useRef(null)
  const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop - 80)

  const useYachtClass = useWebSiteConfigQuery().sitePlugin.pluginOptions.config
    .bookingForm.useYachtClass

  if (!useYachtClass) {
    delete validationSchema.fields.productClass
    delete validationSchema.fields.yachtCabinName
  }

  const email = useWebSiteConfigQuery().contentfulWebsiteConfiguration
    .bookingFormEmailContact

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
      if (!useYachtClass) {
        const findDateWithClass = response.dates.find(d => d.date === date)
        const priceId = findDateWithClass.class[0].id
        setFieldValue("priceId", priceId)
      } else {
        setProductClasses(findDate.class)
      }
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
    setLoading(true)
    let apiData = {
      ...values,
    }

    try {
      const response = await submitEnquiryRequest(apiData)
      setSuccess(response.data.data)
      setLoading(false)
      scrollToRef(sectionRef)
    } catch (error) {
      setLoading(false)
      setError(true)
      alert("Sorry, something wrong happened. Please try again or contact us.")
    }
  }

  const getFieldErrorClass = fieldErrors => {
    return fieldErrors
      ? "booking-form__fields booking-form__fields--error"
      : "booking-form__fields"
  }

  // const renderImages = _ =>
  //   bannerImages.map(e => <Img fluid={e.localFile.childImageSharp.fluid}></Img>)

  return (
    <div id="booking" className="section-destination__booking">
      <>
        {!success && (
          <Intro
            title="Secure Your Spot"
            description=" Please let us know your desired destination and travel date
              preference using the below form. We’ll be in touch within 24 hours
              to let you know availability. Any questions please fill in the
              comments form below or just email us at"
            email={email}
          ></Intro>
        )}
        {inPage ? null : (
          <>
            {success ? (
              <div className="booking-form__back-holder"></div>
            ) : (
              <div className="booking-form__back-holder">
                <span className="booking-form__arrow"></span>
                {!tourId && (
                  <a
                    onClick={_ => {
                      window.history.go(-1)
                      window.event.preventDefault()
                    }}
                  >
                    BACK
                  </a>
                )}
              </div>
            )}
          </>
        )}
        <section
          ref={sectionRef}
          className={
            inPage ? "booking-form booking-form--in-page" : "booking-form"
          }
        >
          {success ? (
            <BookSuccess email={email} />
          ) : (
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
                      defaultValues={countryAndTour}
                      setFieldValue={setFieldValue}
                      onDestinationChange={handleDestinationChange}
                    />
                  )}
                  <div className="booking-details__fields-container">
                    <label>First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      className={getFieldErrorClass(errors.firstName)}
                    ></Field>
                    <Error
                      touched={touched.firstName}
                      message={errors.firstName}
                    />
                  </div>

                  <div className="booking-details__fields-container">
                    <label>Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      className={getFieldErrorClass(errors.lastName)}
                    ></Field>
                    <Error
                      touched={touched.lastName}
                      message={errors.lastName}
                    />
                  </div>

                  <div className="booking-details__fields-container">
                    <label>Email</label>
                    <Field
                      type="text"
                      name="email"
                      className={getFieldErrorClass(errors.email)}
                    ></Field>
                    <Error touched={touched.email} message={errors.email} />
                  </div>

                  <div className="booking-details__fields-container">
                    <label>Confirm Email</label>
                    <Field
                      type="text"
                      name="emailConfirm"
                      className={getFieldErrorClass(errors.emailConfirm)}
                    ></Field>
                    <Error
                      touched={touched.emailConfirm}
                      message={errors.emailConfirm}
                    />
                  </div>

                  <div className="booking-details__fields-container">
                    <label>Country Code</label>
                    <Field
                      component="select"
                      name="phoneCountryCode"
                      className={getFieldErrorClass(errors.phoneCountryCode)}
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

                  <div className="booking-details__fields-container">
                    <label>Contact Number:</label>
                    <Field
                      type="number"
                      name="phoneNumber"
                      className={getFieldErrorClass(errors.phoneNumber)}
                    ></Field>
                    <Error
                      touched={touched.phoneNumber}
                      message={errors.phoneNumber}
                    />
                  </div>

                  <div className="booking-details__spanner-three">
                    <div className="booking-details__fields-container booking-details__fields-container--half">
                      <label>Gender</label>
                      <Field
                        component="select"
                        name="gender"
                        className={getFieldErrorClass(errors.gender)}
                      >
                        <option value="">Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </Field>
                      <Error touched={touched.gender} message={errors.gender} />
                    </div>

                    <div className="booking-details__fields-container booking-details__fields-container--half">
                      <label>Age</label>
                      <Field
                        type="number"
                        name="age"
                        className={getFieldErrorClass(errors.age)}
                      ></Field>
                      <Error touched={touched.age} message={errors.age} />
                    </div>

                    <div className="booking-details__fields-container booking-details__fields-container--half">
                      <label>No. of Travelers</label>
                      <Field
                        type="number"
                        name="guests"
                        className={getFieldErrorClass(errors.guests)}
                      ></Field>

                      <Error touched={touched.guests} message={errors.guests} />
                    </div>
                  </div>

                  <div className="booking-details__spanner-two">
                    <div className="booking-details__fields-container">
                      <label>Departure Date</label>
                      <Field
                        component="select"
                        onChange={e =>
                          onDateChanged(e.target.value, setFieldValue)
                        }
                        name="date"
                        //  disabled={!tourIdState}
                        className={getFieldErrorClass(errors.date)}
                      >
                        <option value="">Select departure date</option>

                        {response &&
                          response.dates &&
                          response.dates.map((p, idx) => {
                            return (
                              <option key={idx} value={p.date}>
                                {p.dateFormated}
                              </option>
                            )
                          })}
                      </Field>
                      {!tourIdState || tourIdState === "all" ? (
                        <Error
                          touched={touched.date}
                          message={"Please select the destination first "}
                        />
                      ) : (
                        <Error touched={touched.date} message={errors.date} />
                      )}
                    </div>
                  </div>

                  {useYachtClass && (
                    <>
                      <div className="booking-details__fields-container">
                        <label>Yacht Type</label>
                        <Field
                          component="select"
                          onChange={e =>
                            onProductClassChanged(e.target.value, setFieldValue)
                          }
                          //disabled={!values.date}
                          name="productClass"
                          value={values.priceId}
                          className={getFieldErrorClass(errors.productClass)}
                        >
                          <option value="">Select yacht class</option>

                          {productClasses.map((p, idx) => {
                            return (
                              <option key={idx} value={p.id}>
                                {p.name}
                              </option>
                            )
                          })}
                        </Field>
                        {!values.date || values.date.trim() === "" ? (
                          <Error
                            touched={touched.productClass}
                            message={"Please select the departure date first "}
                          />
                        ) : (
                          <Error
                            touched={touched.productClass}
                            message={errors.productClass}
                          />
                        )}
                      </div>
                    </>
                  )}
                  {useYachtClass && cabinTypes && cabinTypes.length > 0 && (
                    <>
                      <div className="booking-details__fields-container">
                        <label>Cabin Type</label>
                        <Field
                          component="select"
                          onChange={e =>
                            onYachtCabinChanged(e.target.value, setFieldValue)
                          }
                          value={values.yachtCabinId}
                          name="yachtCabinName"
                          className={getFieldErrorClass(errors.yachtCabinName)}
                        >
                          <option value="">Select cabin type class</option>

                          {cabinTypes.map((e, idx) => (
                            <option key={idx} value={e.id}>
                              {getCabinDescription(e)}
                            </option>
                          ))}
                        </Field>

                        {!values.priceId ? (
                          <Error
                            touched={touched.yachtCabinName}
                            message={"Please select the yacht class first"}
                          />
                        ) : (
                          <Error
                            touched={touched.yachtCabinName}
                            message={errors.yachtCabinName}
                          />
                        )}
                      </div>
                    </>
                  )}
                  <div className="booking-details__spanner-one">
                    <div className="booking-details__fields-container">
                      <Field
                        component="textarea"
                        name="comments"
                        placeholder="Comments"
                        className="booking-form__fields booking-form__fields--textarea"
                      ></Field>
                    </div>
                  </div>

                  <div className="booking-details__fields-container booking-details__fields-container--consent">
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

                  {response &&
                  response.booking_notes &&
                  response.general_notes ? (
                    <>
                      <p className="booking-form__additional-info mobile-yes">
                        {response.booking_notes} {response.general_notes}
                      </p>
                    </>
                  ) : null}
                  <div className="booking-details__spanner">
                    <button
                      disabled={isLoading}
                      id={
                        inPage
                          ? TAG_MANAGER_TRACKER.IN_PAGE_SUBMIT_BUTTON
                          : TAG_MANAGER_TRACKER.POPUP_SUBMIT_BUTTON
                      }
                      type="submit"
                      className={resolveVariationClass("btn")}
                    >
                      {isLoading ? `Loading...` : `Submit`}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          )}

          {/* <div className="booking-details__image-container">
            {renderImages()}
          </div> */}
        </section>
      </>
    </div>
  )
}

export default BookForm
