import React, { memo } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { path } from "../ultis/constant";

const ProvinceBtn = ({ name, image, provinceCode }) => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    const titleSearch = `Cho thuê ${name}, Phòng trọ giá rẻ`;
    navigate(
      {
        pathname: path.SEARCH,
        search: createSearchParams({ provinceCode }).toString(),
      },
      { state: { titleSearch } }
    );
  };

  return (
    <div
      className=" shadow-md rounded-bl-md rounded-br-md text-blue-700 cursor-pointer hover:text-orange-600"
      onClick={handleOnClick}
    >
      <img
        src={image}
        alt={name}
        className="w-[190px] h-[110px] object-cover rounded-tl-md rounded-tr-md"
      />
      <div className="font-medium p-2  text-center">{name}</div>
    </div>
  );
};

export default memo(ProvinceBtn);
