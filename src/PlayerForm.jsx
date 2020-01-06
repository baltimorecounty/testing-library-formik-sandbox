import * as Yup from "yup";

import { Form, Formik } from "formik";

import Field from "./Field";
import PromptIfDirty from "./PromptIfDirty";
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
    <Formik
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
        <Form onSubmit={formik.handleSubmit}>
          <PromptIfDirty />
          <Field name="firstName" label="First Name" autoFocus />
          <Field name="lastName" label="Last Name" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default PlayerForm;
