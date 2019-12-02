import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { Error } from "@nt-websites/navigate-theme"
import { submitContactRequest } from "../../services/api"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { TAG_MANAGER_TRACKER } from "../../config/tag-manager"

// Our Schema validation logics here
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "First name must be at least a character")
    .required("Please fill in the name filed"),
  email: Yup.string()
    .email("Please enter a valid email email address")
    .required("Email adress is required"),
  message: Yup.string().required("Please enter in your message"),
})

// final data to be sent to the API
let finalAPI

const SectionGetInTouch = ({ leftContactSection, phoneNumberData }) => {
  const theme = process.env.GATSBY_THEME

  const link = resolveVariationClass("link")

  // object that we use to synthesize later with form fields later
  //const partialData = { productId: 8 }

  // setting the state for the success message
  const [{ success, message }, setSuccess] = useState({
    success: false,
    message: null,
  })

  const defaultPhoneNumberCountry = phoneNumberData.find(p => p.selected)
    .country

  // setting our inital state
  const [state, setState] = useState(defaultPhoneNumberCountry)

  // TODO - should be changed and replaced with contentful richText
  // rendering out left side contents
  const renderLeftContents = () => {
    return leftContactSection.map(data => {
      return (
        <div className="get-in-touch__container">
          <h3 className="get-in-touch__header">{data.header}</h3>
          <pre
            dangerouslySetInnerHTML={{ __html: data.content }}
            className="get-in-touch__paragraph"
          ></pre>
        </div>
      )
    })
  }

  const getAddress = country => {
    const ad = phoneNumberData.find(p => p.country === country)
    return ad.address
  }

  // handling dropdown change
  const handleDropdown = e => {
    setState(e.target.value)
  }

  const renderContactNumber = () => {
    const getContactNumber = phoneNumberData.find(p => p.country === state)

    return (
      <div
        dangerouslySetInnerHTML={{
          __html: `<a href="tel:${getContactNumber.phone}" class="get-in-touch__number ${link}">
      ${getContactNumber.phone}</a>`,
        }}
      />
    )
  }

  //TODO: add contaft us data into contentful
  return (
    <div className="section-get-in-touch">
      <div className="get-in-touch">
        <div className="get-in-touch--left">{renderLeftContents()}</div>
        <div className="get-in-touch--right">
          <div className="activity__selector">
            <select
              onChange={handleDropdown}
              className="activity__dropdown"
              id="country"
              value={state}
            >
              {phoneNumberData.map(p => {
                return <option value={p.country}>{p.text}</option>
              })}
            </select>
          </div>
          {renderContactNumber()}
          <div className="get-in-touch__container">
            <h3 className="get-in-touch__header">Address</h3>
            <pre className="get-in-touch__paragraph">{getAddress(state)}</pre>
          </div>
          {success ? (
            <h3 className="u-padding-top-medium filtered-tour__description-price">
              {message}
            </h3>
          ) : (
            <Formik
              initialValues={{
                name: "",
                email: "",
                message: "",
                consent: false,
              }}
              validationSchema={validationSchema}
              onSubmit={async (values, { resetForm }) => {
                finalAPI = {
                  ...values,
                  ...{
                    productId: process.env.GATSBY_PRODUCT_ID,
                  },
                }
                try {
                  const response = await submitContactRequest(
                    JSON.stringify(finalAPI)
                  )
                  setSuccess({
                    success: true,
                    message: JSON.stringify(response.data.data.message),
                  })
                  resetForm()
                } catch (error) {
                  //TODO: catch error and show in ui
                }
              }}
            >
              {({
                initialValues,
                errors,
                touched,
                handleChange,
                setFieldValue,
                resetForm,
              }) => (
                <Form className="get-in-touch__form">
                  <h3 className="get-in-touch__header">Drop us a note</h3>
                  <div>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className={
                        errors.email
                          ? "booking-form__fields booking-form__fields--error"
                          : "booking-form__fields"
                      }
                    />
                    <Error touched={touched.name} message={errors.name} />
                  </div>
                  <div>
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
                  <div>
                    <Field
                      component="textarea"
                      name="message"
                      placeholder="Comments"
                      className="footer__form-input--big footer__form-input--big-alt"
                    ></Field>
                    <Error
                      touched={touched.comments}
                      message={errors.comments}
                    />
                  </div>
                  <div>
                    <Field
                      id="consent"
                      name="consent"
                      type="checkbox"
                      className={
                        errors.email
                          ? "booking-form__fields booking-form__fields--error"
                          : "booking-form__fields"
                      }
                      required
                    ></Field>
                    <label
                      className="footer__form-consent u-color-gray"
                      htmlFor="consent"
                    >
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
                  <button
                    id={TAG_MANAGER_TRACKER.CONTACT_PAGE_BUTTON}
                    className={`btn ${resolveVariationClass("btn-footer")}`}
                    type="submit"
                  >
                    submit
                  </button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      </div>
    </div>
  )
}

export default SectionGetInTouch
