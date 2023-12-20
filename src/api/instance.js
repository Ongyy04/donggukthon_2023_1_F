import axios from 'axios';

// 인증 토큰을 가져오는 함수 (여기서는 예시로 localStorage를 사용)
const getAuthToken = () => localStorage.getItem('ziio-token');

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행
defaultInstance.interceptors.request.use(
  async config => {
    // 토큰을 가져오기
    const token = await getAuthToken();

    // 토큰이 있으면 Authorization 헤더를 설정
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

const groupInstance = axios.create(defaultInstance.defaults);
groupInstance.defaults.baseURL += '/group';

const voteInstance = axios.create(defaultInstance.defaults);
voteInstance.defaults.baseURL += '/vote';

const questionInstance = axios.create(defaultInstance.defaults);
questionInstance.defaults.baseURL += '/question';

const invitationInstance = axios.create(defaultInstance.defaults);
invitationInstance.defaults.baseURL += '/invitation';

const settingInstance = axios.create(defaultInstance.defaults);
settingInstance.defaults.baseURL += '/setting';

export { defaultInstance, groupInstance, voteInstance, invitationInstance, questionInstance, settingInstance };
