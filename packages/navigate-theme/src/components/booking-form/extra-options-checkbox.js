import React, { useState, useEffect } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"
import { Formik, FieldArray } from "formik"
const ExtraOptionValues = ({ extraOptions, formValues }) => {
  return (
    <>
      {extraOptions && extraOptions.length > 0 && (
        <>
          <label className={`${resolveVariationClass("link")} booking`}>
            Optional Extra
          </label>
          <FieldArray
            name="extraOptions"
            render={arrayHelpers => (
              <div className="booking-details__exception">
                {extraOptions.map((extraOpt, idx) => (
                  <div key={idx} className="booking-details__extras">
                    <input
                      name={`extraOptions.${idx}`}
                      type="checkbox"
                      value={extraOptions}
                      checked={formValues.extraOptions.includes(extraOpt)}
                      onChange={e => {
                        if (e.target.checked) arrayHelpers.push(extraOpt)
                        else {
                          const idx = formValues.extraOptions.indexOf(extraOpt)
                          arrayHelpers.remove(idx)
                        }
                      }}
                    />
                    <label>{extraOpt}</label>
                  </div>
                ))}
              </div>
            )}
          ></FieldArray>
        </>
      )}
    </>
  )
}
export default ExtraOptionValues
