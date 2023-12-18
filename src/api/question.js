import { sendRequest } from "../utils/api";
import { questionInstance } from "./instance";

// 투표 질문 조회 (질문 개별 단위로 전달)
export const getQuestion = (memberId, groupId, questionId) =>
  sendRequest(questionInstance, "get", `/${memberId}/${groupId}/${questionId}`);

// 투표 질문 목록 조회
export const getQuestions = () => sendRequest(questionInstance, "get", "/");
