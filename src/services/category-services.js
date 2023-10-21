import { API_URL } from "../constants/api";
import { get, post } from "../helpers/api-helper";

export const getCategories = async () => {
  const response = await get(API_URL + "/category/all");
  if (!response.status) return response;
  return response;
};

export const saveCategory = async (body) => {
  const response = await post(API_URL + "/category", body);
  if (!response.status) return response;
  return response;
};
