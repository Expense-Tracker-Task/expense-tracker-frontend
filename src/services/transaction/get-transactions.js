import { API_URL } from "../../constants/api";
import { get } from "../../helpers/api-helper";

export const getTransactions = async () => {
  const response = await get(API_URL + "/transaction/all");
  if (!response.status) return response;
  return response;
};
