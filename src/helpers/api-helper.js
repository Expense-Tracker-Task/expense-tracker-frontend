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

function setAuthHeader() {
  const token = getCookie("access_token") || null; // get token from cookie, if token is null or empty string, assign it to null
  if (token != null) {
    axiosApi.defaults.headers.common["Authorization"] = "Bearer " + token;
    axiosApi.defaults.headers.common["Content-Type"] = "application/json";
  }
}

export async function get(url) {
  try {
    setAuthHeader();
    let response = await axiosApi.get(url);
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
    setAuthHeader();
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
    setAuthHeader();
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
    setAuthHeader();
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
