import React, { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { registerFormValues } from "../utils/registerFormValues";
import FormItem from "../components/UI/FormItem";
import { regexCheck } from "../functions/regexCheck";
import Validation from "../components/UI/Validation";
import { AppContext } from "../contexts/AppContext";

const Register = () => {
  const [formValues, setFormValues] = useState({});
  const [validationMsg, setValidationMsg] = useState({ show: false, txt: `` });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await regexCheck(formValues, setValidationMsg);
  };
  const AppCtx = useContext(AppContext);

  const handleInputChange = (e, servSign) => {
    let value = e.target.value;
    setFormValues((s) => ({ ...s, [servSign]: value }));
  };
  return (
    <Form
      onSubmit={handleSubmit}
      className={`w_100  ${AppCtx.darkMode ? "" : "bg-white"} `}
    >
      <Validation validationMsg={validationMsg} />
      {registerFormValues?.map((formItem, formIndex) => {
        return (
          <FormItem
            handleInputChange={handleInputChange}
            formItem={formItem}
            key={formIndex}
          />
        );
      })}

      <Button type="submit">Register</Button>
    </Form>
  );
};

export default Register;
