import axios from "axios";
import jwt from "jsonwebtoken";

import { apiHandler } from "@utils/api/api-handler";

const API_URL = "/api/auth/";

const token = "";

const config = { headers: { Authorization: `Bearer ${token}` } };

export const register = async (
  name: string,
  lastName: string,
  email: string,
  password: string
) => {
  const { data } = await axios.post(API_URL + "signup", {
    name,
    lastName,
    email,
    password,
  });

  return data;
};

export const login = async (username: string, password: string) => {
  const { data } = await axios.post(API_URL + "signin", {
    username,
    password,
  });

  return data;
};

export const logout = () => {
  localStorage.removeItem("cub_user");
};

export default {
  register,
  login,
  logout,
};
