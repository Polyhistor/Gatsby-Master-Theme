import React, { useState } from "react"
import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import { submitContactRequest } from "../../services/api"
import Error from "../destinations/error"

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

let url = "https://api2.ntstage.com/contact"

const FooterForm = () => {
  // object that we use to synthesize later with form fields later
  const partialData = { productId: 8 }

  // setting the state for the success message
  const [{ success, message }, setSuccess] = useState({
    success: false,
    message: null,
  })

  return (
    <>
      <input
        id="footer__input"
        className="footer__input mobile-yes"
        type="checkbox"
      />
      <label htmlFor="footer__input" className="btn btn--green mobile-yes">
        send message
      </label>
      <div className="footer__form ">
        <h6 className="footer__trips-header">send us a message</h6>
        <p className="u-color-gray u-padding-bottom-small u-font-size-tiny">
          Feel free to drop us a note with any questions
        </p>
        <div className="footer__form-fields">
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
              consent: false,
            }}
            validationSchema={validationSchema}
            onSubmit={async values => {
              finalAPI = { ...values, ...partialData }
              console.log(finalAPI)
              try {
                const json = await submitContactRequest(
                  JSON.stringify(finalAPI)
                )

                setSuccess({
                  success: true,
                  message: JSON.stringify(json.data.message),
                })

                console.log("Success", JSON.stringify(json))
              } catch (error) {
                console.log("error", error)
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
              <Form className="footer__contact-form">
                <div>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="footer__form-input foooter__form-input-name"
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
                <div className="booking-details__fields-container">
                  <Field
                    type="textarea"
                    name="message"
                    placeholder="Comments"
                    className="footer__form-input--big"
                  ></Field>
                  <Error touched={touched.comments} message={errors.comments} />
                </div>
                <div className="footer__form-consent-box">
                  <Field
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="footer__form-radio"
                    required
                  ></Field>
                  <label
                    className="footer__form-consent u-color-gray"
                    htmlFor="consent"
                  >
                    I accept the terms and conditions
                  </label>
                </div>
                <button className="btn btn--green-footer" type="submit">
                  submit
                </button>
              </Form>
            )}
          </Formik>
          {success ? (
            <h3 className="u-padding-top-medium filtered-tour__description-price success-message">
              {message}
            </h3>
          ) : null}
        </div>
      </div>
    </>
  )
}

export default FooterForm
