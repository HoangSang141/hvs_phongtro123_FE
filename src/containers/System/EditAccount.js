import React, { useState } from "react";
import { InputReadOnly, InputFormV2, Button } from "../../components";
import Avatar from "../../assets/avatar.webp";
import { useSelector, useDispatch } from "react-redux";
import { apiUpdateUser } from "../../services";
import { fileToBase64, blobToBase64 } from "../../ultis/Common/tobase64";
import { getCurrent } from "../../store/actions";
import Swal from "sweetalert2";

const EditAccount = () => {
  const { currentData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [payload, setPayload] = useState({
    name: currentData?.name || "",
    avatar: blobToBase64(currentData?.avatar) || "",
    fbUrl: currentData?.fbUrl || "",
    zalo: currentData?.zalo || "",
  });
  const handleSubmit = async () => {
    const response = await apiUpdateUser(payload);
    if (response?.data.err === 0) {
      Swal.fire(
        "Done",
        "Chỉnh sửa thông tin cá nhân thành công",
        "success"
      ).then(() => {
        dispatch(getCurrent());
      });
    } else {
      Swal.fire(
        "Oops!",
        "Chỉnh sửa thông tin cá nhân không thành công",
        "error"
      );
    }
  };
  const handleUploadFile = async (e) => {
    const imageBase64 = await fileToBase64(e.target.files[0]);
    setPayload((prev) => ({
      ...prev,
      avatar: imageBase64,
    }));
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl w-full h-[69px] flex-none text-start font-medium py-4 border-b border-gray-200">
        Chỉnh sửa thông tin cá nhân
      </h1>
      <div className="w-3/5 flex items-center justify-center">
        <div className="w-full py-6 flex flex-col gap-4">
          <InputReadOnly
            value={
              `#${currentData?.id?.match(/\d/g).join("")?.slice(0, 6)}` || ""
            }
            direction="flex-row"
            label="Mã thành viên"
          />
          <InputReadOnly
            value={currentData?.phone || ""}
            editPhone
            direction="flex-row"
            label="Số điện thoại"
          />

          <InputFormV2
            name="name"
            setValue={setPayload}
            direction="flex-row"
            value={payload.name}
            label="Tên hiển thị"
          />

          <InputFormV2
            name="zalo"
            setValue={setPayload}
            direction="flex-row"
            value={payload.zalo}
            label="Zalo"
          />
          <InputFormV2
            name="fbUrl"
            setValue={setPayload}
            direction="flex-row"
            value={payload.fbUrl}
            label="Facebook"
          />
          <div className="flex">
            <label className="w-48 flex-none" htmlFor="password">
              Mật khẩu
            </label>
            <small className="flex-auto h-12 text-blue-500 cursor-pointer">
              Đổi mật khẩu
            </small>
          </div>
          <div className="flex mb-6">
            <label className="w-48 flex-none" htmlFor="avatar">
              Ảnh đại diện
            </label>
            <div>
              <img
                src={payload.avatar || Avatar}
                alt="avatar"
                className="w-28 h-28 rounded-full object-cover"
              />

              <input
                onChange={handleUploadFile}
                type="file"
                className="appearance-none my-4"
                id="avatar"
              />
            </div>
          </div>
          <Button
            text="Cập nhật"
            bgColor="bg-blue-600"
            textColor="text-white"
            onClick={handleSubmit}
          />
          <div className="h-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default EditAccount;
