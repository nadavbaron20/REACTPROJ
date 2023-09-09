import React from "react";
import CustomBtn from "./CustomBtn";
import { AiFillCheckSquare } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
// סימון -----------------------------
const YesOrNo = ({ handleYes, handleNo, title }) => {
  return (
    <div className="modal1 d-flex flex-column gap-2 btn1 w_100 cursor-off">
      <h2>{title}</h2>
      <h5 className="h5">האם אתה בטוח?</h5>
      <div className="d-flex gap-2">
        <CustomBtn
          icon={<AiFillCheckSquare size={40} />}
          cls={`btn1 `}
          onPress={handleYes}
          text={`כן`}
        />
        <CustomBtn
          icon={<GiCancel size={40} />}
          cls={`btn1 `}
          onPress={handleNo}
          text={`לא`}
        />
      </div>
    </div>
  );
};

export default YesOrNo;
