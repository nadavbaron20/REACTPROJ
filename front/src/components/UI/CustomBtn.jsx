import React from "react";

const CustomBtn = ({ text, cls, onPress, type, icon }) => {
  return (
    <div className={` cursor  ${cls}`}>
      <button className="removed-button-style" type={type} onClick={onPress}>
        <span className="m-1">{icon}</span>
        <span className="">{text}</span>
      </button>
    </div>
  );
};

export default CustomBtn;
