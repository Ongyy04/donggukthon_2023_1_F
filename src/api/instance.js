import axios from 'axios';
import { applyInterceptors, getAuthToken } from '../utils/request';

const BASE_URL = process.env.REACT_APP_SERVER_URL;

const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행
applyInterceptors(defaultInstance);

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

const authInstance = axios.create(defaultInstance.defaults);
authInstance.defaults.baseURL += '/auth';

// 요청 인터셉터를 추가하여 요청이 전송되기 전에 실행
applyInterceptors(authInstance);

export {
  defaultInstance,
  groupInstance,
  voteInstance,
  invitationInstance,
  questionInstance,
  settingInstance,
  authInstance,
};
