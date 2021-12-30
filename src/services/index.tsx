import { register, login, logout } from "./auth";
import { postNewOrder } from "./orders";
import { addProductToDB, removeProductFromDB } from "./products";
import { fetchUserList } from "./users";

export {
  register,
  login,
  logout,
  postNewOrder,
  addProductToDB,
  removeProductFromDB,
  fetchUserList,
};
