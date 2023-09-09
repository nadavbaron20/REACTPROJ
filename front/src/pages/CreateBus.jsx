import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { createBusFormFields } from "../utils/createBusFormFields";
import FormField from "../components/UI/FormField";
import { HiPlusCircle } from "react-icons/hi";
import busService from "../services/bus.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../functions/handleChange";
const CreateBus = () => {
  const [formValues, setFormValues] = useState({
    imgUrl: "",
    name: "",
    website: "",
    phone: "",
    address: {
      country: "",
      city: "",
      street: "",
    },
  });
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    busService.createBus(formValues).then((res) => {
      toast(res.data.msg);
      if (res.status === 200) {
        nav("/");
        setTimeout(() => {
          window.location.reload();
        }, 300);
      }
    });
  };

  return (
    <div className="w_100 btn1 cursor-off">
      <h1>יצירת עסק חדש</h1>
      <Form className="row" onSubmit={handleSubmit}>
        {createBusFormFields?.map((fieldItem, fieldIndex) => {
          return (
            <FormField
              setFormValues={setFormValues}
              placeholder={formValues[fieldItem?.servSign]}
              defaultValue={formValues[fieldItem?.servSign]}
              handleChange={handleChange}
              formValues={formValues}
              param1={fieldItem?.servSign}
              fieldItem={fieldItem}
              key={fieldIndex}
            />
          );
        })}

        <button className="btn1" type="submit">
          <HiPlusCircle size={25} /> Create Business
        </button>
      </Form>
    </div>
  );
};

export default CreateBus;
