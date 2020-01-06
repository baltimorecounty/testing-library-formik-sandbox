import { ErrorMessage, Field } from "formik";

import React from "react";

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const { id, autoFocus, label, ...rest } = props;
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
      <input
        autoFocus={autoFocus}
        type="text"
        id={field.name}
        {...field}
        {...rest}
      />
      <ErrorMessage name={field.name} />
    </div>
  );
};

const CustomField = props => (
  <Field component={CustomInputComponent} {...props} />
);

export default CustomField;
