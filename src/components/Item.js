import React, { memo } from "react";

const images = [
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/07/03/img-5646_1720000850.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/07/03/img-5649_1720000848.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/07/03/img-5645_1720000848.jpg",
  "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/07/03/img-5643_1720000849.jpg",
];

const Item = () => {
  return (
    <div className="w-full flex ">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center">
        <img
          src={images[0]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[1]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[2]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        <img
          src={images[3]}
          alt="preview"
          className="w-[140px] h-[120px] object-cover"
        />
        {/* <div className="flex gap-1">22w
        </div> */}
        {/* <div className="flex gap-1">
        </div> */}
      </div>
      <div className="w-3/5">content</div>
    </div>
  );
};

export default memo(Item);
