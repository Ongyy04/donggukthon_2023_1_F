import { sendRequest } from "../utils/api";
import { invitationInstance } from "./instance";

// 초대장 조회
export const getInvitation = (memberId, groupId) =>
  sendRequest(invitationInstance, "get", `/${memberId}/${groupId}`);

// 링크 공유
export const shareLink = (memberId) =>
  sendRequest(invitationInstance, "put", "/", { memberId });

// 초대 수락
export const acceptInvitation = (memberId, groupId) =>
  sendRequest(invitationInstance, "post", "/", { memberId, groupId });
