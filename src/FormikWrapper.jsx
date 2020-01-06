import { Form, Formik } from "formik";

import PromptIfDirty from "./PromptIfDirty";
import React from "react";

const FormikWrapper = ({
  onSubmit,
  validationSchema,
  initialValues,
  children
}) => (
  <Formik
    onSubmit={onSubmit}
    validationSchema={validationSchema}
    initialValues={initialValues}
  >
    {formikBag => (
      <Form>
        <PromptIfDirty />
        {children(formikBag)}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik>
);

export default FormikWrapper;
