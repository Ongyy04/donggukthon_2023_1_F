import { sendRequest } from '../utils/request';
import { groupInstance } from './instance';

// 그룹 조회
export const getGroups = memberId => sendRequest(groupInstance, 'get', `/${memberId}`);

// 그룹 생성
export const createGroup = (memberId, name) => sendRequest(groupInstance, 'post', '/create', { memberId, name });
