import React, { useState, useEffect } from "react"
import resolveVariationClass from "../../helpers/theme-variation-style"
import { useWebSiteConfigQuery } from "../../queries/webSiteConfigQueries"
import useCountryQuery from "../../queries/countryQuery"
import { Formik, FieldArray } from "formik"
const ExtraOptionValues = ({ extraOptions, formValues }) => {
  return (
    <>
      {extraOptions && extraOptions.length > 0 && (
        <FieldArray
          name="extraOptions"
          render={arrayHelpers => (
            <div>
              {extraOptions.map((extraOpt, idx) => (
                <div key={idx}>
                  <label>
                    <input
                      name="extraOptions"
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
                    />{" "}
                    {extraOpt}
                  </label>
                </div>
              ))}
            </div>
          )}
        ></FieldArray>
      )}
    </>
  )
}
export default ExtraOptionValues
