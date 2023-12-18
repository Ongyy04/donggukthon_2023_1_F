import { createUrl, sendRequest } from "../utils/api";
import { groupInstance } from "./instance";

// 그룹 조회
export const getGroups = (memberId) =>
  sendRequest(groupInstance, "get", `/${memberId}`);

// 그룹 생성
export const createGroup = (memberId, name) =>
  sendRequest(groupInstance, "post", "/", { memberId, name });

// 링크 공유
export const shareLink = (memberId) =>
  sendRequest(groupInstance, "put", "/invitation", { memberId });

// 초대 수락
export const acceptInvitation = (memberId, groupId) =>
  sendRequest(groupInstance, "post", "/invitation", { memberId, groupId });

// 투표 질문 조회(그룹 입장 겸용)
export const getQuestion = (memberId, groupId, index) =>
  sendRequest(
    groupInstance,
    "get",
    createUrl("/", { member: memberId, group: groupId, index })
  );
