import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOGINSERVER_URL,
});

instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    return config;
  },

  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  // 응답을 내보내기 전 수행하는 함수
  function (response) {
    return response;
  },

  // 오류응답을 내보내기 전 수행되는 함수
  function (error) {
    return Promise.reject(error);
  }
);
export default instance;
