import axios from "axios";
import {getCookie} from "./cookie-helper";

const API_URL = process.env.REACT_APP_APIURL;

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

function setAccessToken() {
  const token = getCookie("access_token");
  if (token != null) {
    axiosApi.defaults.headers.common["x-access-token"] = token;
  }
}

export async function get(url, config = {}) {
  setAccessToken();
  let response = await axiosApi.get(url, { ...config });
  return response.data;
}

export async function post(url, body = {}, config = {}) {
  setAccessToken();
  try {
    const response = await axiosApi.post(url, { ...body }, { ...config });
    return response.data;
  } catch (e) {
    if (e.response.status > 401) {
      window.location.href = "/maintenance";
      return
    }else if(e.response.status == 401){
      window.location.href = "/logout";
    }
    return {
      status: false,
      message: e.message,
      data: []
    }
  }
}

export async function put(url, data, config = {}) {
  setAccessToken();
  const response = await axiosApi.put(url, {...data}, {...config});
  return response.data;
}

export async function del(url, config = {}) {
  setAccessToken();
  let response = await axiosApi.delete(url, { ...config });
  return response.data;
}
