import { API_URL } from "../../constants/api";
import { post } from "../../helpers/api-helper";

export const saveTransaction = async (body) => {
  const response = await post(API_URL + "/transaction", body);
  if (!response.status) return response;
  return response;
};
