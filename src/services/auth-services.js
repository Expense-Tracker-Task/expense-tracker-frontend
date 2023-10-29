import { API_URL } from "../constants/api";
import { post } from "../helpers/api-helper";
import { setCookie } from "../helpers/cookie_helper";

export const loginService = async (body) => {
  try {
    const response = await post(API_URL + "/auth/login", body);
    if (!response.status) return response;
    setCookie("user_id", response.data.userId);
    setCookie("username", response.data.username);
    setCookie("email", response.data.email);
    setCookie("firstName", response.data.firstName);
    setCookie("lastName", response.data.lastName);
    setCookie("current_balance", response.data.balance);
    setCookie("access_token", response.data.accessToken);
    return response;
  } catch (error) {
    return error;
  }
};

export const registerService = async (body) => {
  try {
    const response = await post(API_URL + "/auth/register", body);
    if (!response.status) return response;
    setCookie("user_id", response.data.userId);
    setCookie("username", response.data.username);
    setCookie("email", response.data.email);
    setCookie("firstName", response.data.firstName);
    setCookie("lastName", response.data.lastName);
    setCookie("current_balance", response.data.balance);
    setCookie("access_token", response.data.accessToken);
    return response;
  } catch (error) {
    return error;
  }
};

export const logoutService = async () => {
  setCookie("user_id", null);
  setCookie("username", null);
  setCookie("email", null);
  setCookie("firstName", null);
  setCookie("lastName", null);
  setCookie("current_balance", null);
  setCookie("access_token", null);
  window.location.reload();
};
