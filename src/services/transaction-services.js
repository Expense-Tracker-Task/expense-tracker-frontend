import { API_URL } from "../constants/api";
import { get, post } from "../helpers/api-helper";

export const getTransaction = async (body) => {
  const response = await get(API_URL + "/transaction", body);
  if (!response.status) return response;
  return response;
};

export const saveTransaction = async (body) => {
  const response = await post(API_URL + "/transaction", body);
  if (!response.status) return response;
  return response;
};
