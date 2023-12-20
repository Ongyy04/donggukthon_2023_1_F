import { sendRequest } from '../utils/request';
import { invitationInstance } from './instance';

// 초대장 조회
export const getInvitation = (inviterId, groupId) =>
  sendRequest(invitationInstance, 'get', `/${inviterId}/${groupId}`, { inviterId, groupId });

// 링크 공유
export const shareLink = memberId => sendRequest(invitationInstance, 'put', '/', { memberId });

// 초대 수락
export const acceptInvitation = (memberId, groupId, inviterId) =>
  sendRequest(invitationInstance, 'post', '', { memberId, groupId, inviterId });
