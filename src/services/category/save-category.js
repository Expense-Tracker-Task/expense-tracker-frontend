import { API_URL } from "../../constants/api";
import { post } from "../../helpers/api-helper";

export const saveCategory = async (body) => {
  const response = await post(API_URL + "/category", body);
  if (!response.status) return response;
  return response;
};
