import { sendRequest } from '../utils/request';
import { settingInstance } from './instance';
//설정 화면 조회
export const getSetting = memberId => sendRequest(settingInstance, 'get', `/${memberId}`);
/*
 그룹 조회
export const getGroups = (memberId) =>
sendRequest(groupInstance, "get", `/${memberId}`);

// 그룹 생성
export const createGroup = (memberId, name) =>
sendRequest(groupInstance, "post", "/create", { memberId, name });
*/
