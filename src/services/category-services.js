import { API_URL } from "../constants/api";
import { get, post, put } from "../helpers/api-helper";
import { getCookie } from "../helpers/cookie_helper";

export const getCategories = async () => {
  const response = await get(API_URL + "/category/all");
  return response;
};

export const saveCategory = async (name) => {
  let userId = getCookie("user_id");
  let body = {
    name: name,
    amount: 0,
    user: {
      id: userId,
    },
  };
  const response = await post(API_URL + "/category", body);
  return response;
};

export const updateCategory = async (body) => {
  const response = await put(API_URL + "/category", body);
  return response;
};
