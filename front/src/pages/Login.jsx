import React, { useContext, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import userService from "../services/user.service";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { regexCheck } from "../functions/regexCheck";
import Validation from "../components/UI/Validation";
import AuthContext from "../contexts/AuthContext";
import { AppContext } from "../contexts/AppContext";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: ``, password: `` });
  const [validationMsg, setValidationMsg] = useState({ show: false, txt: `` });
  const nav = useNavigate();
  const AuthCtx = useContext(AuthContext);
  const Appctx = useContext(AppContext);
  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = regexCheck(formValues, setValidationMsg, `login`);
    if (isValid) {
      userService.login(formValues).then((res) => {
        if (res.status === 200) {
          toast(res.data.msg);
          AuthCtx.login(res.data.token, res.data.user);
          setTimeout(() => {
            nav("/");
          }, 600);
        } else {
          toast(res.data);
        }
      });
    }
  };

  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      className={`${
        Appctx.darkMode ? "opacity-black10" : "opacity-white10"
      } p-4 w_100 mt-4 radius2`}
    >
      <Validation validationMsg={validationMsg} />
      <FormGroup>
        <Label className=" w_30 opacity-black1 radius2 p-2" for="email">
          Email
        </Label>
        <Input
          onChange={(e) =>
            setFormValues((s) => ({ ...s, email: e.target.value }))
          }
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </FormGroup>
      <FormGroup>
        <Label className=" w_30 opacity-black1 radius2 p-2" for="password">
          Password
        </Label>
        <Input
          onChange={(e) =>
            setFormValues((s) => ({ ...s, password: e.target.value }))
          }
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </FormGroup>
      <Button color="primary">Login</Button>
    </Form>
  );
};

export default Login;
