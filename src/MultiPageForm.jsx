import FormikWrapper from "./FormikWrapper";
import PlayerForm from "./PlayerForm";
import React from "react";
import TeamForm from "./TeamForm";

const forms = [
  {
    id: 1,
    component: <TeamForm />
  },
  {
    id: 2,
    component: <PlayerForm />
  }
];

const MultiPageForm = props => {
  const { activeFormId = 1 } = props;
  const { component: ActiveForm = null } = forms.find(
    x => x.id === activeFormId
  );

  return (
    <FormikWrapper
      initialValues={{}}
      onSubmit={console.log}
      validationSchema={{}}
    >
      {formik => <ActiveForm {...formik} />}
    </FormikWrapper>
  );
};

export default MultiPageForm;
