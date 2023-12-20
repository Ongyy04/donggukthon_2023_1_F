import { createUrl, sendRequest } from '../utils/request';
import { voteInstance } from './instance';

// 투표하기
export const vote = (questionId, voterId, selectedMemberId, groupId) =>
  sendRequest(voteInstance, 'post', '', {
    questionId,
    voterId,
    selectedMemberId,
    groupId,
  });

// 투표 결과 조회
export const getResult = (memberId, groupId, questionId) =>
  sendRequest(voteInstance, 'get', `/result/${memberId}/${groupId}/${questionId}`);

// 투표 맞추기 화면 조회
export const getVoteGuess = (memberId, groupId, questionId) =>
  sendRequest(voteInstance, 'get', `/guess/${memberId}/${groupId}/${questionId}`);

// 투표 맞추기
export const guess = (questionId, memberId, selectedMemberId) =>
  sendRequest(voteInstance, 'put', '/guess', {
    questionId,
    memberId,
    selectedMemberId,
  });
