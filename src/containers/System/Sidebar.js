import React from "react";
import Avatar from "../../assets/avatar.webp";
import { useSelector, useDispatch } from "react-redux";
import menuSidebar from "../../ultis/menuSidebar";
import { NavLink } from "react-router-dom";
import * as actions from '../../store/actions'
import {AiOutlineLogout} from 'react-icons/ai'
import { blobToBase64 } from "../../ultis/Common/tobase64";

const activeStyle =
  "hover:bg-gray-200 flex rounded-md items-center py-2 gap-2 font-bold bg-gray-200";
const notActiveStyle =
  "hover:bg-gray-200 flex rounded-md items-center py-2 gap-2 cursor-pointer";

const Sidebar = () => {
  const dispatch=useDispatch()
  const { currentData } = useSelector((state) => state.user);
  // console.log(currentData)

  return (
    <div className="w-[256px] flex-none p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <img
            src={blobToBase64(currentData?.avatar) || Avatar}
            alt="avatar"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="flex flex-col justify-center">
            <span className="font-semibold">{currentData?.name}</span>
            <small>{currentData?.phone}</small>
          </div>
        </div>
        <span>
          Mã thành viên:{" "}
          <small className="font-medium">
            {currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}
          </small>
        </span>
      </div>
      <div>
        {menuSidebar.map((item) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyle : notActiveStyle
              }
              key={item.id}
              to={item?.path}
            >
              {item?.icon}
              {item.text}
            </NavLink>
          );
        })}
        <span onClick={()=> dispatch(actions.logout())} className={notActiveStyle}><AiOutlineLogout/>Thoát</span>
      </div>
    </div>
  );
};

export default Sidebar;
