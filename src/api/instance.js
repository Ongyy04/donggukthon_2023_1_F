import axios from "axios";

// 인증 토큰을 가져오는 함수 (여기서는 예시로 localStorage를 사용)
const getAuthToken = () => localStorage.getItem("ziio-token");

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const axiosAPI = (url, options) => {
  return axios.create({
    baseURL: BASE_URL,
    ...options,
  });
};

// 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행
axiosAPI.interceptors.request.use(
  async (config) => {
    // 토큰을 가져오기
    const token = await getAuthToken();

    // 토큰이 있으면 Authorization 헤더를 설정
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const groupAPI = axios.create(axiosAPI.defaults);
groupAPI.defaults.baseURL += "/group";

const voteAPI = axios.create(axiosAPI.defaults);
voteAPI.defaults.baseURL += "/vote";
