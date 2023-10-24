import { API_URL } from "../constants/api";
import { get, post } from "../helpers/api-helper";

export const getTransactions = async () => {
  const response = await get(API_URL + "/transaction/all");
  return response;
};

export const saveTransaction = async (body) => {
  const response = await post(API_URL + "/transaction", body);
  return response;
};
