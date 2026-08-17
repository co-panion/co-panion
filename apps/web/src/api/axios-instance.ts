import axios, { AxiosRequestConfig } from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  withCredentials: true,
});

// Orval이 사용할 커스텀 래퍼 함수
export const customInstance = <T>(
  url: string,
  options?: Record<string, unknown>,
): Promise<T> => {
  const promise = axiosInstance({
    url, // Orval이 생성한 URL 주소
    ...options, // method, params, headers 등이 포함된 설정 객체
  }).then(({ data }) => data);

  return promise;
};
