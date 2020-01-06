import * as Yup from "yup";

import { Form, Formik } from "formik";

import Field from "./Field";
import PromptIfDirty from "./PromptIfDirty";
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
    <Formik
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
        <Form onSubmit={formik.handleSubmit}>
          <PromptIfDirty />
          <Field name="name" label="Team Name" autoFocus />
          <Field name="location" label="Location" />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default TeamForm;
