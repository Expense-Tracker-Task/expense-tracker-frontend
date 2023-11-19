import { API_URL } from "../constants/api";
import { get, post, del } from "../helpers/api-helper";

export const getTransactions = async () => {
  const response = await get(API_URL + "/transactions");
  return response;
};

export const saveTransaction = async (
  name,
  amount,
  description,
  selectedDate,
  currentUserId,
  selectedCategoryId,
  isExpense
) => {
  const body = {
    name: name,
    amount: amount,
    description: description,
    date: selectedDate,
    user: {
      id: currentUserId,
    },
    category: {
      id: selectedCategoryId,
    },
    expense: isExpense,
  };
  const response = await post(API_URL + "/transactions", body);
  return response;
};

export const deleteTransaction = async (id) => {
  const response = await del(API_URL + "/transactions/" + id);
  return response;
};
