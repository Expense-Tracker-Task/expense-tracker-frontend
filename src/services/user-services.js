import { API_URL } from "../constants/api";
import { get } from "../helpers/api-helper";

export const getCurrentUser = async () => {
  const response = await get(API_URL + "/users/me");
  return response;
};
