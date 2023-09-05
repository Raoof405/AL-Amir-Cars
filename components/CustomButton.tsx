import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerstyle,
  handleclick,
  btnType,
  textStyle,
  rightIcone,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerstyle}`}
      onClick={handleclick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcone && (
        <div className="relative w-6 h-6 ">
          <Image
            src={rightIcone}
            fill
            alt="right icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
