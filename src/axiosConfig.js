import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
})

instance.interceptors.request.use(function (config) {
    // Làm gì đó trước khi request dược gửi đi
    const token = localStorage.getItem('persist:auth')
    console.log(token)
    return config;
  }, function (error) {
    // Làm gì đó với lỗi request
    console.log(error)
    return Promise.reject(error);
  });

// Thêm một bộ đón chặn request
instance.interceptors.request.use(function (config) {
  // Làm gì đó trước khi request dược gửi đi
  // Gắn token vào header
  return config;
}, function (error) {
  return Promise.reject(error);
});

// Thêm một bộ đón chặn response
instance.interceptors.response.use(function (response) {
  // Refresh token
  return response;
}, function (error) {
  // Bất kì mã trạng thái nào lọt ra ngoài tầm 2xx đều khiến hàm này được trigger\
  // Làm gì đó với lỗi response
  return Promise.reject(error);
});
export default instance