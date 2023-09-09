import React from "react";
import { Form } from "react-bootstrap";

const FormItem = ({ formItem, handleInputChange }) => {
  return (
    <Form.Group>
      <Form.Label className="opacity-black1 p-3 w_100 fs_15 ls3 fw-bold">
        {formItem?.labelTxt}
      </Form.Label>
      <Form.Control
        onChange={(e) => handleInputChange(e, formItem?.servSign)}
        type={formItem?.inputType}
        required={formItem?.required}
        placeholder={formItem?.placeholder}
      />
    </Form.Group>
  );
};

export default FormItem;
