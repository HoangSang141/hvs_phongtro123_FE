import React from "react";
import { useSelector } from "react-redux";
import Avatar from "../assets/avatar.webp";
import { blobToBase64 } from "../ultis/Common/tobase64";

const User = () => {
  const { currentData } = useSelector((state) => state.user);
  return (
    <div className="flex items-center gap-2">
      <img
        src={blobToBase64(currentData?.avatar)|| Avatar}
        alt="avatar"
        className="w-10 object-cover rounded-full h-10 shadow-md"
      />
      <div className="flex flex-col">
        <span>
          Xin chào, <span className="font-semibold">{currentData?.name}</span>
        </span>
        <span>
          Mã tài khoản:{" "}
          <span className="font-medium">{`${currentData?.id?.slice(
            0,
            10
          )}...`}</span>
        </span>
      </div>
    </div>
  );
};

export default User;
