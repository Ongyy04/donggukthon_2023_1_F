import { sendRequest } from '../utils/request';
import { authInstance } from './instance';

export const getUser = () => sendRequest(authInstance, 'get', '/decode');
