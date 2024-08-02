import React, { useState } from "react";
import { InputForm, Button } from "../../components";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Contact = () => {
  const [payload, setPayload] = useState({
    name: "",
    phone: "",
    content: "",
  });

  const handleSubmit=()=>{
    Swal.fire(`Thanks ${payload.name ? payload.name : ''}`, 'Phản hồi của bạn đã được chúng tôi ghi nhận', 'success').then(()=>{
        setPayload({
            name:'',
            phone:'',
            content:''
        })
    })
  }
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Liên hệ với chúng tôi</h1>
      <div className="flex gap-4">
        <div className="flex-1 h-fit flex flex-col gap-4 bg-red-400 rounded-3xl p-4 text-white bg-gradient-to-br from-blue-700 to-cyan-400">
          <h4 className="font-medium"></h4>
          <span> Chúng tôi biết bạn có rất nhiều lựa chọn PhongTro123.com</span>
          <span>Điện thoại: 0917686101</span>
          <span>Email: cskh.phongtro123@gmail.com</span>
          <span>Zalo: 0917686101</span>
          <span>Viber: 0917686101</span>
          <span>
            Địa chỉ: LE-4.07, Toà nhà Lexington Residence, Số 67 Mai Chí Thọ,
            Phường An Phú, Quận 2, Tp. Hồ Chí Minh
          </span>
        </div>
        <div className="flex-1 bg-white shadow-md rounded-md p-4 mb-6">
          <h4 className="font-medium text-lg mb-4">Liên hệ trực tuyến</h4>
          <div className="flex flex-col gap-6">
            <InputForm
              label="HỌ VÀ TÊN CỦA BẠN"
              value={payload.name}
              setValue={setPayload}
              keyPayload="name"
            />
            <InputForm
              label="SỐ ĐIỆN THOẠI"
              value={payload.phone}
              setValue={setPayload}
              keyPayload="phone"
            />

            <div>
              <label htmlFor="desc">NỘI DUNG MÔ TẢ</label>
              <textarea
                className="outline-none bg-[#e8f0fe] p-2 rounded-md w-full"
                value={payload.content}
                onChange={e=>setPayload(prev=>({...prev, content: e.target.value}))}
                name="content"
                id="desc"
                cols="30"
                rows="3"
              ></textarea>
            </div>
            <Button
              text="Gửi liên hệ"
              bgColor="bg-blue-500"
              textColor="text-white"
              fullwidth
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
