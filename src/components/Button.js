import React, { memo } from "react";

const Button = ({
  text,
  textColor,
  bgColor,
  IcAfter,
  onClick,
  fullwidth,
  px,
  IcBefore
}) => {
  return (
    <button
      type="button"
      className={`py-2 ${px ? px : "px-2"} ${textColor} ${bgColor} ${
        fullwidth && "w-full"
      } outline-none  rounded-md hover:underline flex items-center justify-center gap-1`}
      onClick={onClick}
    >
      {IcBefore && <span> <IcAfter /></span>}
      <span className="text-center">{text}</span>
      {IcAfter && <span> <IcAfter /></span>}
      </button>
  );
};

export default memo(Button);
