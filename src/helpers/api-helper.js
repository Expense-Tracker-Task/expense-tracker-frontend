import axios from "axios";
import { getCookie } from "./cookie_helper";
import { API_URL } from "../constants/api";

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

function setAccessToken() {
  const token = getCookie("access_token");
  if (token != null) {
    axiosApi.defaults.headers.common["x-access-token"] = token;
  }
}

export async function get(url, config = {}) {
  try {
    setAccessToken();
    axiosApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    let response = await axiosApi.get(url, { ...config });
    return response.data;
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: [],
    };
  }
}

export async function post(url, body = {}, config = {}) {
  try {
    setAccessToken();
    axiosApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const response = await axiosApi.post(url, { ...body }, { ...config });
    return response.data;
  } catch (e) {
    return {
      status: false,
      message: e.message,
      data: [],
    };
  }
}

export async function put(url, data, config = {}) {
  try {
    setAccessToken();
    axiosApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    const response = await axiosApi.put(url, { ...data }, { ...config });
    return response.data;
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: [],
    };
  }
}

export async function del(url, config = {}) {
  try {
    setAccessToken();
    axiosApi.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    let response = await axiosApi.delete(url, { ...config });
    return response.data;
  } catch (error) {
    return {
      status: false,
      message: error.message,
      data: [],
    };
  }
}
