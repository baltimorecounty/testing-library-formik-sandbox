import * as Yup from "yup";

import Field from "./Field";
import FormikWrapper from "./FormikWrapper";
import React from "react";

const PlayerForm = ({
  onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(values);
      setSubmitting(false);
    }, 400);
  }
}) => {
  return (
    <FormikWrapper
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("First name is required"),
        lastName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Last name is required")
      })}
      onSubmit={onSubmit}
    >
      {formik => (
        <React.Fragment>
          <Field name="firstName" label="First Name" autoFocus />
          <Field name="lastName" label="Last Name" />
        </React.Fragment>
      )}
    </FormikWrapper>
  );
};

export default PlayerForm;
