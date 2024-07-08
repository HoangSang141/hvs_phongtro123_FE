import React from "react";
import { SearchItem } from "../../components";
import icons from "../../ultis/icons";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  return (
    <div className=" p-[10px] w-3/5 my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
      <SearchItem
        IconBefore={<MdHouseSiding />}
        fontWeight
        IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
        text="Phòng trọ, nhà trọ"
      />
      <SearchItem
        IconBefore={<HiOutlineLocationMarker />}
        IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
        text="Toàn quốc"
      />
      <SearchItem
        IconBefore={<TbReportMoney />}
        IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
        text="Chọn giá"
      />
      <SearchItem
        IconBefore={<RiCrop2Line />}
        IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
        text="Chọn diện tích"
      />
      <button
        type="button"
        className="outline-none py-2 px-4 w-full bg-secondary1 text-[12.7px] flex items-center gap-2 text-white font-medium rounded-md"
      >
        <FiSearch />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
