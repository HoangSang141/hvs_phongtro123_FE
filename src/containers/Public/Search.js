import React, { useCallback, useEffect, useState } from "react";
import { SearchItem, Modal } from "../../components";
import icons from "../../ultis/icons";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, createSearchParams, useLocation } from "react-router-dom";
import { path } from "../../ultis/constant";

const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdHouseSiding,
  FiSearch,
} = icons;

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );
  const [queries, setQueries] = useState({});
  const [arrMinMax, setArrMinMax] = useState({});
  const [defaultText, setDefaultText] = useState("");

  useEffect(() => {
    if (!location.pathname.includes(path.SEARCH)) {
      setArrMinMax({});
      setQueries({});
    }
  }, [location]);

  const handelShowModal = (content, name, defaultText) => {
    setContent(content);
    setName(name);
    setDefaultText(defaultText);
    setIsShowModal(true);
  };
  const handleSubmit = useCallback(
    (e, query, arrMaxMin) => {
      e.stopPropagation();
      setQueries((prev) => ({ ...prev, ...query }));
      setIsShowModal(false);
      arrMaxMin && setArrMinMax((prev) => ({ ...prev, ...arrMaxMin }));
    },
    [isShowModal, queries]
  );
  const handleSearch = () => {
    const queryCodes = Object.entries(queries)
      .filter((item) => item[0].includes("Number")||item[0].includes("Code"))
      .filter((item) => item[1]);

    let queryCodesObj = {};
    queryCodes.forEach((item) => {
      queryCodesObj[item[0]] = item[1];
    });
    const queryText = Object.entries(queries).filter(
      (item) => !item[0].includes("Code") || !item[0].includes("Number")
    );
    let queryTextObj = {};
    queryText.forEach((item) => {
      queryTextObj[item[0]] = item[1];
    });
    let titleSearch = `${queryTextObj.category 
      ? queryTextObj.category 
      : "Cho thuê tất cả"} ${queryTextObj.province
        ?`tỉnh ${queryTextObj.province}`
        :''}  ${queryTextObj.price 
          ? `giá ${queryTextObj.price}` 
          : ""} ${queryTextObj.area
            ?`diện tích ${queryTextObj.area}`:''}`;
    navigate({
      pathname: path.SEARCH,
      search: createSearchParams(queryCodesObj).toString(),
      
    },{state:{titleSearch}});
  };
  return (
    <>
      <div className=" p-[10px] w-[70%] my-3 bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2">
        <span
          onClick={() => handelShowModal(categories, "category", "Tìm tất cả")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<MdHouseSiding />}
            fontWeight
            IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
            text={queries.category}
            defaultText={"Tìm tất cả"}
          />
        </span>
        <span
          onClick={() => handelShowModal(provinces, "province", "Toàn quốc")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<HiOutlineLocationMarker />}
            IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
            text={queries.province}
            defaultText={"Toàn quốc"}
          />
        </span>
        <span
          onClick={() => handelShowModal(prices, "price", "Chọn giá")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<TbReportMoney />}
            IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
            text={queries.price}
            defaultText={"Chọn giá"}
          />
        </span>
        <span
          onClick={() => handelShowModal(areas, "area", "Chọn diện tích")}
          className="flex-1 cursor-pointer"
        >
          <SearchItem
            IconBefore={<RiCrop2Line />}
            IconAfter={<BsChevronRight color="rgb(156, 163,175" />}
            text={queries.area}
            defaultText={"Chọn diện tích"}
          />
        </span>
        <button
          type="button"
          onClick={handleSearch}
          className="outline-none py-2 px-4 flex-1 bg-secondary1 text-[12.7px] flex items-center gap-2 text-white font-medium rounded-md"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
      {isShowModal && (
        <Modal
          handleSubmit={handleSubmit}
          queries={queries}
          arrMinMax={arrMinMax}
          content={content}
          name={name}
          setIsShowModal={setIsShowModal}
          defaultText={defaultText}
        />
      )}
    </>
  );
};

export default Search;
