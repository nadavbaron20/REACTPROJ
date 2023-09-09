import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { createBusFormFields } from "../../../utils/createBusFormFields";
import FormField from "../../UI/FormField";
import { handleChange } from "../../../functions/handleChange";
import { useMediaQuery } from "react-responsive";
import CustomBtn from "../../UI/CustomBtn";
import { PiArrowFatLinesLeft } from "react-icons/pi";
import { toast } from "react-toastify";
import busService from "../../../services/bus.service";
const EditBus = ({ busItem, handleClose }) => {
  const [formValues, setFormValues] = useState({});
  const addressItems = ["address.country", "address.street", "address.city"];
  useEffect(() => {
    setFormValues(busItem);
  }, [busItem]);
  useEffect(() => {
    console.log(formValues);
  }, [formValues]);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const handleSubmit = (e) => {
    e.preventDefault();
    busService.editBus(busItem?._id, formValues).then((res) => {
      toast(res.data.msg);
      handleClose();
    });
  };
  return (
    <Form
      onSubmit={(e) => handleSubmit(e)}
      className="modal1 w_100 btn1 cursor-off d-flex flex-column "
    >
      <span onClick={() => handleClose()} className="h1 fs_39 btn1">
        X
      </span>
      <h1 className="h2 fs_39  radius1 cursor-off  btn1 ">עריכת עסק</h1>
      <div className="row  justify-content-center gap-2">
        {createBusFormFields?.map((fieldItem, fieldIndex) => {
          const isAddressField = addressItems?.includes(fieldItem?.servSign);
          const fieldName = isAddressField
            ? fieldItem?.servSign.replace("address.", "")
            : fieldItem?.servSign;

          const defaultValue = isAddressField
            ? busItem?.address[fieldName]
            : busItem[fieldName];
          return (
            <FormField
              mainCls={`${
                isMobile
                  ? "w_100 row align-items-center justify-content-center text-center"
                  : "w_30 m-1"
              }`}
              key={fieldIndex}
              inputCls={` text-right`}
              setFormValues={setFormValues}
              param1={fieldItem?.servSign}
              fieldItem={fieldItem}
              formValues={formValues}
              handleChange={handleChange}
              defaultValue={defaultValue}
            />
          );
        })}
      </div>
      <CustomBtn
        cls={`btn1 p-2 radius2 m-2`}
        type={`submit`}
        text={`שמירה`}
        icon={<PiArrowFatLinesLeft size={30} />}
      />
    </Form>
  );
};

export default EditBus;
