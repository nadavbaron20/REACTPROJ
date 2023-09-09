import React from "react";

const Validation = ({ validationMsg }) => {
  return (
    <>
      {validationMsg.show && (
        <span className="btn1 cursor-off ls2 m-1 p-3 w_50 radius0">
          {validationMsg.txt}
        </span>
      )}
    </>
  );
};

export default Validation;
