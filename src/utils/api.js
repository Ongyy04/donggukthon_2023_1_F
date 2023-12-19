// 공통 요청 처리기
export const sendRequest = async (instance, method, url, data = {}) => {
  try {
    const response = await instance[method](url, data);
    return response.data;
  } catch (error) {
    console.error(error);
    return error.response.data;
  }
};

// 동적 URL 생성
export const createUrl = (path, params = {}) => {
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  return `${path}${query ? `?${query}` : ''}`;
};
