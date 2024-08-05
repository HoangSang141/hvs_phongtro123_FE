import React, { memo } from "react";
import Avatar from "../assets/avatar.webp";
import icons from "../ultis/icons";

const { BsDot, BsTelephoneFill, SiZalo } = icons;

const Boxinfo = ({ userData }) => {
  return (
    <div className="w-full bg-yellow-500 rounded-md flex flex-col items-center p-4 gap-4">
      <img
        src={Avatar}
        alt="avatar"
        className="w-16 h-16 object-contain rounded-full"
      />
      <h3 className="font-medium text-xl">{userData?.name}</h3>
      <span className="flex icon ">
        <BsDot color="green" size={32} />
        <span>Đang hoạt động</span>
      </span>
      <a
        className="bg-[#13BB7B] py-2 flex items-center justify-center gap-2 w-full rounded-md text-white font-bold text-lg"
        href="/"
      >
        <BsTelephoneFill />
        {userData?.phone}
      </a>
      <a
        className="bg-white py-2 flex items-center justify-center gap-2 w-full rounded-md  font-bold text-lg"
        href={`https://zalo.me/${userData?.zalo}`}
      >
        <SiZalo size={36} color="blue" />
      </a>
    </div>
  );
};

export default memo(Boxinfo);
