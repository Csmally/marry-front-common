import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

interface RequestOptions extends AxiosRequestConfig {
  baseURL: string;
  timeout?: number;
  options?: object;
}

const createRequest = ({
  baseURL,
  timeout = 10000,
  headers = {},
}: RequestOptions): AxiosInstance => {
  // 创建axios实例
  const request = axios.create({
    baseURL, // 设置基础URL，用于所有请求
    timeout, // 设置请求超时时间，单位是毫秒
    headers,
  });

  // 使用拦截器（interceptor）配置请求和响应
  request.interceptors.request.use(
    (config) => {
      // 做一些设置请求参数的操作
      return config;
    },
    (error) => {
      // 对请求错误做一些处理
      return Promise.reject(error);
    }
  );

  request.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const { message: errorMessage = "网络连接错误", code } =
        error?.response?.data || {};
      // 对响应错误做一些处理
      return {
        success: false,
        code,
        data: null,
        message: errorMessage,
      };
    }
  );
  return request;
};

const request = createRequest({ baseURL: process.env.BASE_URL! });

export default request;
