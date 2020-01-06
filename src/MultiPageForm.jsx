import PlayerForm from "./PlayerForm";
import React from "react";
import TeamForm from "./TeamForm";
import { withFormik } from "formik";

const forms = [
  {
    id: 1,
    renderForm: props => <TeamForm {...props} />
  },
  {
    id: 2,
    renderForm: props => <PlayerForm {...props} />
  }
];

const MultiPageForm = props => {
  const { activeFormId = 1, ...rest } = props;
  const { renderForm = () => {} } = forms.find(x => x.id === activeFormId);

  return <div>{renderForm(rest)}</div>;
};

export default withFormik({ displayName: "Multi Page Form" })(MultiPageForm);
