import { API_URL } from "../constants/api";
import { get } from "../helpers/api-helper";
import { getCookie } from "../helpers/cookie_helper";

export const getCurrentUser = async () => {
  const userId = getCookie("user_id");
  const response = await get(API_URL + "/user/" + userId);
  return response;
};
