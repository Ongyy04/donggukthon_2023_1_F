import { sendRequest } from "../utils/api";
import { defaultInstance } from "./instance";

export const getInvitation = (memberId) =>
  sendRequest(defaultInstance, "get", `/home/${memberId}`);
