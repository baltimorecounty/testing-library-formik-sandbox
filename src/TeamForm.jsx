import * as Yup from "yup";

import Field from "./Field";
import FormikWrapper from "./FormikWrapper";
import React from "react";

const TeamForm = ({
  onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(values);
      setSubmitting(false);
    }, 400);
  }
}) => {
  return (
    <FormikWrapper
      initialValues={{ name: "", location: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Team name is required"),
        location: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Location is required")
      })}
      onSubmit={onSubmit}
    >
      {formik => (
        <React.Fragment>
          <Field name="name" label="Team Name" autoFocus />
          <Field name="location" label="Location" />
        </React.Fragment>
      )}
    </FormikWrapper>
  );
};

export default TeamForm;
