import { sendRequest } from '../utils/api';
import { settingInstance } from './instance';
//설정 화면 조회
export const getSetting = memberId => sendRequest(settingInstance, 'get', `/${memberId}`);
