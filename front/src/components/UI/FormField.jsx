import React from "react";

const FormField = ({
  fieldItem,
  formValues,
  handleChange,
  defaultValue,
  param1,
  setFormValues,
  mainCls,
}) => {
  return (
    <div dir="rtl" className={`${mainCls} btn1 cursor-off m-1 `}>
      <label className="w_20">{fieldItem?.labelTxt}</label>
      <input
        className="w_60 radius1 border-off p-2"
        type={fieldItem?.inputType}
        required={fieldItem?.required}
        defaultValue={defaultValue}
        onChange={(e) => handleChange(e, param1, formValues, setFormValues)}
      />
    </div>
  );
};

export default FormField;
