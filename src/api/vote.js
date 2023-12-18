import { createUrl, sendRequest } from "../utils/api";
import { voteInstance } from "./instance";

// 투표하기
export const vote = (questionId, voterId, selectedMemberId) =>
  sendRequest(voteInstance, "post", "/", {
    questionId,
    voterId,
    selectedMemberId,
  });

// 투표 목록
export const getQuestionList = (memberId) =>
  sendRequest(voteInstance, "get", `/${memberId}`);

// 투표 결과 조회
export const getResult = (memberId, questionId) =>
  sendRequest(
    voteInstance,
    "get",
    createUrl("/result", { member: memberId, question: questionId })
  );

// 투표 맞추기 화면 조회
export const getVote = (memberId, questionId) =>
  sendRequest(voteInstance, "get", "/guess", { memberId, questionId });

// 투표 맞추기
export const guess = (questionId, memberId, selectedMemberId) =>
  sendRequest(voteInstance, "put", "/guess", {
    questionId,
    memberId,
    selectedMemberId,
  });
