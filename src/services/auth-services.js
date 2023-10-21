import { API_URL } from "../constants/api";
import { post } from "../helpers/api-helper";
import { setCookie } from "../helpers/cookie_helper";

export const loginService = async (body) => {
  try {
    const response = await post(API_URL + "/auth/login", body);
    if (!response.status) return response;
    setCookie("username", response.data.username);
    setCookie("email", response.data.email);
    setCookie("firstName", response.data.firstName);
    setCookie("lastName", response.data.lastName);
    setCookie("access_token", response.data.access_token);
    return response;
  } catch (error) {
    return error;
  }
};

export const registerService = async (body) => {
  try {
    const response = await post(API_URL + "/auth/register", body);
    if (!response.status) return response;
    setCookie("username", response.data.username);
    setCookie("email", response.data.email);
    setCookie("firstName", response.data.firstName);
    setCookie("lastName", response.data.lastName);
    setCookie("access_token", response.data.access_token);
    return response;
  } catch (error) {
    return error;
  }
};
