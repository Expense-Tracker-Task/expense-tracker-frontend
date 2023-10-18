import { API_URL } from "../../constants/api";
import { get } from "../../helpers/api-helper";

export const getCategories = async () => {
  const response = await get(API_URL + "/category/all");
  if (!response.status) return response;
  return response;
};
